import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getLoggedInUser(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/users/me`);
  }
}
