import Header from "@/components/layout/Header";
import { DICTIONARY_PATH } from "@/core/consts/dictionary";
import { PAGE_PATH } from "@/core/consts/page-path";
import { getDictionary } from "@/core/utils/get-dictionary";
import { Button } from "@repo/ui";

export default async function IndexPage() {
	const dict = await getDictionary(DICTIONARY_PATH.HEADER);

	return (
		<>
			<Header />

			<main className="p-4">
				<p>{dict["Home"]} page</p>
				<div>Add navigation here</div>
				<div>
					<a href="/blog">Blog - Multi Zones </a>
				</div>
				<div className="flex">
					<Button href={PAGE_PATH.SIGNUP} className="mr-2">
						{dict["Sign Up"]}
					</Button>
					<Button href={PAGE_PATH.AUTH}>{dict["Login"]}</Button>
				</div>
				<div>Add banner here</div>
			</main>
		</>
	);
}
