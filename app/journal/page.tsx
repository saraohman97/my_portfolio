import JournalClient from "./(components)/client";
import getPosts from "@/actions/getPosts";

const JournalPage = async () => {
  const posts = await getPosts()

  return <JournalClient posts={posts} />;
};

export default JournalPage;
