"use client";

import { TablePost, columns } from "./columns";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Plus } from "lucide-react";

import { DataTable } from "./data-table";

interface BlogClientProps {
  data: TablePost[];
}

export const BlogClient: React.FC<BlogClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
    <div className="flex flex-col items-center justify-center w-full text-center">
        <Heading
          title="Blogg"
          description="Här hittar du en lista av alla blogginlägg."
        />
        <Button
          onClick={() => router.push("/dashboard/blogg/ny")}
          className="self-end"
        >
          <Plus className="mr-2" /> Ny post
        </Button>
      </div>
    <div className="max-w-screen-lg mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
    </>
  );
}
