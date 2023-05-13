export interface CurrentWeatherDetailsType {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export const EmptyCurrentDetails: CurrentWeatherDetailsType = {
    id: 0,
    main: "",
    description: "",
    icon: "",
}