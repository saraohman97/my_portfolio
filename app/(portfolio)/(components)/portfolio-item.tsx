import { Button } from "@/components/ui/button";
import { Project } from "@/types";
import Image from "next/image";

interface PortfolioItemProps {
  project: Project;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ project }) => {
  return (
    <div>
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
  );
};

export default PortfolioItem;
