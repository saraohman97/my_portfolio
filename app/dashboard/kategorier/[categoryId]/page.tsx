"use client";

import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Heading from "@/components/ui/heading";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import ImageUpload from "@/components/ui/image-upload";
import { Category } from "@prisma/client";

const formSchema = z.object({
  name: z.string(),
});

interface CategoryFormProps {
  initialData: Category | null;
}

type CategoryFormValues = z.infer<typeof formSchema>

const CategoryPage: React.FC<CategoryFormProps> = ({
  initialData
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = initialData ? {
    ...initialData
  } : {
    name: ""
  }

  // 1. Define your form.
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  // 2. Define a submit handler.
  function onSubmit(data: CategoryFormValues) {
    console.log("ny kategori:", data);

    setIsLoading(true);
    axios
      .post("/api/category", data)
      .then(() => {
        toast.success("Category created.");
        router.push("/dashboard/kategorier");
        router.refresh();
      })
      .catch((error) => {
        toast.error("Something went wrong trying to save product to db.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full text-center">
        <Heading
          title="Ny kategori"
          description="Skapa en ny kategori till journalen."
          center
        />
        <Button
          variant="link"
          onClick={() => router.push("/dashboard/kategorier")}
          className="self-end"
        >
          <IoIosArrowRoundBack size={24} className="mr-2" /> Gå tillbaka
        </Button>
      </div>

      {/* product form */}
      <div className="space-y-4 max-w-96 mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Namn</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
              <Button type="submit">Skapa</Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default CategoryPage;
