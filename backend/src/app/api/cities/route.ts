import { NextRequest, NextResponse } from "next/server";
import { CORS_HEADERS } from "../../../lib/cors";
import { prisma } from "../../../lib/prisma";

export async function GET(req: NextRequest) {
    try {

        const value = req.nextUrl.searchParams.get('value')

        if (!value) {
            const cities = await prisma.city.findMany({
                select: {
                    cityId: true,
                    name: true,
                    slug: true,
                    _count: {
                        select: { universities: true }
                    }
                },
                orderBy: {
                    universities: {
                        _count: 'desc'
                    }
                }
            })

            const result = cities.map(({ _count, ...city }) => ({
                ...city,
                countUniversity: _count.universities
            }))

            return NextResponse.json(result, { headers: CORS_HEADERS })
        }

        const cities = await prisma.city.findMany({
            where: { name: { contains: value, mode: "insensitive" } },
            select: {
                cityId: true,
                name: true,
                slug: true,
                _count: {
                    select: { universities: true }
                }
            }
        })

        const result = cities.map(({ _count, ...city }) => ({
            ...city,
            countUniversity: _count.universities
        }))

        return NextResponse.json(result, { headers: CORS_HEADERS })

    } catch (error) {
        console.error('Ошибка:', error);
        return NextResponse.json(
            { error: 'Внутренняя ошибка сервера' },
            { status: 500, headers: CORS_HEADERS }
        );
    }
}