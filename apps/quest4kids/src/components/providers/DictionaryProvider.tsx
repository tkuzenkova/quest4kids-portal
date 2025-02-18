"use client";

import { createContext, useContext } from "react";

const DictionaryContext = createContext<Record<string, string>>({});

export function DictionaryProvider({
	children,
	dictionary,
}: {
	children: React.ReactNode;
	dictionary: Record<string, string>;
}) {
	return (
		<DictionaryContext.Provider value={dictionary}>
			{children}
		</DictionaryContext.Provider>
	);
}

export function useDictionary() {
	return useContext(DictionaryContext);
}
