"use client";

import { TableProject, columns } from "./columns";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Plus } from "lucide-react";

import { DataTable } from "./data-table";

interface ProjectsClientProps {
  data: TableProject[];
}

export const ProjectsClient: React.FC<ProjectsClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
    <div className="flex flex-col items-center justify-center w-full text-center">
        <Heading
          title="Projekt"
          description="Här hittar du en lista av alla färdiga projekt."
        />
        <Button
          onClick={() => router.push("/dashboard/projekt/ny")}
          className="self-end"
        >
          <Plus className="mr-2" /> Nytt projekt
        </Button>
      </div>
    <div className="max-w-screen-lg mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
    </>
  );
}
