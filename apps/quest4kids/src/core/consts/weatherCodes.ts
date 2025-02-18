interface WeatherCodeType {
	[key: number]: { text: string; icon: string };
}

export const WeatherCode: WeatherCodeType = {
	0: { text: "Unknown", icon: "/10000_clear_large@2x.png" },
	1000: { text: "Clear, Sunny", icon: "/10000_clear_large@2x.png" },
	1100: { text: "Mostly Clear", icon: "/11000_mostly_clear_large@2x.png" },
	1102: { text: "Mostly Cloudy", icon: "/11020_mostly_cloudy_large@2x.png" },
	1001: { text: "Cloudy", icon: "/10010_cloudy_large@2x.png" },
	2000: { text: "Fog", icon: "/20000_fog_large@2x.png" },
	2100: { text: "Light Fog", icon: "/21000_fog_light_large@2x.png" },
	4000: { text: "Drizzle", icon: "/40000_drizzle_large@2x.png" },
	4001: { text: "Rain", icon: "/40010_rain_large@2x.png" },
	4200: { text: "Light Rain", icon: "/42000_rain_light_large@2x.png" },
	4201: { text: "Heavy Rain", icon: "/42010_rain_heavy_large@2x.png" },
	5000: { text: "Snow", icon: "/50000_snow_large@2x.png" },
	5001: { text: "Flurries", icon: "/50010_flurries_large@2x.png" },
	5100: { text: "Light Snow", icon: "/51000_snow_light_large@2x.png" },
	5101: { text: "Heavy Snow", icon: "/51010_snow_heavy_large@2x.png" },
	6000: {
		text: "Freezing Rain",
		icon: "/60000_freezing_rain_drizzle_large@2x.png",
	},
	6200: {
		text: "Light Freezing Rain",
		icon: "/62000_freezing_rain_light_large@2x.png",
	},
	6201: {
		text: "Heavy Freezing Rain",
		icon: "/62010_freezing_rain_heavy_large@2x.png",
	},
	7000: { text: "Ice Pellets", icon: "/70000_ice_pellets_large@2x.png" },
	7101: {
		text: "Heavy Ice Pellets",
		icon: "/71010_ice_pellets_heavy_large@2x.png",
	},
	7102: {
		text: "Light Ice Pellets",
		icon: "/71020_ice_pellets_light_large@2x.png",
	},
	8000: { text: "Thunderstorm", icon: "/80000_tstorm_large@2x.png" },
};
