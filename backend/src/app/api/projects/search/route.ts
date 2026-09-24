import { NextRequest, NextResponse } from "next/server";
import { CORS_HEADERS } from "../../../../lib/cors";
import { prisma } from "../../../../lib/prisma";

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: CORS_HEADERS,
    })
}

export async function GET(req: NextRequest) {
    try {

        const valueSearch = req.nextUrl.searchParams.get('value')

        if (!valueSearch) {
            const listProjects = await prisma.project.findMany({
                select: {
                    projectId: true,
                    status: true,
                    title: true,
                    description: true,
                    imageLogo: true,
                    bgColor: true,
                    link: true,
                    endOfDevelopment: true,
                    startOfDevelopment: true,
                    technologies: {
                        select: {
                            technology: {
                                select: {
                                    bgColor: true,
                                    colorText: true,
                                    iconUrl: true,
                                    name: true,
                                }
                            },
                        }
                    },
                    creators: {
                        select: {
                            creator: {
                                select: {
                                    avatarUrl: true,
                                    name: true,
                                    slug: true,
                                    bgColor: true,
                                    colorText: true,
                                    role: true
                                }
                            }
                        }
                    }
                }
            })

            const result = listProjects.map(({ creators, technologies, ...profject }) => ({
                ...profject,
                technologies: technologies.map(t => t.technology),
                creators: creators.map(c => c.creator)
            }))

            return NextResponse.json(result, {
                headers: CORS_HEADERS
            })
        }

        const listProjects = await prisma.project.findMany({
            where: {
                OR: [
                    { title: { contains: valueSearch, mode: 'insensitive' } },
                    { description: { contains: valueSearch, mode: 'insensitive' } }
                ]
            },
            select: {
                projectId: true,
                status: true,
                title: true,
                description: true,
                imageLogo: true,
                bgColor: true,
                link: true,
                endOfDevelopment: true,
                startOfDevelopment: true,
                technologies: {
                    select: {
                        technology: {
                            select: {
                                bgColor: true,
                                colorText: true,
                                iconUrl: true,
                                name: true,
                            }
                        },
                    }
                },
                creators: {
                    select: {
                        creator: {
                            select: {
                                avatarUrl: true,
                                name: true,
                                slug: true,
                                bgColor: true,
                                colorText: true,
                                role: true
                            }
                        }
                    }
                }
            }
        })

        const result = listProjects.map(({ creators, technologies, ...profject }) => ({
            ...profject,
            technologies: technologies.map(t => t.technology),
            creators: creators.map(c => c.creator)
        }))

        return NextResponse.json(result, {
            headers: CORS_HEADERS
        })

    } catch (error) {
        console.error('Ошибка:', error);
        return NextResponse.json(
            { error: 'Внутренняя ошибка сервера' },
            { status: 500, headers: CORS_HEADERS }
        );
    }
}