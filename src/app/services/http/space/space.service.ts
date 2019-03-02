import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getSpaces (): Observable<any[]> {
    return null
  }
}
