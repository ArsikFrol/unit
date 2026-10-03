import { prisma } from "../src/lib/prisma"
import { listCities, listCreators, listLinks, listProjects, listTechnologies, listUniversities } from "./constans"

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

    await prisma.city.createMany({
        data: [...listCities]
    })

    const cities = await prisma.city.findMany({
        select: {
            cityId: true,
            slug: true,
        }
    })

    const cityIdBySlug = Object.fromEntries(
        cities.map((c) => [c.slug, c.cityId])
    ) as Record<string, string>

    await prisma.university.createMany({
        data: listUniversities.map(({ citySlug, ...rest }) => ({
            ...rest,
            cityId: cityIdBySlug[citySlug]
        }))
    })

    console.log('Seeding завершён успешно!')
}

async function down() {

    await prisma.projectTechnology.deleteMany()
    await prisma.projectCreator.deleteMany()
    await prisma.link.deleteMany()

    await prisma.university.deleteMany()

    await prisma.project.deleteMany()
    await prisma.technology.deleteMany()
    await prisma.creator.deleteMany()
    await prisma.city.deleteMany()

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