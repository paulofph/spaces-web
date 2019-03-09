import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Space } from 'src/app/models/entities/space';
import { SpaceFilter } from 'src/app/models/filters/space-filter';
import { HttpUtilsService } from '../utils/http-utils.service';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(
    private readonly httpClient: HttpClient,
    private utils: HttpUtilsService
  ) { }

  getSpaces(spaceFilter?: SpaceFilter): Observable<Space[]> {
    let queryParams = null
    if(spaceFilter) {
      const params = {
        'lat': spaceFilter.location.latitude,
        'lon': spaceFilter.location.longitude,
        'radius': spaceFilter.radius,
        'guest': spaceFilter.guestCount
      }
      queryParams = this.utils.queryParamsBuilder(params)
    }
    return this.httpClient.get<Space[]>(`${environment.apiUrl}/spaces` + (queryParams ? queryParams: ''));
  }
}
