import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  requestFacebookRedirectUri(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/auth/facebook/uri`);
  }
   requestFacebookAccessToken(code: string): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/auth/facebook/token`, { code });
  }
   facebookSignIn(access_token: string) {
    return this.httpClient.post(`${environment.apiUrl}/auth/facebook/signin`, { access_token });
  }
}
