'use client'

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter()

  return (
    <>
    <div className="flex items-center justify-between">
    <Heading
        title="Ny artikel"
        description="Skriv ett nytt inlägg till jornalen."
      />
      <Button onClick={() => router.push('/dashboard/ny')}><Plus className="mr-2" /> Ny post</Button>
    </div>
    </>
  );
};

export default DashboardPage;
