export interface DailyWeatherTempType {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

export const EmptyDailyWeatherTemp: DailyWeatherTempType = {
    day: 0,
    min: 0,
    max: 0,
    night: 0,
    eve: 0,
    morn: 0,
}