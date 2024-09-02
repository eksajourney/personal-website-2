import { getAllBlogs } from "@/sanity/lib/querying";
import BlogList from "../organisms/BlogList";
import TitleSection from "../atoms/TitleSection";
import ButtonLink from "../atoms/ButtonLink";
import { sliceBlog } from "@/utils/sliceProjects";

export default async function HomeBlog() {
  const blog = await getAllBlogs();
  const slicedBlog = sliceBlog(blog);

  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <TitleSection title="Latest Blog" />
        <div className="hidden lg:block">
          <ButtonLink title="View More" route="/projects" variant="tertiary" />
        </div>
      </div>
      {blog.length === 0 ? (
        <p>Blog is Empty.</p>
      ) : (
        <BlogList blog={slicedBlog} />
      )}
      <div className="mt-8 flex justify-center lg:hidden">
        <ButtonLink title="View More" route="/projects" variant="tertiary" />
      </div>
    </section>
  );
}
