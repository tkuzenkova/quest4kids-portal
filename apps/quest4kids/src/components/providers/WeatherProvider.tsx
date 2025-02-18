"use client";

import { IWeather } from "@/core/types/weather";
import { createContext, useState } from "react";

export const WeatherContext = createContext<{
	weather: IWeather | null;
	setWeather: (weather: any) => void;
}>({ weather: null, setWeather: () => {} });

export default function WeatherProvider({
	children,
	initialWeather,
}: {
	children: React.ReactNode;
	initialWeather: IWeather | null;
}) {
	const [weather, setWeather] = useState<IWeather | null>(initialWeather);

	return (
		<WeatherContext.Provider value={{ weather, setWeather }}>
			{children}
		</WeatherContext.Provider>
	);
}
