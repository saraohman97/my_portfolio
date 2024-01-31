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
    images: Image[]
}
export interface Image {
    id: string;
    url: string;
}