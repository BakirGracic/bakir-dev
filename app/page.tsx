import Link from "next/link";
import ArrowIcon from "components/ArrowIcon";
import { BlogPosts } from "components/BlogPosts";

export default function Page() {
    return (
        <>
            {/* intro paragraph */}
            <section className="mb-14">
                <h1 className="mb-6 text-2xl font-semibold tracking-tighter">
                    Howdy <div className="inline-block anim-hand-shake">👋</div>
                </h1>
                <p>
                    I'm Bakir, a software developer. My passion for software
                    drives me to work hard and build high-quality, robust,
                    scalable and secure software that adds value to the world!
                    The goal is to apply my skills in profitable & memorable
                    business endeavours that leave a lasting impression. I never
                    forget to savor the moments outside of the screen - because
                    to me, life is all about balance and living it in the best
                    way - as we are told to. I gladly invite you to check me
                    out, some of my blog posts, expertise or projects. Please,
                    feel free to contact me if you have the need. Cheers!
                </p>
            </section>

            {/* recent blog posts */}
            <section className="mb-14">
                <h2 className="mb-6 text-xl font-medium tracking-tighter">
                    Recent blog posts
                </h2>
                <div>
                    <BlogPosts limit={5} />
                </div>
            </section>

            {/* projects */}
            <section className="mb-14">
                <h2 className="mb-6 text-xl font-medium tracking-tighter">
                    Projects
                </h2>
                <p className="mb-4">
                    Check out some of the projects I've worked on. Each project
                    showcases my skills and dedication for creating awesome
                    software. Feel free to explore and see what I've been up to!
                </p>
                <Link
                    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-500"
                    rel="noopener noreferrer"
                    href="/projects/"
                >
                    <ArrowIcon />
                    <p className="ml-2 h-7">Check out my projects</p>
                </Link>
            </section>

            {/* certifications */}
            {/* projects */}
            <section>
                <h2 className="mb-6 text-xl font-medium tracking-tighter">
                    Certifications
                </h2>
                <p className="mb-4">
                    Certifications validate expertise and commitment to
                    continuous learning in the industry. I invite you to explore
                    my certifications and see how they contribute to my
                    professional growth.
                </p>
                <Link
                    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-500"
                    rel="noopener noreferrer"
                    href="/certifications/"
                >
                    <ArrowIcon />
                    <p className="ml-2 h-7">Check out my certifications</p>
                </Link>
            </section>
        </>
    );
}
