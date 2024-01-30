import { useRouter } from "next/navigation";

interface HeadingProps {
  title: string;
  description: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, description, center }) => {
  const router = useRouter();
  return (
      <div className={center ? 'text-center' : ''}>
        <h2 className="text-2xl mb-2">{title}</h2>
        <p className="text-slate-400 text-sm mb-5">{description}</p>
      </div>
  );
};

export default Heading;
