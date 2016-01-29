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

        return arrayWithKeys;
    }
}