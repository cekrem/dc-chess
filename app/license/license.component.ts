declare const Stripe;

import { Component, OnInit } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
import { Http, Headers } from 'angular2/http';

@Component({
    selector: 'license',
    templateUrl: '/app/license/license.component.html',
    directives: [FORM_DIRECTIVES]
})

export class LicenseComponent implements OnInit {
    private _http: Http;

    constructor(http: Http) {
        this._http = http;
        Stripe.setPublishableKey('pk_test_MW11sALBW0Sbkf4slADJvX6U');
    }

    ngOnInit() { }
    onSubmit(value) {
        console.log(value);
        Stripe.card.createToken(value, (status, response) => {
            if (response.error) {
                alert(response.error.message);
            }
            else {
                console.log(response.id);
                let headers = new Headers();
                headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

                let payload = 'stripeToken=' + response.id;

                this._http.post('http://dc-chess.com/license/buy.php', payload, {
                    headers: headers
                })
                    .map(res => res.json())
                    .subscribe(res => {
                        console.log(res);
                    })
            }
        });
    }
}