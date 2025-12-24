import { blogs } from "@/lib/blogs";
import PageHeading from "@/shadcn/components/page-heading";
import { BlogCard } from "./BlogCard";

export default function Blog() {
  return (
    <>
      <PageHeading title="Blog" subtitle="My takes on various hot topics" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.slug}
            published={blog.published}
            title={blog.title}
            description={blog.description}
            slug={blog.slug}
          />
        ))}
      </div>
    </>
  );
}
