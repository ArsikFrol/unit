import { NextRequest, NextResponse } from 'next/server'

import { CORS_HEADERS } from '../../../lib/cors'
import { prisma } from '../../../lib/prisma';

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: CORS_HEADERS,
    })
}

export async function GET(req: NextRequest) {
    try {

        const listProjects = await prisma.project.findMany()

        return NextResponse.json(listProjects,
            { headers: CORS_HEADERS }
        )

    } catch (error) {
        console.error('Ошибка:', error);
        return NextResponse.json(
            { error: 'Внутренняя ошибка сервера' },
            { status: 500, headers: CORS_HEADERS }
        );
    }
}