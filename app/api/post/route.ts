import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST(
    request: Request
) {
    try {
        const body = await request.json()
        const {
            title,
            description,
            text,
            favorite,
            images
        } = body;
    
        const post = await prismadb.post.create({
            data: {
                title,
                description,
                text,
                favorite,
                images: {
                    createMany: {
                      data: [
                        ...images.map((image: { url: string }) => image),
                      ],
                    },
                }
            }
        })
        return NextResponse.json(post)

    } catch (error) {
        console.log('error post post', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}