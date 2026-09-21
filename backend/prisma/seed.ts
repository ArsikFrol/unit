import { prisma } from "../src/lib/prisma"
import { listProjects } from "./constans"


async function up() {
    console.log('Начинаем заполнение базы данных...')

    await prisma.project.createMany({
        data: listProjects
    })

    console.log('Seeding завершён успешно!')
}

async function down() {

    await prisma.project.deleteMany()

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
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });