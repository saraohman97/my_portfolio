import prismadb from "@/lib/prismadb";
import qs from 'querystring'
import { Post } from "@/types";

export default async function getPosts() {
    try {
        let query: any = {}

        const categories = await prismadb?.category.findMany({
            where: {
                ...query,
            }
        })

        return categories

    } catch (error: any) {
        throw new Error(error)
    }
}