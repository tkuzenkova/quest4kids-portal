import { COOKIES } from "@/core/consts/cookies";
import { DEFAULT_CITY } from "@/core/consts/default";
import { GeoLocationType } from "@/core/types/geoLocation";
import { IWeather, IWeatherTomorrowApi } from "@/core/types/weather";
import { cookies } from "next/headers";
import { getMappedWeather } from "./mapper";

// https://app.tomorrow.io/home
export async function getCurrentWeather(): Promise<{
	data: IWeather | null;
	error: string | null;
}> {
	let error: string | null = null;
	let data: IWeather | null = null;
	let city = DEFAULT_CITY;

	const cookieStore = await cookies();
	const location = cookieStore.get(COOKIES.USER_LOCATION);

	const locationData: GeoLocationType = location
		? JSON.parse(location.value)
		: null;

	if (locationData.status === "success") {
		city = locationData.city;
	}

	try {
		// const res: IWeatherTomorrowApi =
		// await weatherService.getCurrentWeather(city);

		const res = await {
			data: {
				time: "2022-01-01T12:00:00Z",
				values: {
					temperature: 28,
					weatherCode: 1000,
					uvIndex: 2,
				},
			},
			location: {
				name: "Wroclaw, Poland",
			},
		};
		data = getMappedWeather(res as IWeatherTomorrowApi);
	} catch (err: any) {
		console.log("error", err);

		error = err.message || "An error occurred while fetching weather data.";
	}

	return { data, error };
}
