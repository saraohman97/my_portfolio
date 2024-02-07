import prismadb from "@/lib/prismadb";
import Footer from "@/components/footer";
import PortfolioForm from "./(components)/portfolio-form";

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
      <PortfolioForm data={projects} />
      <Footer />
    </>
  );
};

export default HomeClient;
