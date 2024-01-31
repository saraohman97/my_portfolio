import { Badge } from "@/components/ui/badge";
import Title from "@/components/ui/title";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "Prisma med Chaoo Charles",
    description: "Jag lär mig Prisma med hjälp av youtube tutorials. ",
    date: "18 januari, 2024",
    text: `lär jag mig något nytt. Jag lyssnar på youtubern Chaoo Charles tutorial och jämför hans e-commerce med youtubern Code-with-antonio. Ideen var att träna CRUD från videor som också har authentication. Medan Code-with-antonio har snyggare design och hjälpbibliotek som förenklar flödet av nybörjare som jag. Men han använder Prisma vilket är relativt nytt för mig. Dock jag ser likheterna mot Mongoose.`,
    image: "https://res.cloudinary.com/dhwbkbimy/image/upload/v1706662653/iqkk3tfplglpt9wxmos0.jpg",
    imageDescription: "Min första portfolio",
  },
  {
    id: 2,
    title: "Prisma med Chaoo Charles",
    description: "Jag lär mig Prisma med hjälp av youtube tutorials. ",
    date: "18 januari, 2024",
    text: `lär jag mig något nytt. Jag lyssnar på youtubern Chaoo Charles tutorial och jämför hans e-commerce med youtubern Code-with-antonio. Ideen var att träna CRUD från videor som också har authentication. Medan Code-with-antonio har snyggare design och hjälpbibliotek som förenklar flödet av nybörjare som jag. Men han använder Prisma vilket är relativt nytt för mig. Dock jag ser likheterna mot Mongoose.`,
    image: "https://res.cloudinary.com/dhwbkbimy/image/upload/v1706662653/iqkk3tfplglpt9wxmos0.jpg",
    imageDescription: "Min första portfolio",
  },
];

const JournalPage = () => {
  return (
    <>
      <div className="p-10 max-w-screen-xl mx-auto">
        <Title title="Journal" />

        <div className="flex flex-row gap-20">
          <div className="w-2/3">
            {/* list */}
            {articles.map((article) => (
              <div key={article.id} className="mb-24">
                <h2 className="text-4xl">{article.title}</h2>
                <div className="flex items-center justify-between">
                  <p className="text-slate-400 text-sm my-2">
                    {article.description}
                  </p>
                  <p className="text-slate-400 text-sm">{article.date}</p>
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
                  <span className="text-4xl font-semibold font-serif">
                    Idag
                  </span>{" "}
                  {article.text}
                </p>
                <p>
                <br />
                  Nu måste jag bara lista ut hur man gör stycken i textflödet
                  och sätta klassen bold på första stycket. Jag har en idé på
                  var att börja, Code-with-antonio har en video på att göra en
                  Notify applikation. Där börjar jag. Jag bör också välja en
                  färg till bloggen. Det ser lite dystert ut med bara black,
                  white och slate. Kanske också en översättnings funktion som
                  överför till engelska. Det finns en möjlighet att jag tänker
                  för långt fram. Kanske bör lägga till en bild först.
                </p>

                <p className="pt-10 pl-10 text-sm text-slate-400">
                  Image: <span>{article.imageDescription}</span>
                </p>
                <Image
                  src={article.image}
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
              <h3 className="font-semibold text-lg pb-2">Senaste</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="hover:underline text-sm">{articles[0].title}</p>
                  <p className="text-sm text-slate-400">{articles[0].date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JournalPage;
