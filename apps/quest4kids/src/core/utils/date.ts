const startDate = new Date(2020, 0, 1);
const endDate = new Date(2023, 11, 31);

export function getRandomDate(
	start: Date = startDate,
	end: Date = endDate,
): Date {
	const startTime = start.getTime();
	const endTime = end.getTime();
	const randomTime = startTime + Math.random() * (endTime - startTime);
	return new Date(randomTime);
}
