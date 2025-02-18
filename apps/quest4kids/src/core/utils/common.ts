export function getRandomTransparentColor(): string {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgba(${r}, ${g}, ${b})`;
}
