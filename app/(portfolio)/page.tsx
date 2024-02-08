import Footer from "@/components/footer";
import PortfolioForm from "./(components)/portfolio-form";
import getProjects from "@/actions/getProjects";

const HomeClient = async () => {
  const projects = await getProjects()

  return (
    <>
      <PortfolioForm data={projects} />
      <Footer />
    </>
  );
};

export default HomeClient;
