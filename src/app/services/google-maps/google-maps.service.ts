import { Injectable } from '@angular/core';
import { Location, Address } from './../../models/entities/location'

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
  }

  public computeAddress(mapsEvent): any {
    const rawAddress = mapsEvent.address_components;
    const address = new Address();
    const addressKeys = {
      route: 'route',
      locality: 'locality',
      administrativeArea: 'administrative_area_level_1',
      country: 'country',
      postalCode: 'postal_code',
      streetNumber: 'street_number'
    }
    Object.keys(address).forEach(key => {
      address[key] = rawAddress.find(el => el.types.includes(addressKeys[key])).long_name;
    })
    address.formatedAddress = mapsEvent.formatted_address;

    return address;
  }
}
