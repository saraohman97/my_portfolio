import { Badge } from "@/components/ui/badge";
import Title from "@/components/ui/title";
import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import Image from "next/image";
import { Post } from "@/types";

const JournalPage = async () => {
  const posts = await prismadb.post.findMany({
    include: {
      images: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <div className="p-10 max-w-screen-xl mx-auto">
        <Title title="Journal" />

        <div className="flex flex-row gap-20">
          <div className="w-2/3">
            {/* post */}
            {posts.map((article) => (
              <div key={article.id} className="mb-24">
                <h2 className="text-4xl">{article.title}</h2>
                <div className="flex items-center justify-between">
                  <p className="text-slate-400 text-sm my-2">
                    {article.description}
                  </p>
                  <p className="text-slate-400 text-sm">{format(article.createdAt, "MMMM do, yyyy")}</p>
                </div>
                <div className="space-x-2 mt-4">
                  {/* collection */}
                  <Badge>NextJS</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Prisma</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Tailwind / Shadcn-ui</Badge>
                </div>
                <hr className="mt-5 mb-10" />
                <p className="font-semibold">
                  {article.text}
                </p>

                <p className="pt-10 pl-10 text-sm text-slate-400">
                  Image: <span>Image descripton needs to be added</span>
                </p>
                <Image
                  src={article.images[0]?.url}
                  alt={article.title}
                  width={400}
                  height={400}
                  className="w-auto h-full object-contain m-10 mt-0 shadow"
                />
              </div>
            ))}
          </div>

          <div className="w-1/3 bg-slate-100 p-10 rounded h-fit">
            <div>
              <h3 className="font-semibold text-lg pb-2">Kollektion</h3>
              {/* collection */}
              <div className="flex flex-wrap gap-2">
                <Badge>NextJS</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Prisma</Badge>
                <Badge>MongoDB</Badge>
                <Badge>Tailwind / Shadcn-ui</Badge>
              </div>
            </div>
            <hr className="my-6" />
            <div>
              <h3 className="font-semibold text-lg pb-2">Favoriter</h3>
              <div className="space-y-2">
                {posts.map((fav) => (
                  <div
                    key={fav.id}
                    className="flex items-center justify-between"
                  >
                    <p className="hover:underline text-sm">
                      {fav.favorite && fav.title}
                    </p>
                    <p className="text-sm text-slate-400">{fav.favorite && format(fav.createdAt, "MMMM do, yyyy")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JournalPage;
