"use client";

import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { TbMoodEmpty } from "react-icons/tb";
import PostItem from "./post-item";
import { Post } from "@/types";
import { useState } from "react";

interface JournalClientProps {
  posts: Post[];
}

const JournalClient: React.FC<JournalClientProps> = ({ posts }) => {
  const [NextJS, setNextJS] = useState(false);
  const [ReactJS, setReactJS] = useState(false);
  const [VanillaJS, setVanillaJS] = useState(false);
  const [MongoDB, setMongoDB] = useState(false);
  const [MySQL, setMySQL] = useState(false);
  const [Prisma, setPrisma] = useState(false);
  const [Mongoose, setMongoose] = useState(false);
  const [Shadcn, setShadcn] = useState(false);
  const [Tailwind, setTailwind] = useState(false);
  const [VanillaCSS, setVanillaCSS] = useState(false);
  const [all, setAll] = useState(true);

  const toggleAll = () => {
    setNextJS(false);
    setReactJS(false);
    setVanillaJS(false);
    setMongoDB(false);
    setMySQL(false);
    setPrisma(false);
    setMongoose(false);
    setShadcn(false);
    setTailwind(false);
    setVanillaCSS(false);
    setAll(true);
  };

  const toggleNextJS = () => {
    setAll(false);
    setNextJS(true);
    setReactJS(false);
    setVanillaJS(false);
    setMongoDB(false);
    setMySQL(false);
    setPrisma(false);
    setMongoose(false);
    setShadcn(false);
    setTailwind(false);
    setVanillaCSS(false);
  };

  const toggleReactJS = () => {
    setAll(false);
    setNextJS(false);
    setReactJS(true);
    setVanillaJS(false);
    setMongoDB(false);
    setMySQL(false);
    setPrisma(false);
    setMongoose(false);
    setShadcn(false);
    setTailwind(false);
    setVanillaCSS(false);
  };

  const toggleVanillaJS = () => {
    setAll(false);
    setNextJS(false);
    setReactJS(false);
    setVanillaJS(true);
    setMongoDB(false);
    setMySQL(false);
    setPrisma(false);
    setMongoose(false);
    setShadcn(false);
    setTailwind(false);
    setVanillaCSS(false);
  };

  const toggleMongoDB = () => {
    setAll(false);
    setNextJS(false);
    setReactJS(false);
    setVanillaJS(false);
    setMongoDB(true);
    setMySQL(false);
    setPrisma(false);
    setMongoose(false);
    setShadcn(false);
    setTailwind(false);
    setVanillaCSS(false);
  };

  const toggleMySQL = () => {
    setAll(false);
    setNextJS(false);
    setReactJS(false);
    setVanillaJS(false);
    setMongoDB(false);
    setMySQL(true);
    setPrisma(false);
    setMongoose(false);
    setShadcn(false);
    setTailwind(false);
    setVanillaCSS(false);
  };

  const togglePrisma = () => {
    setAll(false);
    setNextJS(false);
    setReactJS(false);
    setVanillaJS(false);
    setMongoDB(false);
    setMySQL(false);
    setPrisma(true);
    setMongoose(false);
    setShadcn(false);
    setTailwind(false);
    setVanillaCSS(false);
  };

  const toggleMongoose = () => {
    setAll(false);
    setNextJS(false);
    setReactJS(false);
    setVanillaJS(false);
    setMongoDB(false);
    setMySQL(false);
    setPrisma(false);
    setMongoose(true);
    setShadcn(false);
    setTailwind(false);
    setVanillaCSS(false);
  };

  const toggleShadcn = () => {
    setAll(false);
    setNextJS(false);
    setReactJS(false);
    setVanillaJS(false);
    setMongoDB(false);
    setMySQL(false);
    setPrisma(false);
    setMongoose(false);
    setShadcn(true);
    setTailwind(false);
    setVanillaCSS(false);
  };

  const toggleTailwind = () => {
    setAll(false);
    setNextJS(false);
    setReactJS(false);
    setVanillaJS(false);
    setMongoDB(false);
    setMySQL(false);
    setPrisma(false);
    setMongoose(false);
    setShadcn(false);
    setTailwind(true);
    setVanillaCSS(false);
  };

  const toggleVanillaCSS = () => {
    setAll(false);
    setNextJS(false);
    setReactJS(false);
    setVanillaJS(false);
    setMongoDB(false);
    setMySQL(false);
    setPrisma(false);
    setMongoose(false);
    setShadcn(false);
    setTailwind(false);
    setVanillaCSS(true);
  };

  return (
    <>
      <div className="p-10 max-w-screen-xl mx-auto">
        <h1 className="text-center py-20 text-5xl my-10">Journal</h1>

        <div className="flex flex-row gap-20">
          <div className="w-2/3">
            {/* post */}
            {!posts.length && (
              <p className="flex gap-2">
                Inga inlägg än <TbMoodEmpty size={24} />
              </p>
            )}

            {posts.map((article) => (
              <div key={article.id}>
                {all && <PostItem article={article} />}
                {article.NextJS && NextJS && <PostItem article={article} />}
                {article.ReactJS && ReactJS && <PostItem article={article} />}
                {article.VanillaJS && VanillaJS && (
                  <PostItem article={article} />
                )}
                {article.MongoDB && MongoDB && <PostItem article={article} />}
                {article.MySQL && MySQL && <PostItem article={article} />}
                {article.Prisma && Prisma && <PostItem article={article} />}
                {article.Mongoose && Mongoose && <PostItem article={article} />}
                {article.Shadcn && Shadcn && <PostItem article={article} />}
                {article.Tailwind && Tailwind && <PostItem article={article} />}
                {article.VanillaCSS && VanillaCSS && (
                  <PostItem article={article} />
                )}
              </div>
            ))}
          </div>

          <div className="w-1/3 bg-slate-100 p-10 rounded h-fit">
            <div>
              <h3 className="font-semibold text-lg pb-2">Kollektion</h3>
              {/* collection */}
              <div className="flex flex-wrap gap-2">
                <Badge className="cursor-pointer" onClick={toggleAll}>
                  Alla
                </Badge>

                <Badge className="cursor-pointer" onClick={toggleNextJS}>
                  NextJS
                </Badge>

                <Badge className="cursor-pointer" onClick={toggleReactJS}>
                  ReactJS
                </Badge>

                <Badge className="cursor-pointer" onClick={toggleVanillaJS}>
                  VanillaJS
                </Badge>

                <Badge className="cursor-pointer" onClick={toggleMongoDB}>
                  MongoDB
                </Badge>

                <Badge className="cursor-pointer" onClick={toggleMySQL}>
                  MySQL
                </Badge>

                <Badge className="cursor-pointer" onClick={togglePrisma}>
                  Prisma
                </Badge>

                <Badge className="cursor-pointer" onClick={toggleMongoose}>
                  Mongoose
                </Badge>

                <Badge className="cursor-pointer" onClick={toggleShadcn}>
                  Shadcn
                </Badge>

                <Badge className="cursor-pointer" onClick={toggleTailwind}>
                  Tailwind
                </Badge>

                <Badge className="cursor-pointer" onClick={toggleVanillaCSS}>
                  VanillaCSS
                </Badge>
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
                    <p className="text-sm text-slate-400">
                      {fav.favorite && format(fav.createdAt, "MMMM do, yyyy")}
                    </p>
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

export default JournalClient;
