import { NextRequest, NextResponse } from "next/server";
import { CORS_HEADERS } from "../../../../lib/cors";
import { prisma } from "../../../../lib/prisma";

export async function GET(req: NextRequest, { params }: { params: Promise<{ creatorSlug: string }> }) {
    try {

        const { creatorSlug } = await params

        const hisProjects = await prisma.project.findMany({
            where: {
                creators: {
                    some: {
                        creator: {
                            slug: creatorSlug
                        }
                    }
                }
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

        const result = hisProjects.map(({ creators, technologies, ...project }) => ({
            ...project,
            creators: creators.map(c => c.creator),
            technologies: technologies.map(t => t.technology)
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