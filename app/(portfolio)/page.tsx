import Image from "next/image";
import prismadb from "@/lib/prismadb";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

const HomeClient = async () => {
  const projects = await prismadb.project.findMany({
    include: {
      images: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full relative">
        <Image
          src="/bg.png"
          alt=""
          fill
          className="absolute bottom-0 z-0 opacity-10"
        />
        <div className="text-lg mb-2">Sara Öhman</div>
        <div className="text-3xl font-bold">
          Junior designer & frontend utvecklare
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 w-2/3 mx-auto h-full mt-32">
        <div className="text-2xl text-center">
          Min smak är enkel, <br />
          jag blir lätt nöjd med det bästa <br />- Winston S.Churchill
        </div>

        <div className="grid grid-cols-2 gap-10">
          {skills.map((item) => (
            <div key={item.label}>
              <div className="font-bold text-xl text-center">{item.label}</div>
              <div className="font-extralight">{item.content}</div>
            </div>
          ))}
        </div>
      </div>

      {projects.length && (
        <div className="flex flex-col items-center gap-10 h-full">
          <div className="text-2xl">Projekt</div>

          <div className="grid grid-cols-2 gap-10">
            {projects.map((project) => (
              <div key={project.id}>
                <a
                  href={`https://${project.url}`}
                  target="_blank"
                  className="relative group cursor-pointer"
                >
                  <Image
                    src={project.images[0].url}
                    className="w-full group-hover:blur-sm shadow-xl max-h-[400px] object-cover"
                    width={400}
                    height={400}
                    alt={project.title}
                  />
                  <div className="invisible top-0 right-0 bottom-0 left-0 flex items-center justify-center group-hover:absolute group-hover:visible">
                    <Button>Gå till webbsidan</Button>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default HomeClient;

const skills = [
  {
    label: "NextJS",
    content:
      "År 2023 valde skaparna av Facebook att uppdatera deras rekommenderade Framework från ReactJS till NextJS. NextJS är ett Framework byggt ovanpå ReactJS för att ge ytterliga funktioner som server-side rendering och automatisk code splitting.",
  },
  {
    label: "TailwindCSS och Shadcn/ui",
    content:
      "Ett annan snabbt växande Framework är TailwindCSS. TailwindCSS gör livet så mycket enklare med snabb användning och prydlig placering. För att mycket snabbare få upp en webbsida använder jag oftast Shadcn-ui som kommer med färdigbyggda komponenter och funktionalitet.",
  },
  {
    label: "Prisma",
    content:
      "Prisma låser upp en ny nivå av utvecklarupplevelse när man arbetar med databaser, tack vare sin intuitiva datamodell, automatiserade migrering, typsäkerhet och autokomplettering.",
  },
  {
    label: "TypeScript",
    content:
      "TypeScript lägger till ytterligare syntax till JavaScript för att stödja en stramare integration med ens editor. Det vill säga, den låter mig fånga fel tidigt i min editor.",
  },
  {
    label: "MongoDB eller mySQl",
    content:
      "De ledande databashanterarna med öppen källkod är MongoDB och MySQL.",
  },
];