"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";

export type TablePost = {
  id: string;
  title: string;
  description: string;
  favorite: boolean;
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
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
