"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";
import { format } from "date-fns";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type TablePost = {
  id: string;
  title: string;
  description: string;
  favorite: boolean;
  // createdAt: Date;
  imageDescription: string;
  preText: string;
  NextJS: boolean;
  ReactJS: boolean;
  VanillaJS: boolean;
  MongoDB: boolean;
  MySQL: boolean;
  Prisma: boolean;
  Mongoose: boolean;
  Shadcn: boolean;
  Tailwind: boolean;
  VanillaCSS: boolean;
};

export const columns: ColumnDef<TablePost>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Beskrivning",
  },
  {
    accessorKey: "favorite",
    header: "Favorit",
  },
  // {
  //   accessorKey: "createdAt",
  //   header: "Datum skapat",
  // },
  // {
  //   accessorKey: "createdAt",
  //   header: "Date",
  //   cell: ({ row }) => (
  //     <div className="flex items-center">
  //       {format(row.original.createdAt, "MMMM do, yyyy")}
  //     </div>
  //   )
  // },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
