import fs from "fs/promises";
import path from "path";

export async function getDictionary(section: string, lang: string = "en") {
	try {
		const filePath = path.join(
			process.cwd(),
			"src/dictionaries",
			lang,
			`${section}.json`,
		);

		const file = await fs.readFile(filePath, "utf-8");

		return JSON.parse(file);
	} catch (error) {
		console.error(
			`Failed to load dictionary for ${lang}/${section}:`,
			error,
		);
		return {};
	}
}
