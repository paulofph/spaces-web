import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private translations: any[];

  constructor(
    private http: HttpClient
  ) { }


  public load(): Promise<any> {
    return new Promise((resolve, reject) => {
            this.getTranslations().subscribe((response:any) => {
              this.translations = response;
              resolve();
            });
        });
  }

  private getTranslations():Observable<any>{
    return this.http.get("./../../../assets/translations/translations.json");
  }

  public translate(key: string):string{
    if(key === undefined)
      return ''
    const result = this.translations.filter(obj => obj.key == key)[0]
    return result.pt;
  }
}
