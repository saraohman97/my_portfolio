import { Badge } from "@/components/ui/badge";
import { Post } from "@/types";
import { format } from "date-fns";
import Image from "next/image";
import { sv } from "date-fns/locale";

interface PostItemProps {
  article: Post;
}

const PostItem: React.FC<PostItemProps> = ({ article }) => {
  return (
    <div key={article.id} className="mb-24">
      <h2 className="text-4xl">{article.title}</h2>
      <div className="flex items-center justify-between">
        <p className="text-slate-400 text-sm my-2">{article.description}</p>
        <p className="text-slate-400 text-sm">
          {format(article.createdAt, "PPP", { locale: sv })}
        </p>
      </div>
      {/* collection */}
      <div className="space-x-2 mt-4">
        {article.NextJS && <Badge>NextJS</Badge>}
        {article.ReactJS && <Badge>ReactJS</Badge>}
        {article.VanillaJS && <Badge>VanillaJS</Badge>}
        {article.MongoDB && <Badge>MongoDB</Badge>}
        {article.MySQL && <Badge>MySQL</Badge>}
        {article.Prisma && <Badge>Prisma</Badge>}
        {article.Mongoose && <Badge>Mongoose</Badge>}
        {article.Shadcn && <Badge>Shadcn-ui</Badge>}
        {article.Tailwind && <Badge>Tailwind</Badge>}
        {article.VanillaCSS && <Badge>VanillaCSS</Badge>}
      </div>
      <hr className="mt-5 mb-10" />
      {article.preText && (
        <p className="font-semibold mb-4">{article.preText}</p>
      )}
      <p>{article.text}</p>

      <p className="pt-10 pl-10 text-sm text-slate-400">
        Bild: <span>{article.imageDescription}</span>
      </p>
      <Image
        src={article.images[0]?.url}
        alt={article.title}
        width={400}
        height={400}
        className="w-auto h-full object-contain m-10 mt-0 shadow"
      />
    </div>
  );
};

export default PostItem;
