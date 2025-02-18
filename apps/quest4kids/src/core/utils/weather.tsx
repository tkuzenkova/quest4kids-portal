import { WeatherCode } from "../consts/weatherCodes";

export const getWeatherDescription = (weatherCode: number): string => {
	if (!weatherCode) return "";
	if (typeof weatherCode !== "number") return "";

	return WeatherCode[weatherCode]?.text || "";
};

export const getWeatherIcon = (weatherCode: number): string | null => {
	if (!weatherCode) return null;
	if (typeof weatherCode !== "number") return null;

	return WeatherCode[weatherCode]?.icon || null;
};
