import ThemeToggle from "@/components/theme-toggle";
import blockDesktop from "@/utils/blockDesk";
import { Outlet } from "react-router-dom";

export default function Layout() {
	if (blockDesktop()) {
		return blockDesktop();
	}

	return (
		<div className="w-full min-h-screen">
			<header>
				<ThemeToggle />
			</header>

			<main className="pb-10">
				<Outlet />
			</main>
		</div>
	);
}
