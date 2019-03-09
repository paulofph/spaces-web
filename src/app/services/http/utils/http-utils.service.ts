import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilsService {

  queryParamsBuilder(values) {
    let query = ''
    Object.keys(values).forEach((key, i) => {
      if(this._isFirstQueryParam(query)){
        if(values[key])
          query = query + '?' + key + '=' + values[key]
      } else {
        if(values[key])
          query = query + '&' + key + '=' + values[key]
      }
    })
    return query;
  }

  _isFirstQueryParam(query) {
    return query.length === 0
  }
}
