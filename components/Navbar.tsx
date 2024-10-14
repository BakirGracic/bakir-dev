import Link from "next/link";

const navItems = {
    "/": { name: "home" },
    "/blog": { name: "blog" },
    "/projects": { name: "projects" },
    "/certifications": { name: "certifications" },
    "/links": { name: "links" },
};

export default function Navbar() {
    return (
        <nav
            className="mt-6 mb-14 tracking-tighter flex flex-row items-start relative md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
        >
            <div className="flex flex-row">
                {Object.entries(navItems).map(([path, { name }]) => {
                    return (
                        <Link
                            key={path}
                            href={path}
                            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-400 flex align-middle relative py-3 mr-6"
                        >
                            {name}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
