export class Location {
    longitude: Number;
    latitude: Number;
    address: Address;
}

export class Address {
    route: string = null;
    locality: string = null;
    administrativeArea: string = null;
    country: string = null;
    postalCode: string = null;
    streetNumber: string = null;
    formatedAddress: string;
}
