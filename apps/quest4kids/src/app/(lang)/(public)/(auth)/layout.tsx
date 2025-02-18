import Header from "@/components/layout/Header";
import WeatherProvider from "@/components/providers/WeatherProvider";
import WeatherPage from "@/components/sections/weather/WeatherPage";
import ThemeComponent from "@/components/ui/ThemeComponent";
import { getCurrentWeather } from "@/services/weather/actions";

import { clsx } from "clsx";

interface Props {
	children: React.ReactNode;
}

export default async function Index({ children }: Props) {
	const { data: weather } = await getCurrentWeather();

	return (
		<div className="grid min-h-screen grid-cols-1 md:grid-cols-[340px_1fr]">
			<aside
				className={clsx(
					"w-full md:w-[340px]",
					"dark:bg-radial-[at_20%_-75%] from-[#381244] via-[#232853] to-[#090b1c] to-90%",
				)}
			>
				<Header />
				<div className="p-4">{children}</div>
			</aside>

			<main
				className={clsx(
					"flex-1 overflow-y-auto bg-amber-400 p-4 shadow-lg shadow-gray-400/50",
					"bg-radial-[at_0%_0%] from-amber-200 from-40% to-amber-400",
					"dark:bg-dark-800 dark:border-l dark:border-gray-600/50 dark:bg-none dark:shadow-gray-600/50",
				)}
			>
				<ThemeComponent />

				<WeatherProvider initialWeather={weather}>
					<WeatherPage />
				</WeatherProvider>
			</main>
		</div>
	);
}
