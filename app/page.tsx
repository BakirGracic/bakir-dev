import { BlogPosts } from 'app/components/posts'

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Hello & Welcome! 👋
            </h1>
            <p className="mb-4">
                {`My name's Bakir and I'm full-stack developer. I'm passionate about building software 
                that is reliable, robust, fast, secure and solves real-world problems, while improving 
                lives and integrating in business solutions. I'm currently working on a 
                few projects that I'm excited to share with you soon. In the meantime, feel free to check 
                out my latest blog posts below and links to my online profiles!`}
            </p>
            <div className="my-8">
                <BlogPosts />
            </div>
        </section>
    )
}
