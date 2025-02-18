import React from "react";
import SearchedWeather from "./SearchedWeather";
import WeatherCard from "./WeatherCard";

const WeatherPage: React.FC = () => {
	return (
		<div className="grid max-w-screen-lg grid-cols-1 gap-4 p-4 lg:grid-cols-2">
			<WeatherCard />
			<SearchedWeather />
		</div>
	);
};

export default WeatherPage;
