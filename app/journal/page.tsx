import prismadb from "@/lib/prismadb";
import JournalClient from "./(components)/client";

const JournalPage = async () => {
  const posts = await prismadb.post.findMany({
    include: {
      images: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return <JournalClient posts={posts} />;
};

export default JournalPage;
