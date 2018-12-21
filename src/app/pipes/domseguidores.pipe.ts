import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguidores'
})
export class DomseguidoresPipe implements PipeTransform {

  constructor (private domSanitiz: DomSanitizer) {}

  transform(value: string, url: string): any {
    return this.domSanitiz.bypassSecurityTrustResourceUrl( url + value);
  }

}
