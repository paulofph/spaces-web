import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Space } from 'src/app/models/entities/space';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getSpaces(location?: Location): Observable<Space[]> {
    return this.httpClient.get<Space[]>(`${environment.apiUrl}/spaces`);
  }
}
