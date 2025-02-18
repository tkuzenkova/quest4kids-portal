"use client";

import { WeatherContext } from "@/components/providers/WeatherProvider";
import { Card } from "@repo/ui";
import { useContext } from "react";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";

const WeatherCard = () => {
	const { weather } = useContext(WeatherContext);

	return (
		<Card className="glass-bg h-[440px]">
			<SearchForm />
			{weather ? <WeatherInfo weather={weather} /> : null}
		</Card>
	);
};

export default WeatherCard;
