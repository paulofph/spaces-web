import { Injectable } from '@angular/core';
import { Location } from './../../models/entities/location'

declare let google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  constructor() { }

  public coordinateToAddress(location: Location, callBack: Function) {
    let geocoder = new google.maps.Geocoder();
      let latlng = new google.maps.LatLng(location.latitude, location.longitude);
      let request = { latLng: latlng };
      return geocoder.geocode(request, callBack);
    

      // (results, status) => {
      //   console.log(results,results[5])
      //   if (status === google.maps.GeocoderStatus.OK) {
      //     let result = results[5];
      //     let rsltAdrComponent = result.address_components;
      //     let resultLength = rsltAdrComponent.length;
      //     if (result != null) {
      //       return result.formatted_address;
      //     } else {
      //       return 'No address available!';
      //     }
      //   }
      // }
  }
}
