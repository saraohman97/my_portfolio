"use client";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full text-center">
        <Heading
          title="Blogg"
          description="Här hittar du en lista av alla blogginlägg."
        />
        <Button onClick={() => router.push("/dashboard/ny")} className="self-end">
          <Plus className="mr-2" /> Ny post
        </Button>
      </div>

      <div className="border w-full my-4">table here</div>
    </>
  );
};

export default DashboardPage;
