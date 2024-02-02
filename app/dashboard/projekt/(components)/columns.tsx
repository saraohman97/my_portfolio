"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type TableProject = {
  id: string;
  title: string;
  url: string;
  createdAt: string;
};

export const columns: ColumnDef<TableProject>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "url",
    header: "Link",
  },
  {
    accessorKey: "createdAt",
    header: "Datum skapat",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
