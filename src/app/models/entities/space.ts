import { Location } from './location';

export class Space {
    id: Number;
    location: Location = new Location();
    type: SpaceType;
    commodities: SpaceCommodity[] = [];
}

export class SpaceType {
    id: Number;
    label: String;
} 

export class SpaceCommodity {
    id: Number;
    label: String;
    icon: String;
    selected: Boolean;

    constructor(space) {
        for (let key in space) {
            this[key] = space[key];
        }
    }
} 
