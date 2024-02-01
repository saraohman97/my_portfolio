
import prismadb from "@/lib/prismadb";
import { format } from 'date-fns'
import { TablePost } from "./(components)/columns";
import { BlogClient } from "./(components)/client";

const BlogPage = async () => {

  const posts = await prismadb.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedPosts: TablePost[] = posts.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    favorite: item.favorite,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
    categories: item.categories
  }))

  return (
    <>
        <BlogClient data={formattedPosts} />
    </>
  );
};

export default BlogPage;
