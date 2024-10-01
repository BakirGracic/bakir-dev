import { BlogPostsNewest } from "app/components/posts-newest";

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Howdy <div className="inline-block anim-hand-shake">👋</div>
            </h1>
            <p className="mb-4">
                {`My name's Bakir and I chose to be a software developer. I'm passionate about building the best 
                  software & integrating it in business. I'd like to add that living life to the fullest is a top 
                  priority for me. I'm currently working on a few projects that I'm excited to share with you. In 
                  the meantime, don't waste a second and go check out my latest blog posts and other links about me!`}
            </p>
            <h2 className="mt-9 text-xl font-medium tracking-tighter">
                Recent blog posts
            </h2>
            <div className="mb-8 mt-5">
                <BlogPostsNewest />
            </div>
        </section>
    );
}
