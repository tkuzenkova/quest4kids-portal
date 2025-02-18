"use client";

import {
	MutationCache,
	QueryCache,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import React, { useState } from "react";

interface ReactQueryProviderProps {
	children: React.ReactNode;
}

const errorHandler = (error: unknown) => {
	// TODO: Implement common error handling logic here
	console.error("An error occurred:", error);
};

export default function ReactQueryProvider({
	children,
}: ReactQueryProviderProps) {
	const queryCache = new QueryCache({
		onError: errorHandler,
	});

	const mutationCache = new MutationCache({
		onError: errorHandler,
	});

	const [queryClient] = useState(
		() =>
			new QueryClient({
				queryCache,
				mutationCache,
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
						retry: false,
					},
					mutations: {
						retry: false,
					},
				},
			}),
	);

	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
}
