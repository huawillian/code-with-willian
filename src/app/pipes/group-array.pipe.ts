import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupArray'
})
export class GroupArrayPipe implements PipeTransform {

  transform(array: Array<any>, size: number): any {
    let acc = [];
    
    if(!array || !size) {
      return acc;
    }
    
    for(let i = 0; i < array.length; i+=size) {
      acc.push(array.slice(i, i + size));
    }

    return acc;
  }

}
