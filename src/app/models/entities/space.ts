import { Location } from './location';

export class Space {
    id: Number;
    location: Location;
    type: SpaceType;
}

export class SpaceType {
    id: Number;
    label: String;
} 

export class Amenity {
    id: Number;
    label: String;
    icon: String;
    selected: Boolean;
} 
