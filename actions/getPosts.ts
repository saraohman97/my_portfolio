import prismadb from "@/lib/prismadb";

export interface IPostParams {
    searchTerm?: string | null;
}

export default async function getPosts(params: IPostParams) {
    try {
        const { searchTerm} = params;
        let searchString = searchTerm;

        if(!searchTerm) {
            searchString = ''
        }

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