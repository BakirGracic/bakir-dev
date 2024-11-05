import Link from "next/link";

const navbarLinks: string[] = ["home", "blog", "projects", "certifications", "links"];

export default function Navbar() {
    return (
        <header className="mb-14">
            <nav className="flex tracking-tighter">
                {navbarLinks.map((path, index) => (
                    <Link
                        key={index}
                        href={`/${path === "home" ? "" : path}`}
                        className="flex py-3 pr-3 mr-3 hover-text"
                    >
                        {path}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
