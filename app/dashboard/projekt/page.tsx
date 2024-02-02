
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

  const formattedProjects: TableProject[] = projects.map((item) => ({
    id: item.id,
    title: item.title,
    url: item.url,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }))

  return (
    <>
        <ProjectsClient data={formattedProjects} />
    </>
  );
};

export default ProjectsPage;
