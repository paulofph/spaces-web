import { Injectable, Injector, Inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import { LocalStorageService } from '../services/local-storage/local-storage.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
constructor(
    private localStorage: LocalStorageService
) { }

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authorizedRequest = request.clone();
    const tokenId = this.localStorage.get('token');
    if(tokenId){
        authorizedRequest = request.clone(
            {
                setHeaders: {
                    Authorization: 'Bearer ' + tokenId
                }
            }
        );
    }
    //send the newly created request
    return next.handle(authorizedRequest)
    }
}