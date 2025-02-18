"use client";

import { WeatherContext } from "@/components/providers/WeatherProvider";
import { saveSearchResult } from "@/core/utils/indexedDB";
import { useGetCurrentWeatherMutation } from "@/services/weather/useGetCurrentWeatherMutation";
import { InputField, SearchIcon } from "@repo/ui";
import * as motion from "motion/react-client";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

interface SearchFormInputs {
	city: string;
}

const SearchForm: React.FC = () => {
	const {
		register,
		reset,
		handleSubmit,
		setFocus,
		watch,
		formState: { errors },
	} = useForm<SearchFormInputs>();
	const [isOpen, setIsOpen] = useState(false);

	const value = watch("city");
	const isEmpty = !value;

	const { setWeather } = useContext(WeatherContext);

	const { getCurrentWeather, isLoading } = useGetCurrentWeatherMutation();

	const onSubmit = async (data: SearchFormInputs) => {
		const weather = await getCurrentWeather(data.city);
		await saveSearchResult(weather.city, weather);
		setWeather(weather);
		setIsOpen(false);
		reset();
	};

	const handleSearchClick = () => {
		setIsOpen(true);
		setFocus("city");
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="relative overflow-hidden">
				<button
					onClick={handleSearchClick}
					type={!isEmpty && isOpen ? "submit" : "button"}
					className="absolute right-0 top-3 p-2"
				>
					<SearchIcon className="h-8 w-8" />
				</button>
				<motion.div
					initial={{ width: "100%", opacity: 0, x: "100%" }}
					animate={{
						opacity: isOpen ? 1 : 0,
						x: isOpen ? 0 : "100%",
					}}
					exit={{ width: "100%", opacity: 0, x: "100%" }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
					className="overflow-hidden"
				>
					<InputField
						id="city"
						register={register("city")}
						error={errors?.city?.message}
						isRequired
						isLoading={isLoading}
					/>
				</motion.div>
			</div>
		</form>
	);
};

export default SearchForm;
