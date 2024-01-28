
interface HeadingProps {
    title: string;
    description: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-2xl mb-2 text-center">{title}</h2>
      <p className="text-slate-400 max-w-96 mb-5 text-center">
        {description}
      </p>
    </div>
  );
};

export default Heading;
