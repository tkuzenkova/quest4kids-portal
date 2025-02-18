import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getMappedWeather } from "./mapper";
import { weatherService } from "./service";

export function useGetCurrentWeatherMutation() {
	const {
		mutateAsync: getCurrentWeather,
		isPending: isLoading,
		error,
	} = useMutation({
		mutationFn: async (city: string) => {
			const data = await weatherService.getCurrentWeather(city);
			return getMappedWeather(data);
		},
		onError: () => {
			toast.error("Error fetching weather data");
		},
	});

	return { getCurrentWeather, isLoading, error };
}
