import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'underscore'
})
export class UnderscorePipe implements PipeTransform {

  transform(value: any): any {
    if(value.includes('_')) return value.replace('_', ' ');
    return value;
  }

}
