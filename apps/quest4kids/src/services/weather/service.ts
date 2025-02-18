import { request } from "../_common/request";

// const WEATHER_API = "test";
const WEATHER_API = process.env.NEXT_PUBLIC_WEATHER_API_URL;
const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const weatherService = {
	getCurrentWeather: (city: string) => {
		const url = `${WEATHER_API}/weather/realtime?location=${city}&apikey=${WEATHER_API_KEY}`;

		const options = {
			method: "GET",
			url,
		};

		return request(options);
	},
};
