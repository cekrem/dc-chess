System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent() {
                    this._baseUrl = 'https://dc-pro.firebaseio.com/users/';
                    this._baseRef = new Firebase(this._baseUrl);
                    this.hits = [];
                }
                SearchComponent.prototype.search = function (id) {
                    var hits = [];
                    this._baseRef
                        .on('child_added', function (snapshot) {
                        var userKey = snapshot.key();
                        snapshot.child('tournaments').ref() // get the tournaments ref
                            .orderByChild('id')
                            .endAt(id)
                            .on('child_added', function (snapshot) {
                            var hit = snapshot.val();
                            hit.key = snapshot.key();
                            hit.userKey = userKey;
                            hits.push(hit);
                        });
                    });
                    console.log(hits);
                    this.hits = hits;
                };
                SearchComponent.prototype.ngOnInit = function () { };
                SearchComponent = __decorate([
                    core_1.Component({
                        selector: 'search',
                        templateUrl: 'app/search/search.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchComponent);
                return SearchComponent;
            })();
            exports_1("SearchComponent", SearchComponent);
        }
    }
});
//# sourceMappingURL=search.component.js.map