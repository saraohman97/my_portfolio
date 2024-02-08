import { BlogClient } from "./(components)/client";
import getPosts from "@/actions/getPosts";

const BlogPage = async () => {
  const posts = await getPosts()

  return (
    <>
      <BlogClient data={posts} />
    </>
  );
};

export default BlogPage;
