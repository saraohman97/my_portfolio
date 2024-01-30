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
import { signIn } from "next-auth/react";
import Heading from "@/components/ui/heading";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import ImageUpload from "@/components/ui/image-upload";
import { Image, Post } from "@prisma/client";

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  text: z.string(),
  favorite: z.boolean().default(false).optional(),
  images: z.object({ url: z.string() }).array(),
});

interface PostFormProps {
  initialData: Post & {
    images: Image[]
  } | null;
}

type PostFormValues = z.infer<typeof formSchema>

const BlogPage: React.FC<PostFormProps> = ({
  initialData
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = initialData ? {
    ...initialData
  } : {
    title: "",
    description: "",
    text: "",
    favorite: false,
    images: []
  }

  // 1. Define your form.
  const form = useForm<PostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues
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
              <Button type="submit">Skicka</Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default BlogPage;