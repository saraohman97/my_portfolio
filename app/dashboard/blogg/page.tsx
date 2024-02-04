
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
    imageDescription: item.imageDescription,
    preText: item.preText,
    favorite: item.favorite,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
    NextJS: item.NextJS,
    ReactJS: item.ReactJS,
    VanillaJS: item.VanillaJS,
    MongoDB: item.MongoDB,
    MySQL: item.MySQL,
    Prisma: item.Prisma,
    Mongoose: item.Mongoose,
    Shadcn: item.Shadcn,
    Tailwind: item.Tailwind,
    VanillaCSS: item.VanillaCSS
  }))

  return (
    <>
        <BlogClient data={formattedPosts} />
    </>
  );
};

export default BlogPage;
