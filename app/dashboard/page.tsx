"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Heading from "@/components/ui/heading";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

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

const DashboardPage = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      items: ["nextjs", "typescript"],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <>
      <div className="flex items-center flex-col">
        <Heading
          title="Ny artikel"
          description="Skriv ett nytt inlägg till jornalen."
        />
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-col gap-4 py-4 w-96">
              <div>
                {/* Bilder */}
                <Label htmlFor="name" className="text-right">
                  Bilder
                </Label>
                <Input
                  id="name"
                  className="col-span-3 bg-slate-200"
                  placeholder={`Ladda upp en bild`}
                />
              </div>

              <div>
                {/* Titlel */}
                <Label htmlFor="username" className="text-right">
                  Titel
                </Label>
                <Input id="username" className="col-span-3" />
              </div>

              <div>
                {/* Text */}
                <Label htmlFor="username" className="text-right">
                  Text
                </Label>
                <Textarea id="username" className="col-span-3 h-full" />
              </div>

              <div className="items-top flex space-x-2 my-4">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Favoritisera
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Lägg till som favorit i sidmenyn.
                  </p>
                </div>
              </div>

              <div>
                {/* Kategorier */}
                <FormField
                  control={form.control}
                  name="items"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">Kategorier</FormLabel>
                        <FormDescription>
                          Välj vilka kategorier som stämmer in med temat av
                          projektet.
                        </FormDescription>
                      </div>
                      {items.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="items"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            item.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.id
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button type="submit">Ladda upp</Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default DashboardPage;
