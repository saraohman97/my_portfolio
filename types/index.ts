import { User } from "@prisma/client";

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
};

export interface Post {
    id: string;
    title: string;
    description: string;
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
export interface Image {
    id: string;
    url: string;
}

export interface Project {
    id: string;
    title: string;
    url: string;
    images: ProjectImage[]
}

export interface ProjectImage {
    id: string;
    title: string;
    images: ProjectImage[]
}
