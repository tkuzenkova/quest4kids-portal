import { DICTIONARY_PATH } from "@/core/consts/dictionary";
import { PAGE_PATH } from "@/core/consts/page-path";
import { getDictionary } from "@/core/utils/get-dictionary";
import prefetchUsers from "@/services/users/prefetchUsers";
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";
import Link from "next/link";
import ChildrenList from "./_components/ChildrenList";

export default async function ChildrenPage() {
	const dict = await getDictionary(DICTIONARY_PATH.CHILDREN);

	const queryClient = new QueryClient();

	await prefetchUsers(queryClient);

	// Fetch on server-side
	// const { data: users } = await axios.get(
	// 	"https://jsonplaceholder.typicode.com/users",
	// );

	const HydrationFix = HydrationBoundary as any;


	return (
		<>
			<div>
				<h2>Children List</h2>
				<Link href={PAGE_PATH.CHILD_NEW}>{dict["Add New Child"]}</Link>
			</div>

			<div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
				{/* <div className="col-span-1 rounded-xl bg-fuchsia-100 shadow-md dark:bg-white">
					<h2 className="m-4 text-xl font-bold dark:text-slate-800">
						Suspense
					</h2>

					<Suspense
						fallback={
							<div className="h-16">
								<Spinner />
							</div>
						}
					>
						<ChildrenListSusp />
					</Suspense>
				</div>

				<div className="col-span-1 rounded-xl bg-orange-100 shadow-md dark:bg-white">
					<h2 className="m-4 text-xl font-bold dark:text-slate-800">
						Client side
					</h2>

					<ChildrenList />
				</div> */}

				<div className="col-span-1 rounded-xl bg-sky-100 shadow-md dark:bg-white">
					<h2 className="m-4 text-xl font-bold dark:text-slate-800">
						Client + Preload on server side
					</h2>
					<HydrationFix state={dehydrate(queryClient)}>
						<ChildrenList />
					</HydrationFix>
				</div>
			</div>
		</>
	);
}
