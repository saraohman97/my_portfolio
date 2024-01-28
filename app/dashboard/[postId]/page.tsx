import PostForm from "@/components/forms/post-form";
import prismadb from "@/lib/prismadb";

const BlogPage = async ({ params }: { params: { postId: string } }) => {
  // const post = await prismadb.post.findUnique({
  //   where: {
  //     id: params.postId
  //   }
  // })
  const post = await prismadb.post.findMany()

  return (
    <div>
      <PostForm initialData={post} />
    </div>
  );
};

export default BlogPage;
