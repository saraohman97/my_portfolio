interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
    return ( 
        <h1 className="text-center py-20 text-5xl">{title}</h1>
     );
}
 
export default Title;