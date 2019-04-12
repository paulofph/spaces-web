import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  constructor(
    private translateService: TranslationService
  ){}
  transform(value: string, args?: any): any {
    return this.translateService.translate(value);
  }
}
