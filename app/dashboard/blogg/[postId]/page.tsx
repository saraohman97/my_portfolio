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
import { Image, Post } from "@prisma/client";

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  imageDescription: z.string(),
  preText: z.string(),
  text: z.string(),
  favorite: z.boolean().default(false).optional(),
  images: z.object({ url: z.string() }).array(),

  NextJS: z.boolean().default(false).optional(),
  ReactJS: z.boolean().default(false).optional(),
  VanillaJS: z.boolean().default(false).optional(),
  MongoDB: z.boolean().default(false).optional(),
  MySQL: z.boolean().default(false).optional(),
  Prisma: z.boolean().default(false).optional(),
  Mongoose: z.boolean().default(false).optional(),
  Shadcn: z.boolean().default(false).optional(),
  Tailwind: z.boolean().default(false).optional(),
  VanillaCSS: z.boolean().default(false).optional(),
});

interface PostFormProps {
  initialData:
    | (Post & {
        images: Image[];
      })
    | null;
}

type PostFormValues = z.infer<typeof formSchema>;

const BlogPage: React.FC<PostFormProps> = ({ initialData }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = initialData
    ? {
        ...initialData,
      }
    : {
        title: "",
        description: "",
        imageDescription: "",
        preText: "",
        text: "",
        favorite: false,
        images: [],
        NextJS: false,
        ReactJS: false,
        VanillaJS: false,
        MongoDB: false,
        MySQL: false,
        Prisma: false,
        Mongoose: false,
        Shadcn: false,
        Tailwind: false,
        VanillaCSS: false,
      };

  // 1. Define your form.
  const form = useForm<PostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  // 2. Define a submit handler.
  function onSubmit(data: PostFormValues) {
    console.log("ny post:", data);

    setIsLoading(true);
    axios
      .post("/api/post", data)
      .then(() => {
        toast.success("Product created.");
        router.push("/dashboard/blogg");
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
          title="Ny artikel"
          description="Skriv ett nytt inlägg till jornalen."
          center
        />
        <Button
          variant="link"
          onClick={() => router.push("/dashboard/blogg")}
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Beskrivning</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Förklarande text</FormLabel>
                  <FormControl>
                    <Textarea placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Text</FormLabel>
                  <FormControl>
                    <Textarea placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="favorite"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-4 py-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      //ts-ignore
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="pb-2">Favoritisera</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <p className="text-slate-400 text-sm">Kategorier</p>
            <div className="grid grid-cols-2 border rounded pl-6 py-6 mb-6">
              <FormField
                control={form.control}
                name="NextJS"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-4 py-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        //ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="pb-2">NextJS</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ReactJS"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-4 py-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        //ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="pb-2">ReactJS</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="VanillaJS"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-4 py-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        //ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="pb-2">VanillaJS</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="MongoDB"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-4 py-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        //ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="pb-2">MongoDB</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="MySQL"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-4 py-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        //ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="pb-2">MySQL</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={form.control}
                name="Prisma"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-4 py-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        //ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="pb-2">Prisma</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={form.control}
                name="Mongoose"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-4 py-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        //ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="pb-2">Mongoose</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Shadcn"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-4 py-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        //ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="pb-2">Shadcn</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Tailwind"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-4 py-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        //ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="pb-2">Tailwind</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="VanillaCSS"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-4 py-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        //ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="pb-2">VanillaCSS</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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

            <FormField
              control={form.control}
              name="imageDescription"
              render={({ field }) => (
                <FormItem className="mt-6">
                  <FormLabel>Beskrivning till bilden</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
              <Button type="submit">Skicka</Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default BlogPage;
