import prismadb from "@/lib/prismadb";
import qs from 'querystring'
import { Post } from "@/types";

export default async function getPosts() {
    try {


        let query: any = {}

        const posts = await prismadb?.post.findMany({
            where: {
                ...query,
                OR: [
                    {
                        title: {
                            contains: searchString,
                            mode: 'insensitive'
                        },
                        description: {
                            contains: searchString,
                            mode: 'insensitive'
                        }
                    }
                ]
            }
        })

        return posts

    } catch (error: any) {
        throw new Error(error)
    }
}