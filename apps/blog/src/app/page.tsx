import { Button, Heading } from "@repo/ui";

export default function Home() {
	return (
		<div className="flex h-screen flex-col items-center justify-center">
			<Heading>Blog</Heading>
			<Button href="/" typeLink="hard">
				Go home
			</Button>
		</div>
	);
}
