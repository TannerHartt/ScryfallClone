import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertLanguage'
})
export class LanguagePipe implements PipeTransform {

  transform(value: any): any {
    if(value === 'en' || 'EN' || 'En') {
      return 'English';
    } else if(value === 'ES' || 'es' || 'Es') {
      return 'Spanish';
    } else if(value === 'FR' || 'fr' || 'Fr') {
      return 'French';
    } else if(value === 'DR' || 'dr' || 'Dr') {
      return 'German';
    } else if(value === 'IT' || 'it' || 'It') {
      return 'Italian';
    } else if(value === 'PT' || 'pt' || 'Pt') {
      return 'Portuguese';
    } else if(value === 'JA' || 'ja' || 'Ja') {
      return 'Japanese';
    } else {
      return value;
    }
  }

}
