var firstBy=function(){function n(n,t){if("function"!=typeof n){var r=n;n=function(n){return n[r]?n[r]:""}}if(1===n.length){var u=n;n=function(n,t){return u(n)<u(t)?-1:u(n)>u(t)?1:0}}return-1===t?function(t,r){return-n(t,r)}:n}function t(t,u){return t=n(t,u),t.thenBy=r,t}function r(r,u){var f=this;return r=n(r,u),t(function(n,t){return f(n,t)||r(n,t)})}return t}();

import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'asArray'
})

export class AsArrayPipe implements PipeTransform {
    transform(value: any, args: any): any {
        if (!value) {
            return [];
        }

        let arrayWithKeys = Object.keys(value).map(key => {
            let prop = value[key];
            prop.key = key;

            return prop;
        });

        if (args[0] == 'length') {
            return arrayWithKeys.length;
        }
        
        if(args[0] == 'sort') {
            arrayWithKeys.sort(
                firstBy((a, b) => b.points - a.points)
                .thenBy((a, b) => (a.byes || 0) - (b.byes || 0))
                .thenBy((a, b) => (b.buchholz || 0) - (a.buchholz || 0))
                .thenBy((a, b) => b.blackMatches - a.blackMatches)
                .thenBy((a, b) => (b.wins || 0) - (a.wins || 0))
            )
        }

        return arrayWithKeys;
    }
}

