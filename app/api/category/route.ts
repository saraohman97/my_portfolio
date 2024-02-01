import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST(
    request: Request
) {
    try {
        const body = await request.json()
        const {
            name
        } = body;
    
        const category = await prismadb.category.create({
            data: {
                name
            }
        })
        return NextResponse.json(category)

    } catch (error) {
        console.log('error post post', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}