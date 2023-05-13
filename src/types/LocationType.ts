import {EmptyLocationPosition, LocationPositionType} from "./LocationPositionType";

export interface LocationType {
    position: LocationPositionType;
    country: string;
    locality: string;
}

export const EmptyLocation: LocationType = {
    position: EmptyLocationPosition,
    country: "",
    locality: ""
}