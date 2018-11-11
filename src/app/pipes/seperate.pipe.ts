import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sep'
})
//Use this pipe in order to convert UTC(Coordinated Universal Time) to IDT(Israeli Daylight Time)
export class SeperatePipe implements PipeTransform {
    transform(data: Array<string>) {
        let string: string = "";
        let length = data.length;

        data.forEach((char, i) => {
            if (length - 1 > i) {
                string = string.concat(char + " | ")
            } else {
                string = string.concat(char)

            }
        });

        return string
    }

}