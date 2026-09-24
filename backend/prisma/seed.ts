import { prisma } from "../src/lib/prisma"
import { listCreators, listLinks, listProjects, listTechnologies } from "./constans"

async function up() {
    console.log('Начинаем заполнение базы данных...')

    await prisma.technology.createMany({
        data: [...listTechnologies],
    })

    await prisma.creator.createMany({
        data: [...listCreators],
    })

    for (const { creators, technologies, ...projectFields } of listProjects) {
        await prisma.project.create({
            data: {
                ...projectFields,
                technologies: {
                    create: technologies.map((slug) => ({
                        technology: { connect: { slug } },
                    })),
                },
                creators: {
                    create: creators.map((slug) => ({
                        creator: { connect: { slug } }
                    }))
                }
            },
        })
    }

    const creatorIdBySlug = Object.fromEntries(
        (await prisma.creator.findMany({
            select: { creatorId: true, slug: true },
        })).map((c) => [c.slug, c.creatorId])
    ) as Record<string, string>

    await prisma.link.createMany({
        data: listLinks.map(({ creatorSlug, ...rest }) => ({
            ...rest,
            creatorId: creatorIdBySlug[creatorSlug],
        })),
    })

    console.log('Seeding завершён успешно!')
}

async function down() {

    await prisma.project.deleteMany()
    await prisma.creator.deleteMany()
    await prisma.link.deleteMany()
    await prisma.technology.deleteMany()

    console.log('База данных очищена')
}

async function main() {
    try {
        await down()
        await up()
    } catch (error) {
        console.error('❌ Ошибка при заполнении базы:', error)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

main()