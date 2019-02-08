import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor( ) { }

  set (key: string, value: string) {
    localStorage.setItem(key, value);
  }


}
