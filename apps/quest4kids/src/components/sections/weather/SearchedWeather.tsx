"use client";

import { IWeather } from "@/core/types/weather";
import { BROADCAST_WEATHER, getSearchResults } from "@/core/utils/indexedDB";
import { Card, Heading, Spinner } from "@repo/ui";
import { useEffect, useState } from "react";
import Row from "./Row";

interface IWeatherHistory {
	query: string;
	result: IWeather;
	date: Date;
}

const SearchedWeather = () => {
	const [history, setHistory] = useState<IWeatherHistory[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadHistory = async () => {
			const results = await getSearchResults();
			const sortedResults = results.sort(
				(a, b) =>
					new Date(b.date).getTime() - new Date(a.date).getTime(),
			);
			const sixElements = sortedResults.slice(0, 6);
			setHistory(sixElements);
		};
		setIsLoading(true);
		loadHistory();
		setIsLoading(false);

		const broadcastChannel = new BroadcastChannel(BROADCAST_WEATHER);
		broadcastChannel.onmessage = () => {
			loadHistory();
		};

		return () => {
			broadcastChannel.close();
		};
	}, []);

	return (
		<Card className="glass-bg h-[440px] overflow-hidden">
			<Heading type={4}>History</Heading>
			{isLoading ? (
				<div className="flex h-32 items-center justify-center">
					<Spinner />
				</div>
			) : history.length > 0 ? (
				<ul className="mt-6 list-none space-y-4 md:space-y-2">
					{history.map((item, index) => (
						<li key={index}>
							<Row result={item.result} />
						</li>
					))}
				</ul>
			) : (
				<p>No search history found</p>
			)}
		</Card>
	);
};

export default SearchedWeather;
