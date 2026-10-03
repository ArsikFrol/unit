import { NextRequest, NextResponse } from "next/server";

import { CORS_HEADERS } from "../../../lib/cors";
import { prisma } from "../../../lib/prisma";

export async function GET(req: NextRequest) {
    try {

        const value = req.nextUrl.searchParams.get('value')

        if (!value) {
            const result = await prisma.technology.findMany({
                select: {
                    technologyId: true,
                    bgColor: true,
                    colorText: true,
                    iconUrl: true,
                    name: true,
                    slug: true,
                }
            })

            return NextResponse.json(result, { headers: CORS_HEADERS })
        }

        const result = await prisma.technology.findMany({
            where: {
                OR: [
                    { name: { contains: value, mode: 'insensitive' } },
                    { slug: { contains: value, mode: 'insensitive' } }
                ]
            },
            select: {
                technologyId: true,
                bgColor: true,
                colorText: true,
                iconUrl: true,
                name: true,
                slug: true,
            }
        })

        return NextResponse.json(result, { headers: CORS_HEADERS })

    } catch (error) {
        console.error('Ошибка:', error);
        return NextResponse.json(
            { error: 'Внутренняя ошибка сервера' },
            { status: 500, headers: CORS_HEADERS }
        );
    }
}