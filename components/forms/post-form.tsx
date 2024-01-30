"use client";

import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Post } from "@prisma/client";
import Heading from "../ui/heading";
import { MoveLeft } from "lucide-react";
import ImageUpload from "../ui/image-upload";

const formSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(2),
  text: z.string().min(2),
  favorite: z.boolean().default(false).optional(),
  images: z.string().min(2),
});

type PostFormValues = z.infer<typeof formSchema>;


const PostForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<PostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      text: "",
      favorite: false,
      images: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      await axios.post(`/api/posts`, data);
      router.refresh();
      toast.success("Post skapat.");
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title='Ny post' description='Ny post' />
        <Button variant="link" className="gap-2">
          <MoveLeft />
          Tillbaka
        </Button>
      </div>

      <div className="w-96">
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex flex-col gap-4 py-4 w-96">
                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bild</FormLabel>
                      <FormControl>
                        <ImageUpload
                        value={field.value ? [field.value] : []}
                        disabled={isLoading}
                        onChange={(url) => field.onChange(url)}
                        onRemove={() => field.onChange("")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Titel</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} {...field} />
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
                        <Textarea
                          placeholder="Tell us a little bit about yourself"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="favorite"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>Favoritisera</FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit">Ladda upp</Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default PostForm;

const items = [
  {
    id: "nextjs",
    label: "NextJS",
  },
  {
    id: "typescript",
    label: "Typescript",
  },
  {
    id: "prisma",
    label: "Prisma",
  },
  {
    id: "mongodb",
    label: "MongoDB",
  },
  {
    id: "tailwindcss",
    label: "TailwindCSS",
  },
  {
    id: "shadcn-ui",
    label: "Shadcn-ui",
  },
] as const;
