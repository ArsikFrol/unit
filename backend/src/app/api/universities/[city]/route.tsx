import { NextRequest, NextResponse } from "next/server";
import { CORS_HEADERS } from "../../../../lib/cors";
import { prisma } from "../../../../lib/prisma";
import { CitySlug } from "../../../../../prisma/constans";

export async function GET(req: NextRequest, { params }: { params: Promise<{ citySlug: CitySlug }> }) {
    try {

        const { citySlug } = await params
        const value = req.nextUrl.searchParams.get('value')

        if (!value) {
            const result = await prisma.university.findMany({
                where: { city: { slug: citySlug } },
                select: {
                    cityId: true,
                    slug: true,
                    fullName: true,
                    shortName: true
                }
            })

            return NextResponse.json(result, { headers: CORS_HEADERS })
        }

        const result = await prisma.university.findMany({
            where: {
                city: { slug: citySlug },
                OR: [
                    { fullName: { contains: value, mode: 'insensitive' } },
                    { shortName: { contains: value, mode: 'insensitive' } }
                ]
            },
            select: {
                cityId: true,
                slug: true,
                fullName: true,
                shortName: true
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