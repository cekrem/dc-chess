import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'search',
    templateUrl: 'app/search/search.component.html'
})

export class SearchComponent implements OnInit {
    private _baseUrl: string;
    private _baseRef: Firebase;
    
    public hits: Array<any>;

    constructor() {
        this._baseUrl = 'https://dc-pro.firebaseio.com/users/';
        this._baseRef = new Firebase(this._baseUrl);
        this.hits = [];
    }

    search(id: string) {
        let hits = [];
        this._baseRef
            .on('child_added', snapshot => { // for each user
                let userKey = snapshot.key();
                snapshot.child('tournaments').ref() // get the tournaments ref
                .orderByChild('id')
                .startAt(id)
                .on('child_added', snapshot => {
                    let hit = snapshot.val();
                    hit.key = snapshot.key();
                    hit.userKey = userKey;
                    
                    hits.push(hit);
                })
                   
            })
        
        console.log(hits);
        this.hits = hits;
    }

    ngOnInit() { }
}
