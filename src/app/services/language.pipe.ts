import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertLanguage'
})
export class LanguagePipe implements PipeTransform {

  transform(value: any): any {
    if(value === 'en' || 'EN' || 'En') {
      return value = 'English';
    } else if(value === 'ES' || 'es' || 'Es') {
      return value = 'Spanish';
    } else if(value === 'FR' || 'fr' || 'Fr') {
      return value == 'French';
    } else if(value === 'DR' || 'dr' || 'Dr') {
      return value = 'German';
    } else if(value === 'IT' || 'it' || 'It') {
      return value = 'Italian';
    } else if(value === 'PT' || 'pt' || 'Pt') {
      return value = 'Portuguese';
    } else if(value === 'JA' || 'ja' || 'Ja') {
      return value = 'Japanese';
    } else {
      return value;
    }
  }

}
