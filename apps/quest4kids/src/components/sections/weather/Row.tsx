"use client";

import { IWeather } from "@/core/types/weather";
import { getWeatherIcon } from "@/core/utils/weather";
import { format } from "date-fns";
import Image from "next/image";

interface RowProps {
	result: IWeather;
}

const Row = ({ result }: RowProps) => {
	const { city, temperature, time, weatherCode } = result;

	const formattedDate = time && format(time, "d MMM, h:mmaaa");

	const icon = getWeatherIcon(weatherCode);

	const iconUrl = icon
		? `/weatherIcons${getWeatherIcon(weatherCode)}`
		: "/weatherIcons/10010_cloudy_large@2x.png";

	return (
		<div className="grid grid-cols-4 items-center gap-4">
			<div className="col-span-1 font-medium">{city}</div>
			<div className="col-span-1">
				{iconUrl ? (
					<div className="relative h-4 w-4">
						<Image
							src={iconUrl}
							alt="weather icon"
							fill
							sizes="16px"
						/>
					</div>
				) : null}
			</div>
			<div className="col-span-1">{temperature}°C</div>
			<div className="col-span-1 text-gray-500">{formattedDate}</div>
		</div>
	);
};

export default Row;
