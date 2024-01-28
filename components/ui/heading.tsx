import { useRouter } from "next/navigation";

interface HeadingProps {
  title: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  const router = useRouter();
  return (
      <div>
        <h2 className="text-2xl mb-2">{title}</h2>
        <p className="text-slate-400 text-sm mb-5">{description}</p>
      </div>
  );
};

export default Heading;
