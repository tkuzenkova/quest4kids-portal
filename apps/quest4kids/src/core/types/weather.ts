// this interface contains the types for the tomorrow.io weather api
export interface IWeatherTomorrowApi {
	data: {
		time: string;
		values: {
			temperature: number;
			weatherCode: number;
			uvIndex: number;
		};
	};
	location: {
		name: string;
	};
}

export interface IWeather {
	temperature: number;
	weatherCode: number;
	uvIndex: number;
	time: string;
	city: string;
}
