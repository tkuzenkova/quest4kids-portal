import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { getTheme } from "@repo/utils";
import Image from "next/image";

type NavigationProps = {
	children?: React.ReactNode;
};
export default async function Header({ children }: NavigationProps) {
	const { isDarkMode } = await getTheme();

	return (
		<header className="bg-primary border-primary-dark dark:bg-dark-800 z-30 flex w-full items-center justify-between border-b px-4 py-2 dark:border-gray-700">
			<div style={{ width: "162px", height: "50px", flexShrink: 0 }}>
				<Image
					src="/logo.svg"
					alt="Quest4Kids"
					width={162}
					height={50}
					priority
					style={{ display: "block" }}
				/>
			</div>
			{children}
			<div className="flex items-center gap-4">
				<ThemeSwitcher isDarkMode={isDarkMode} />
			</div>
		</header>
	);
}
