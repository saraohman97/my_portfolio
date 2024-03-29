import { User } from "@prisma/client";

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
};

export type Post = {
    id: string;
    title: string;
    description: string;
    imageDescription: string;
    preText: string;
    text: string;
    favorite: boolean;
    images: Image[];
    createdAt: Date;

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
}

export type Image = {
    id: string;
    url: string;
}

export type Project = {
    id: string;
    title: string;
    url: string;
    images: ProjectImage[]
}

export type ProjectImage = {
    id: string;
    url: string;
}