import prismadb from "@/lib/prismadb";
import { BlogClient } from "./(components)/client";

const BlogPage = async () => {
  const posts = await prismadb.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <BlogClient data={posts} />
    </>
  );
};

export default BlogPage;
