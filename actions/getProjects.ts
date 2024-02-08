import prismadb from '@/lib/prismadb'

export default async function getProjects() {
    try {
        const projects = await prismadb.project.findMany({
            include: {
                images: true
            },
            orderBy: {
                createdAt: "desc"
            }
        })
        if(!projects) return null;
        
        if(projects) {
            return projects
        }
    } catch (error: any) {
        throw new Error(error)
    }
}