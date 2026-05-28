import { MobileNavbar } from "@/components/navbar/MobileNavbar";
import { DesktopNavbar } from "@/components/navbar/DesktopNavbar";

export function Navbar() {
	return (
		<>
			<MobileNavbar className="xl:hidden" />
			<DesktopNavbar className="hidden xl:flex" />
		</>
	);
}
