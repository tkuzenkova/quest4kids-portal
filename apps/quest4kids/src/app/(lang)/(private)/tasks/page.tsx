import { PAGE_PATH } from "@/core/consts/page-path";
import { LangType, ParamsType } from "@/core/types/common";
import Link from "next/link";

type IndexPageProps = {
	params: ParamsType<LangType>;
};

export default async function TasksPage() {
	return (
		<div>
			tasks list
			<Link href={PAGE_PATH.TASKS_NEW}>Add New Task</Link>
		</div>
	);
}
