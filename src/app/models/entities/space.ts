import { Location } from './location';

export class Space {
    id: Number;
    title: string;
    description: string;
    location: Location = new Location();
    type: SpaceType;
    traderType: SpaceTraderType;
    commodities: SpaceCommodity[] = [];
    rating: number;
}

export class SpaceType {
    id: Number;
    label: String;
} 

export class SpaceTraderType {
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
