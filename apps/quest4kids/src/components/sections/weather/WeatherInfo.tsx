import { IWeather } from "@/core/types/weather";
import { getWeatherDescription, getWeatherIcon } from "@/core/utils/weather";
import { CalendarIcon, LocationIcon, Separator } from "@repo/ui";
import { format } from "date-fns";
import Image from "next/image";

interface WeatherInfoProps {
	weather: IWeather;
}

const WeatherInfo = ({ weather }: WeatherInfoProps) => {
	const { temperature, weatherCode, uvIndex, time, city } = weather;

	const formattedDate = time && format(time, "d MMMM, yyyy h:mm a");

	const icon = getWeatherIcon(weatherCode);

	const iconUrl = icon
		? `/weatherIcons${getWeatherIcon(weatherCode)}`
		: "/weatherIcons/10010_cloudy_large@2x.png";

	const description = getWeatherDescription(weatherCode);

	// TODO: Add IconWeather component,
	// Add formatDate function

	return (
		<>
			{iconUrl ? (
				<div className="h-15 w-15 relative mb-3 mt-8">
					<Image src={iconUrl} alt="weather icon" fill sizes="60px" />
				</div>
			) : null}
			<div className="mb-2 text-6xl">
				{temperature}
				<span className="relative top-[-20px] text-3xl">°C</span>
			</div>
			<div className="mb-2">UV Index: {uvIndex}</div>
			<p>{description}</p>
			<Separator />
			<div className="flex flex-col gap-3">
				<div className="flex items-center">
					<LocationIcon className="mr-2 h-5 w-5" />
					{city}
				</div>
				<div className="flex items-center">
					<CalendarIcon className="mr-2 h-5 w-5" />
					{formattedDate}
				</div>
			</div>
		</>
	);
};

export default WeatherInfo;
