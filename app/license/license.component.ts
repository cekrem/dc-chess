declare const StripeCheckout;
declare const Firebase;

import { Component, OnInit, EventEmitter, Output } from 'angular2/core';
import { Http, Headers } from 'angular2/http';

@Component({
    selector: 'license',
    templateUrl: '/app/license/license.component.html'
})

export class LicenseComponent implements OnInit {
    private _http: Http;
    private _handler: any;

    @Output() public response: EventEmitter<Array<string>>;

    constructor(http: Http) {
        this.response = new EventEmitter();

        this._http = http;
        this._handler = StripeCheckout.configure({
            key: 'pk_live_UkgJ2mGYH84gTzqmiu5RK5lH',
            image: 'https://s3.amazonaws.com/stripe-uploads/acct_17et1FEqcpzC3Dk3merchant-icon-1455617968443-dc.png',
            locale: 'auto',
            token: (token) => {
                let headers = new Headers();
                headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

                let username = token.email.replace(/\W+/g, '-').toLowerCase();
                let payload = 'stripeToken=' + token.id + '&stripeEmail=' + token.email + '&username=' + username;

                this._http.post('http://dc-chess.com/license/charge.php', payload, {
                    headers: headers
                })
                    .map(res => res.json())
                    .subscribe(res => {
                        console.log(res);

                        try {
                            // This should work, but we don't take any chances. Rather lose customer Id than customer :)
                            let userRef: Firebase = new Firebase('https://dc-pro.firebaseio.com/users/' + res[0]);
                            userRef.child('customerId').set(res[2]);
                        } catch (error) {
                            console.error(error);
                        }

                        this.response.emit(res);
                    });
            }
        });
    }

    buy() {
        this._handler.open({
            name: 'DC Apps AS',
            description: 'Subscription (yearly)',
            currency: 'nok',
            amount: 100000
        });
    }


    ngOnInit() { }
}