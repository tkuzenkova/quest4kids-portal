import { IWeather } from "../types/weather";

const DB_NAME = "SearchWeatherDB";
const STORE_NAME = "searchWeatherResults";
const DB_VERSION = 2;

export const BROADCAST_WEATHER = "weather-updates";
const broadcastChannel = new BroadcastChannel(BROADCAST_WEATHER);

export const openDB = () => {
	return new Promise<IDBDatabase>((resolve, reject) => {
		const request = indexedDB.open(DB_NAME, DB_VERSION);

		request.onupgradeneeded = event => {
			const db = request.result;
			if (!db.objectStoreNames.contains(STORE_NAME)) {
				const store = db.createObjectStore(STORE_NAME, {
					keyPath: "id",
					autoIncrement: true,
				});
				store.createIndex("query", "query", { unique: true });
			} else {
				const store = request?.transaction?.objectStore(STORE_NAME);
				if (!store?.indexNames.contains("query")) {
					store?.createIndex("query", "query", { unique: true });
				}
			}
		};

		request.onsuccess = () => resolve(request.result);
		request.onerror = () => reject(request.error);
	});
};

export const saveSearchResult = async (query: string, result: IWeather) => {
	try {
		const db = await openDB();
		const tx = db.transaction(STORE_NAME, "readwrite");
		const store = tx.objectStore(STORE_NAME);

		const existingRequest = store.index("query").get(query);
		existingRequest.onsuccess = () => {
			if (!existingRequest.result) {
				const addRequest = store.add({
					query,
					result,
					date: new Date(),
				});

				addRequest.onsuccess = () => {
					console.log("Data added to the store", addRequest.result);
					broadcastChannel.postMessage("update");
				};

				addRequest.onerror = () => {
					console.error(
						"Error adding data to the store",
						addRequest.error,
					);
				};
			} else {
				console.log("Duplicate entry found, not adding to the store");
			}
		};

		existingRequest.onerror = () => {
			console.error(
				"Error checking for existing data",
				existingRequest.error,
			);
		};

		tx.oncomplete = () => {
			console.log("Transaction completed successfully");
		};

		tx.onerror = () => {
			console.error("Transaction failed", tx.error);
		};
	} catch (error) {
		console.error("Error opening database", error);
	}
};

export const getSearchResults = async () => {
	return new Promise<any[]>(async resolve => {
		const db = await openDB();
		const tx = db.transaction(STORE_NAME, "readonly");
		const store = tx.objectStore(STORE_NAME);
		const request = store.getAll();
		request.onsuccess = () => resolve(request.result);
	});
};
