import prismadb from '@/lib/prismadb'

export default async function getPosts() {
    try {
        const posts = await prismadb.post.findMany({
            include: {
                images: true
            },
            orderBy: {
                createdAt: "desc"
            }
        })
        if(!posts) return null;
        
        if(posts) {
            return posts
        }
    } catch (error: any) {
        throw new Error(error)
    }
}