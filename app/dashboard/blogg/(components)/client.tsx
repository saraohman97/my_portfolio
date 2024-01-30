import { DataTable } from "./data-table";
import getPosts from "@/actions/getPosts";
import { TablePost } from "./columns";

// async function getData(): Promise<TablePost[]> {
//   const posts = await getPosts();

//   return posts;
// }

export default async function BlogClient() {
//   const data = await getData();

  return (
    <div className="max-w-screen-lg mx-auto py-10">
      {/* <DataTable columns={columns} data={data} /> */}
      table here
    </div>
  );
}
