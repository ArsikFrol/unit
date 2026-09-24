import { NextRequest, NextResponse } from "next/server";
import { CORS_HEADERS } from "../../../../lib/cors";
import { prisma } from "../../../../lib/prisma";

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    try {

        const { slug } = await params

        const creator = await prisma.creator.findUnique({
            where: { slug },
            select: {
                creatorId: true,
                avatarUrl: true,
                bgColor: true,
                bio: true,
                colorText: true,
                name: true,
                role: true,
                slug: true,
                links: true
            }
        })

        if (!creator) return NextResponse.json(
            { error: `Не найден создатель с таким slug: ${slug}` },
            { status: 404, headers: CORS_HEADERS }
        )

        return NextResponse.json(creator, { headers: CORS_HEADERS })

    } catch (error) {
        console.error('Ошибка:', error);
        return NextResponse.json(
            { error: 'Внутренняя ошибка сервера' },
            { status: 500, headers: CORS_HEADERS }
        );
    }
}