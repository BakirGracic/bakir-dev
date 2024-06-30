import { BlogPostsNewest } from 'app/components/posts-newest'

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Howdy <div className='inline-block anim-hand-shake'>👋</div>
            </h1>
            <p className="mb-4">
                {`My name's Bakir and I chose to be a developer. I'm passionate about building 
                  the best software and integrate it in business. Also I take much care to live
                  this life the best way. I'm currently working on a few projects that I'm excited
                  to share with you. In the meantime, don't waste a second and check out my
                  latest blog posts and other links about me!`}
            </p>
            <div className="my-8">
                <BlogPostsNewest />
            </div>
        </section>
    )
}
