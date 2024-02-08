
import { ProjectsClient } from "./(components)/client";
import getProjects from "@/actions/getProjects";

const ProjectsPage = async () => {

  const projects = await getProjects()

  return (
    <>
        <ProjectsClient data={projects} />
    </>
  );
};

export default ProjectsPage;
