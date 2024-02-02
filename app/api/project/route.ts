import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST(
    request: Request
) {
    try {
        const body = await request.json()
        const {
            title,
            url,
            images,
        } = body;
    
        const project = await prismadb.project.create({
            data: {
                title,
                url,
                images: {
                    createMany: {
                      data: [
                        ...images.map((image: { url: string }) => image),
                      ],
                    },
                },
            }
        })
        return NextResponse.json(project)

    } catch (error) {
        console.log('error post post', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}