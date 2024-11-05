import ArrowLink from "@/components/ArrowLink";
import { BlogPosts } from "@/components/BlogPosts";

export default function Page() {
    return (
        <>
            <section className="mb-14">
                <h1 className="mb-6 text-2xl font-semibold">Howdy 👋</h1>
                <p>I&apos;m Bakir, a software developer. My passion for software drives me to work hard and build high-quality, robust, scalable and secure software that adds value to the world! The goal is to apply my skills in profitable & real business endeavours that leave a lasting impression. I try not to forget to savor the moments outside of the screen - because to me, life is all about balance and living it in the best way. I gladly invite you to check out my blog posts, projects, certifications and links to connect. Please, feel free to contact me if you have the need. Cheers!</p>
            </section>

            <section className="mb-14">
                <h2 className="mb-6 text-xl font-medium">Recent blog posts</h2>
                <BlogPosts limit={5} />
            </section>

            <section className="mb-14">
                <h2 className="mb-6 text-xl font-medium">Projects</h2>
                <p className="mb-4">Check out some of the projects I&apos;ve worked on. Each project showcases my skills and dedication for creating awesome software. See what I&apos;ve been up to lately!</p>
                <ArrowLink
                    href="/projects"
                    text="View projects"
                    blank
                />
            </section>

            <section>
                <h2 className="mb-6 text-xl font-medium">Certifications</h2>
                <p className="mb-4">Certifications validate expertise and commitment to continuous learning in the industry. Find out how certifications contribute to my professional growth.</p>
                <ArrowLink
                    href="/certifications"
                    text="View certifications"
                    blank
                />
            </section>
        </>
    );
}
