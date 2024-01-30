import { DataTable } from "./data-table";
import { TablePost, columns } from "./columns";
import prismadb from "@/lib/prismadb";
import { format } from 'date-fns'

export default async function BlogClient() {

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
    createdAt: format(item.createdAt, 'MMMM do, yyyy')
  }))

  return (
    <div className="max-w-screen-lg mx-auto py-10">
      <DataTable columns={columns} data={formattedPosts} />
    </div>
  );
}
