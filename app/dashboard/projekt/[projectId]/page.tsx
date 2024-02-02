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
import ImageUpload from "@/components/ui/image-upload";
import { Project, ProjectImage } from "@prisma/client";

const formSchema = z.object({
  title: z.string(),
  url: z.string().optional(),
  images: z.object({ url: z.string() }).array(),
});

interface ProjectFormProps {
  initialData:
    Project & {
        images: ProjectImage[];
      }
    | null;
}

type ProjectFormValues = z.infer<typeof formSchema>;

const ProjectPage: React.FC<ProjectFormProps> = ({ initialData }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = initialData
    ? {
        ...initialData,
      }
    : {
        title: "",
        url: "",
        images: []
      };

  // 1. Define your form.
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  // 2. Define a submit handler.
  function onSubmit(data: ProjectFormValues) {
    console.log("ny project:", data);

    setIsLoading(true);
    axios
      .post("/api/project", data)
      .then(() => {
        toast.success("Project created.");
        router.push("/dashboard/projekt");
        router.refresh();
      })
      .catch((error) => {
        toast.error("Something went wrong trying to save project to db.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full text-center">
        <Heading
          title="Nytt projekt"
          description="Skriv om ett nytt projekt."
          center
        />
        <Button
          variant="link"
          onClick={() => router.push("/dashboard/projekt")}
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
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titel</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bilder</FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={field.value.map((image) => image.url)}
                      disabled={isLoading}
                      onChange={(url) =>
                        field.onChange([...field.value, { url }])
                      }
                      onRemove={(url) =>
                        field.onChange([
                          ...field.value.filter(
                            (current) => current.url !== url
                          ),
                        ])
                      }
                    />
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

export default ProjectPage;
