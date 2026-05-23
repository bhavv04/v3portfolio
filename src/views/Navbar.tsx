import { MobileNavbar } from "@/components/navbar/MobileNavbar";
import { DesktopNavbar } from "@/components/navbar/DesktopNavbar";

export function Navbar() {
	return (
		<>
			<MobileNavbar className="md:hidden" />
			<DesktopNavbar className="hidden md:flex" />
		</>
	);
}
