interface GeoLocationSuccess {
	lat: number;
	lon: number;
	country: string;
	city: string;
	regionName: string;
	status: "success";
	query: string;
}

interface GeoLocationFail {
	status: "fail";
	message: string;
	query: string;
}

export type GeoLocationType = GeoLocationSuccess | GeoLocationFail;
