export interface DailyWeatherFeelsLikeType {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

export const EmptyDailyWeatherFeelsLike: DailyWeatherFeelsLikeType = {
    day: 0,
    night: 0,
    eve: 0,
    morn: 0,
}