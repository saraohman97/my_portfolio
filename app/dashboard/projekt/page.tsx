
import prismadb from "@/lib/prismadb";
import { format } from 'date-fns'
import { TableProject } from "./(components)/columns";
import { ProjectsClient } from "./(components)/client";

const ProjectsPage = async () => {

  const projects = await prismadb.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
        <ProjectsClient data={projects} />
    </>
  );
};

export default ProjectsPage;
