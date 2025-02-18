import Header from "@/components/layout/Header";
import Logout from "@/components/ui/Logout";
import UserAvatar from "@/components/ui/UserAvatar";
import { DICTIONARY_PATH } from "@/core/consts/dictionary";
import { PAGE_PATH } from "@/core/consts/page-path";
import { getDictionary } from "@/core/utils/get-dictionary";
import { Navigation } from "@repo/ui";

export default async function Index(props: { children: React.ReactNode }) {
	const { children } = props;

	const dict = await getDictionary(DICTIONARY_PATH.HEADER);

	const nav = [
		{ href: PAGE_PATH.DASHBOARD, label: dict["Home"] },
		{ href: PAGE_PATH.TASKS, label: dict["Tasks"] },
		{ href: PAGE_PATH.CHILDREN, label: dict["Children"] },
	];

	return (
		<>
			<Header>
				<div className="flex w-full items-center justify-between gap-4 px-3">
					<Navigation links={nav} />
					<div className="flex items-center gap-4">
						<UserAvatar />
						<Logout text={dict["Logout"]} />
					</div>
				</div>
			</Header>
			{children}
		</>
	);
}
