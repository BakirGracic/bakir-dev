import { DesktopNavbar } from "@/features/Navbar/DesktopNavbar";
import { MobileNavbar } from "@/features/Navbar/MobileNavbar";

export default function Navbar() {
  return (
    <header className="py-4">
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
}
