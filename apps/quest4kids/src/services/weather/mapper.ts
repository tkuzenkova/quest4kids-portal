import { IWeather, IWeatherTomorrowApi } from "@/core/types/weather";

export const getMappedWeather = (res: IWeatherTomorrowApi): IWeather => ({
	time: res.data.time,
	temperature: Math.round(res.data.values.temperature),
	weatherCode: res.data.values.weatherCode,
	uvIndex: res.data.values.uvIndex,
	city: res.location.name.split(",")[0] || "",
});
