import { LinkType, Status } from "../src/generated/prisma/enums";

export type ProjectSeed = {
    status: Status;
    imageLogo: string;
    title: string;
    description: string;
    link: string;
    bgColor: string;
    startOfDevelopment: Date;
    endOfDevelopment: Date | null
    technologies: TechSlug[],
    creators: CreatorSlug[]
}

export const listProjects: ProjectSeed[] = [
    { status: Status.IN_DEVELOPMENT, imageLogo: '/projects/mazeMall.webp', title: 'Maze Mall', description: 'Приключенческий шутер-рогалик, в котором вам предстоит найти выход из захваченного демоном лабиринта торгового центра.Приключенческий шутер-рогалик, в котором вам предстоит найти выход из захваченного демоном лабиринта торгового центра.Приключенческий шутер-рогалик, в котором вам предстоит найти выход из захваченного демоном лабиринта торгового центра.Приключенческий шутер-рогалик, в котором вам предстоит найти выход из захваченного демоном лабиринта торгового центра.', link: 'https://vkplay.ru/play/game/maze_market', bgColor: '#665974', startOfDevelopment: new Date('2023-03-15'), endOfDevelopment: null, technologies: ['react', 'nextjs', 'typescript'], creators: ['dasha-morozova', 'gleb-kuznetsov', 'anya-smirnova', 'katya-lebedeva', 'egor-volkov', 'boris-ivanov', 'vika-petrova'] },
    { status: Status.COMPLETED, imageLogo: '/projects/profcom.webp', title: 'Сайт профкома УрГЭУ', description: 'Многостраничная платформа для профсоюзной организации студентов УрГЭУ. Личный кабинет, оплата взносов и информационные разделы.', link: 'https://профкомургэу.рф', bgColor: '#596674', startOfDevelopment: new Date('2022-09-01'), endOfDevelopment: new Date('2023-06-30'), technologies: ['react', 'nextjs', 'prisma', 'postgresql', 'tailwindcss'], creators: ['anya-smirnova', 'boris-ivanov'] },
    { status: Status.IN_DEVELOPMENT, imageLogo: '/projects/catnBall.webp', title: 'CatnBall', description: 'Платформер, где вы управляете котом, наклоняя телефон. Освойте ритм прыжков и используйте клубок, чтобы достичь цели!', link: 'https://rustore.ru/catalog/app/com.Amazengs.Catnball', bgColor: '#4e6788', startOfDevelopment: new Date('2024-01-10'), endOfDevelopment: null, technologies: ['react', 'typescript'], creators: ['dasha-morozova', 'egor-volkov'] },
    { status: Status.IN_DEVELOPMENT, imageLogo: '/projects/mazeMall.webp', title: 'Inside Out Me', description: 'Визуальная новелла с необычным сюжетом: в антиутопичном будущем ученая Дешка работает над собственным проектом в стенах зловещей корпорации.', link: 'https://t.me/insideoutmeoff', bgColor: '#745959', startOfDevelopment: new Date('2024-06-01'), endOfDevelopment: null, technologies: ['typescript', 'nodejs'], creators: ['dasha-morozova'] },
    { status: Status.COMPLETED, imageLogo: '/projects/mazeMall.webp', title: 'UNIT Landing', description: 'Одностраничный сайт студии с анимациями и адаптивной вёрсткой.', link: 'https://unit-studio.ru', bgColor: '#4a5d6b', startOfDevelopment: new Date('2023-01-20'), endOfDevelopment: new Date('2023-04-15'), technologies: ['react', 'nextjs', 'tailwindcss', 'typescript'], creators: ['anya-smirnova', 'vika-petrova'] },
    { status: Status.IN_DEVELOPMENT, imageLogo: '/projects/catnBall.webp', title: 'Cyber Runner', description: 'Бесконечный раннер в киберпанк-сеттинге с процедурной генерацией уровней.', link: 'https://store.steampowered.com/app/cyber_runner', bgColor: '#3d4a5c', startOfDevelopment: new Date('2024-09-05'), endOfDevelopment: null, technologies: ['react', 'typescript'], creators: ['gleb-kuznetsov'] },
    { status: Status.COMPLETED, imageLogo: '/projects/profcom.webp', title: 'TaskFlow', description: 'Веб-приложение для управления задачами с канбан-досками и командной работой.', link: 'https://taskflow.app', bgColor: '#5c6b4a', startOfDevelopment: new Date('2022-11-10'), endOfDevelopment: new Date('2023-08-20'), technologies: ['react', 'nextjs', 'prisma', 'postgresql', 'tailwindcss'], creators: ['anya-smirnova', 'boris-ivanov', 'egor-volkov'] },
    { status: Status.IN_DEVELOPMENT, imageLogo: '/projects/catnBall.webp', title: 'Pixel Dungeon', description: 'Классический рогалик с пиксельной графикой и глубокой системой крафта.', link: 'https://pixeldungeon.game', bgColor: '#6b4a5c', startOfDevelopment: new Date('2023-07-01'), endOfDevelopment: null, technologies: ['typescript', 'nodejs'], creators: ['dasha-morozova'] },
    { status: Status.COMPLETED, imageLogo: '/projects/profcom.webp', title: 'EcoTracker', description: 'Мобильное приложение для отслеживания углеродного следа и эко-привычек.', link: 'https://ecotracker.app', bgColor: '#4a6b5c', startOfDevelopment: new Date('2023-02-14'), endOfDevelopment: new Date('2023-12-01'), technologies: ['react', 'typescript', 'nodejs'], creators: ['anya-smirnova', 'vika-petrova'] },
    { status: Status.IN_DEVELOPMENT, imageLogo: '/projects/catnBall.webp', title: 'Space Trader', description: 'Экономическая стратегия о торговле между звёздными системами.', link: 'https://spacetrader.io', bgColor: '#3d3d5c', startOfDevelopment: new Date('2025-01-15'), endOfDevelopment: null, technologies: ['typescript', 'nodejs'], creators: ['gleb-kuznetsov'] },
    { status: Status.COMPLETED, imageLogo: '/projects/profcom.webp', title: 'RecipeBox', description: 'Приложение для хранения рецептов с умным поиском по ингредиентам.', link: 'https://recipebox.app', bgColor: '#6b5c4a', startOfDevelopment: new Date('2022-05-20'), endOfDevelopment: new Date('2022-11-30'), technologies: ['react', 'typescript', 'tailwindcss'], creators: ['anya-smirnova', 'vika-petrova'] },
    { status: Status.IN_DEVELOPMENT, imageLogo: '/projects/catnBall.webp', title: 'FitBuddy', description: 'Трекер тренировок с персонализированными планами и статистикой прогресса.', link: 'https://fitbuddy.app', bgColor: '#4a5c6b', startOfDevelopment: new Date('2024-03-10'), endOfDevelopment: null, technologies: ['react', 'typescript', 'nodejs'], creators: ['gleb-kuznetsov', 'anya-smirnova'] },
    { status: Status.COMPLETED, imageLogo: '/projects/profcom.webp', title: 'MindMap Pro', description: 'Инструмент для создания ментальных карт с совместной работой в реальном времени.', link: 'https://mindmap.pro', bgColor: '#5c4a6b', startOfDevelopment: new Date('2023-04-05'), endOfDevelopment: new Date('2024-01-20'), technologies: ['react', 'nextjs', 'prisma', 'postgresql'], creators: ['anya-smirnova', 'boris-ivanov'] },
    { status: Status.IN_DEVELOPMENT, imageLogo: '/projects/mazeMall.webp', title: 'GhostNotes', description: 'Анонимный мессенджер с самоуничтожающимися сообщениями.', link: 'https://ghostnotes.app', bgColor: '#4a4a4a', startOfDevelopment: new Date('2024-10-01'), endOfDevelopment: null, technologies: ['react', 'nextjs', 'nodejs', 'postgresql'], creators: ['boris-ivanov', 'egor-volkov'] },
    { status: Status.COMPLETED, imageLogo: '/projects/profcom.webp', title: 'CryptoWallet', description: 'Безопасный кошелёк для хранения и обмена криптовалют с поддержкой 20+ сетей.', link: 'https://cryptowallet.io', bgColor: '#5c6b5c', startOfDevelopment: new Date('2022-07-15'), endOfDevelopment: new Date('2023-03-10'), technologies: ['react', 'nextjs', 'nodejs', 'typescript'], creators: ['boris-ivanov', 'gleb-kuznetsov'] },
    { status: Status.IN_DEVELOPMENT, imageLogo: '/projects/mazeMall.webp', title: 'AI Artist', description: 'Генератор изображений на основе текстовых описаний с использованием нейросетей.', link: 'https://aiartist.app', bgColor: '#6b4a4a', startOfDevelopment: new Date('2025-02-01'), endOfDevelopment: null, technologies: ['react', 'nextjs', 'nodejs', 'graphql'], creators: ['gleb-kuznetsov', 'vika-petrova'] },
    { status: Status.COMPLETED, imageLogo: '/projects/catnBall.webp', title: 'StudyHub', description: 'Платформа для онлайн-обучения с видеоуроками, тестами и системой прогресса.', link: 'https://studyhub.ru', bgColor: '#4a5c4a', startOfDevelopment: new Date('2023-06-01'), endOfDevelopment: new Date('2024-02-28'), technologies: ['react', 'nextjs', 'prisma', 'postgresql', 'tailwindcss'], creators: ['anya-smirnova', 'boris-ivanov', 'vika-petrova'] },
    { status: Status.IN_DEVELOPMENT, imageLogo: '/projects/mazeMall.webp', title: 'MusicLab', description: 'Веб-студия для создания музыки с виртуальными инструментами и секвенсором.', link: 'https://musiclab.app', bgColor: '#5c4a5c', startOfDevelopment: new Date('2024-08-15'), endOfDevelopment: null, technologies: ['react', 'typescript', 'nodejs'], creators: ['dasha-morozova', 'gleb-kuznetsov'] },
    { status: Status.COMPLETED, imageLogo: '/projects/catnBall.webp', title: 'PlantCare', description: 'Приложение для ухода за комнатными растениями с напоминаниями и определением по фото.', link: 'https://plantcare.app', bgColor: '#4a6b4a', startOfDevelopment: new Date('2023-09-10'), endOfDevelopment: new Date('2024-05-01'), technologies: ['react', 'typescript', 'nodejs'], creators: ['anya-smirnova', 'vika-petrova'] },
    { status: Status.IN_DEVELOPMENT, imageLogo: '/projects/catnBall.webp', title: 'CityBuilder', description: 'Градостроительный симулятор с реалистичной экономикой и экологией.', link: 'https://citybuilder.game', bgColor: '#6b5c5c', startOfDevelopment: new Date('2025-04-01'), endOfDevelopment: null, technologies: ['react', 'typescript'], creators: ['dasha-morozova', 'egor-volkov'] },
]

export type TechnologySeed = {
    name: string
    slug: string
    iconUrl: string | null
    bgColor: string | null
    colorText: string | null
}

export const listTechnologies = [
    { name: 'React', slug: 'react', iconUrl: '/icons/react.svg', bgColor: '#E7F1FF', colorText: '#087EA4' },
    { name: 'Next.js', slug: 'nextjs', iconUrl: '/icons/nextjs.svg', bgColor: '#F0F0F0', colorText: '#000000' },
    { name: 'TypeScript', slug: 'typescript', iconUrl: '/icons/typescript.svg', bgColor: '#E6F0FA', colorText: '#3178C6' },
    { name: 'TailwindCSS', slug: 'tailwindcss', iconUrl: '/icons/tailwind.svg', bgColor: '#E6FFFA', colorText: '#0EA5E9' },
    { name: 'PostgreSQL', slug: 'postgresql', iconUrl: '/icons/postgresql.svg', bgColor: '#EAF0FF', colorText: '#336791' },
    { name: 'Prisma', slug: 'prisma', iconUrl: '/icons/prisma.svg', bgColor: '#E8F0FE', colorText: '#2D3748' },
    { name: 'Node.js', slug: 'nodejs', iconUrl: '/icons/nodejs.svg', bgColor: '#EAF7E6', colorText: '#3C873A' },
    { name: 'Docker', slug: 'docker', iconUrl: '/icons/docker.svg', bgColor: '#E6F0FA', colorText: '#2496ED' },
    { name: 'Figma', slug: 'figma', iconUrl: '/icons/figma.svg', bgColor: '#FDE8F1', colorText: '#A259FF' },
    { name: 'GraphQL', slug: 'graphql', iconUrl: '/icons/graphql.svg', bgColor: '#FCE7F3', colorText: '#E10098' },
] as const satisfies readonly TechnologySeed[]

export type TechSlug = (typeof listTechnologies)[number]['slug']

export type CreatorSeed = {
    name: string
    slug: string
    role: string
    bio: string | null
    avatarUrl: string | null,
    bgColor: string | null,
    colorText: string | null
}

export const listCreators = [
    { name: 'Аня Смирнова', slug: 'anya-smirnova', role: 'Frontend-разработчик', bio: 'Фронтенд-разработчик, создаю быстрые, доступные и визуально точные интерфейсы. Специализируюсь на React, Next.js и TypeScript, уделяю особое внимание производительности, семантике и адаптивности. Верю, что хороший UI — это баланс между дизайном, логикой и скоростью загрузки.\n\nРаботал над лендингами, SPA и корпоративными порталами. Умею превращать макеты из Figma в чистый, поддерживаемый код, писать переиспользуемые компоненты и настраивать взаимодействие с REST/GraphQL API. Понимаю принципы SSR/SSG, оптимизации Core Web Vitals и доступности (a11y).\n\nВ работе ценю прозрачность, code review и внимание к деталям. Постоянно изучаю новые инструменты и подходы — от Tailwind и Framer Motion до тестирования через Vitest и Playwright. Ищу команду, где смогу расти как инженер и влиять на продукт.', avatarUrl: '/creators/anya.webp', bgColor: '#E7F1FF', colorText: '#087EA4' },
    { name: 'Борис Иванов', slug: 'boris-ivanov', role: 'Backend-разработчик', bio: 'Люблю PostgreSQL и ненавижу ORM-магию.', avatarUrl: '/creators/boris.webp', bgColor: '#EAF0FF', colorText: '#336791' },
    { name: 'Вика Петрова', slug: 'vika-petrova', role: 'UI/UX-дизайнер', bio: 'Рисую то, что потом сложно верстать.', avatarUrl: '/creators/vika.webp', bgColor: '#FDE8F1', colorText: '#A259FF' },
    { name: 'Глеб Кузнецов', slug: 'gleb-kuznetsov', role: 'Fullstack-разработчик', bio: 'Могу всё, но ничего до конца.', avatarUrl: '/creators/gleb.webp', bgColor: '#EAF7E6', colorText: '#3C873A' },
    { name: 'Даша Морозова', slug: 'dasha-morozova', role: 'Game-дизайнер', bio: 'Придумываю механики и ломаю баланс.', avatarUrl: '/creators/dasha.webp', bgColor: '#FCE7F3', colorText: '#E10098' },
    { name: 'Егор Волков', slug: 'egor-volkov', role: 'Тимлид', bio: 'Провожу митапы и пишу код в промежутках.', avatarUrl: '/creators/egor.webp', bgColor: '#F0F0F0', colorText: '#000000' },
    { name: 'Женя Соколова', slug: 'zhenya-sokolova', role: 'Frontend-разработчик', bio: 'CSS-маг, анимации — моя страсть.', avatarUrl: '/creators/zhenya.webp', bgColor: '#E6FFFA', colorText: '#0EA5E9' },
    { name: 'Илья Романов', slug: 'ilya-romanov', role: 'DevOps', bio: 'Docker, k8s, CI/CD. Если упало — звоните.', avatarUrl: '/creators/ilya.webp', bgColor: '#E6F0FA', colorText: '#2496ED' },
    { name: 'Катя Лебедева', slug: 'katya-lebedeva', role: 'Product Manager', bio: 'Собираю требования и разбиваю на задачи.', avatarUrl: '/creators/katya.webp', bgColor: '#FDE8F1', colorText: '#D946EF' },
    { name: 'Лёша Новиков', slug: 'lyosha-novikov', role: 'Backend-разработчик', bio: 'Node.js, GraphQL, микросервисы.', avatarUrl: '/creators/lyosha.webp', bgColor: '#E8F0FE', colorText: '#2D3748' },
    { name: 'Маша Орлова', slug: 'masha-orlova', role: 'QA-инженер', bio: 'Нахожу баги там, где их не должно быть.', avatarUrl: '/creators/masha.webp', bgColor: '#FEF3C7', colorText: '#D97706' },
    { name: 'Никита Зайцев', slug: 'nikita-zaytsev', role: 'Mobile-разработчик', bio: 'React Native и немного нативного.', avatarUrl: '/creators/nikita.webp', bgColor: '#E6F0FA', colorText: '#3178C6' },
    { name: 'Оля Фёдорова', slug: 'olya-fedorova', role: 'UI/UX-дизайнер', bio: 'Люблю минимализм и строгие сетки.', avatarUrl: '/creators/olya.webp', bgColor: '#FDE8F1', colorText: '#A259FF' },
    { name: 'Паша Михайлов', slug: 'pasha-mikhaylov', role: 'Game-разработчик', bio: 'Unity, C#, шейдеры.', avatarUrl: '/creators/pasha.webp', bgColor: '#E6F0FA', colorText: '#2496ED' },
    { name: 'Рита Белова', slug: 'rita-belova', role: 'Frontend-разработчик', bio: 'Next.js, TypeScript, Tailwind.', avatarUrl: '/creators/rita.webp', bgColor: '#E7F1FF', colorText: '#087EA4' },
    { name: 'Серёжа Титов', slug: 'seryozha-titov', role: 'Backend-разработчик', bio: 'Python, FastAPI, чуть-чуть Go.', avatarUrl: '/creators/seryozha.webp', bgColor: '#EAF7E6', colorText: '#3C873A' },
    { name: 'Таня Крылова', slug: 'tanya-krylova', role: 'Аналитик', bio: 'SQL, дашборды, метрики.', avatarUrl: '/creators/tanya.webp', bgColor: '#FEF3C7', colorText: '#D97706' },
    { name: 'Ульяна Громова', slug: 'ulyana-gromova', role: 'SMM-менеджер', bio: 'Веду соцсети студии.', avatarUrl: '/creators/ulyana.webp', bgColor: '#FCE7F3', colorText: '#E10098' },
    { name: 'Федя Соловьёв', slug: 'fedya-solovyov', role: 'Sound-дизайнер', bio: 'Делаю звук для игр и видео.', avatarUrl: '/creators/fedya.webp', bgColor: '#F0F0F0', colorText: '#000000' },
    { name: 'Юля Комарова', slug: 'yulya-komarova', role: 'Frontend-разработчик', bio: 'Верстаю быстро и семантично.', avatarUrl: '/creators/yulya.webp', bgColor: '#E6FFFA', colorText: '#0EA5E9' },
] as const satisfies readonly CreatorSeed[]

export type CreatorSlug = (typeof listCreators)[number]['slug']

export type LinkSeed = {
    creatorSlug: CreatorSlug
    type: LinkType
    url: string
    order: number
}

export const listLinks: LinkSeed[] = [
    { creatorSlug: 'anya-smirnova', type: 'GITHUB', url: 'https://github.com/anya', order: 0 },
    { creatorSlug: 'anya-smirnova', type: 'TELEGRAM', url: 'https://t.me/anya', order: 1 },
    { creatorSlug: 'anya-smirnova', type: 'VK', url: 'https://vk.com/anya', order: 2 },
    { creatorSlug: 'anya-smirnova', type: 'PORTFOLIO', url: 'https://anya.dev', order: 3 },
    { creatorSlug: 'boris-ivanov', type: 'GITHUB', url: 'https://github.com/boris', order: 0 },
    { creatorSlug: 'boris-ivanov', type: 'TELEGRAM', url: 'https://t.me/boris', order: 1 },
    { creatorSlug: 'boris-ivanov', type: 'PORTFOLIO', url: 'https://boris.blog', order: 2 },
    { creatorSlug: 'vika-petrova', type: 'PORTFOLIO', url: 'https://vika.design', order: 0 },
    { creatorSlug: 'vika-petrova', type: 'VK', url: 'https://t.me/vika', order: 1 },
    { creatorSlug: 'gleb-kuznetsov', type: 'GITHUB', url: 'https://github.com/gleb', order: 0 },
    { creatorSlug: 'gleb-kuznetsov', type: 'VK', url: 'https://vk.com/gleb', order: 1 },
    { creatorSlug: 'gleb-kuznetsov', type: 'TELEGRAM', url: 'https://t.me/gleb', order: 2 },
    { creatorSlug: 'dasha-morozova', type: 'TELEGRAM', url: 'https://t.me/dasha', order: 0 },
    { creatorSlug: 'egor-volkov', type: 'GITHUB', url: 'https://github.com/egor', order: 0 },
    { creatorSlug: 'egor-volkov', type: 'TELEGRAM', url: 'https://t.me/egor', order: 1 },
    { creatorSlug: 'egor-volkov', type: 'PORTFOLIO', url: 'https://egor.dev', order: 2 },
    { creatorSlug: 'egor-volkov', type: 'VK', url: 'https://vk.com/egor', order: 3 },
    { creatorSlug: 'zhenya-sokolova', type: 'GITHUB', url: 'https://github.com/zhenya', order: 0 },
    { creatorSlug: 'zhenya-sokolova', type: 'PORTFOLIO', url: 'https://zhenya.dev', order: 1 },
    { creatorSlug: 'ilya-romanov', type: 'GITHUB', url: 'https://github.com/ilya', order: 0 },
    { creatorSlug: 'ilya-romanov', type: 'TELEGRAM', url: 'https://t.me/ilya', order: 1 },
    { creatorSlug: 'ilya-romanov', type: 'VK', url: 'https://vk.com/ilya', order: 2 },
    { creatorSlug: 'katya-lebedeva', type: 'TELEGRAM', url: 'https://t.me/katya', order: 0 },
    { creatorSlug: 'lyosha-novikov', type: 'GITHUB', url: 'https://github.com/lyosha', order: 0 },
    { creatorSlug: 'lyosha-novikov', type: 'VK', url: 'https://vk.com/lyosha', order: 1 },
    { creatorSlug: 'masha-orlova', type: 'TELEGRAM', url: 'https://t.me/masha', order: 0 },
    { creatorSlug: 'masha-orlova', type: 'PORTFOLIO', url: 'https://masha.qa', order: 1 },
    { creatorSlug: 'nikita-zaytsev', type: 'GITHUB', url: 'https://github.com/nikita', order: 0 },
    { creatorSlug: 'nikita-zaytsev', type: 'TELEGRAM', url: 'https://t.me/nikita', order: 1 },
    { creatorSlug: 'nikita-zaytsev', type: 'VK', url: 'https://vk.com/nikita', order: 2 },
    { creatorSlug: 'olya-fedorova', type: 'PORTFOLIO', url: 'https://olya.design', order: 0 },
    { creatorSlug: 'olya-fedorova', type: 'TELEGRAM', url: 'https://t.me/olya', order: 1 },
    { creatorSlug: 'olya-fedorova', type: 'VK', url: 'https://vk.com/olya', order: 2 },
    { creatorSlug: 'pasha-mikhaylov', type: 'GITHUB', url: 'https://github.com/pasha', order: 0 },
    { creatorSlug: 'rita-belova', type: 'GITHUB', url: 'https://github.com/rita', order: 0 },
    { creatorSlug: 'rita-belova', type: 'TELEGRAM', url: 'https://t.me/rita', order: 1 },
    { creatorSlug: 'rita-belova', type: 'PORTFOLIO', url: 'https://rita.codes', order: 2 },
    { creatorSlug: 'seryozha-titov', type: 'GITHUB', url: 'https://github.com/seryozha', order: 0 },
    { creatorSlug: 'seryozha-titov', type: 'TELEGRAM', url: 'https://t.me/seryozha', order: 1 },
    { creatorSlug: 'tanya-krylova', type: 'TELEGRAM', url: 'https://t.me/tanya', order: 0 },
    { creatorSlug: 'tanya-krylova', type: 'PORTFOLIO', url: 'https://tanya.data', order: 1 },
    { creatorSlug: 'ulyana-gromova', type: 'VK', url: 'https://vk.com/ulyana', order: 0 },
    { creatorSlug: 'ulyana-gromova', type: 'TELEGRAM', url: 'https://t.me/ulyana', order: 1 },
    { creatorSlug: 'fedya-solovyov', type: 'VK', url: 'https://vk.com/fedya', order: 0 },
    { creatorSlug: 'fedya-solovyov', type: 'TELEGRAM', url: 'https://t.me/fedya', order: 1 },
    { creatorSlug: 'fedya-solovyov', type: 'PORTFOLIO', url: 'https://fedya.sound', order: 2 },
    { creatorSlug: 'yulya-komarova', type: 'GITHUB', url: 'https://github.com/yulya', order: 0 },
    { creatorSlug: 'yulya-komarova', type: 'TELEGRAM', url: 'https://t.me/yulya', order: 1 },
]

export type UniversitySeed = {
    fullName: string
    shortName: string
    slug: string
    citySlug: CitySlug
}

export const listUniversities = [
    { fullName: 'Национальный исследовательский Нижегородский государственный университет им. Н.И. Лобачевского', shortName: 'ННГУ', slug: 'unn', citySlug: 'nizhny-novgorod' },
    { fullName: 'Нижегородский государственный технический университет им. Р.Е. Алексеева', shortName: 'НГТУ', slug: 'nntu', citySlug: 'nizhny-novgorod' },
    { fullName: 'Приволжский исследовательский медицинский университет', shortName: 'ПИМУ', slug: 'pimunn', citySlug: 'nizhny-novgorod' },
    { fullName: 'Нижегородский государственный архитектурно-строительный университет', shortName: 'ННГАСУ', slug: 'nngasu', citySlug: 'nizhny-novgorod' },
    { fullName: 'Нижегородский государственный лингвистический университет им. Н.А. Добролюбова', shortName: 'НГЛУ', slug: 'nglu', citySlug: 'nizhny-novgorod' },
    { fullName: 'Южно-Уральский государственный университет (национальный исследовательский университет)', shortName: 'ЮУрГУ', slug: 'susu', citySlug: 'chelyabinsk' },
    { fullName: 'Челябинский государственный университет', shortName: 'ЧелГУ', slug: 'csu', citySlug: 'chelyabinsk' },
    { fullName: 'Южно-Уральский государственный медицинский университет', shortName: 'ЮУГМУ', slug: 'susmu', citySlug: 'chelyabinsk' },
    { fullName: 'Южно-Уральский государственный аграрный университет', shortName: 'ЮУрГАУ', slug: 'sursau', citySlug: 'chelyabinsk' },
    { fullName: 'Самарский национальный исследовательский университет имени академика С.П. Королева', shortName: 'Самарский университет', slug: 'ssau', citySlug: 'samara' },
    { fullName: 'Самарский государственный технический университет', shortName: 'СамГТУ', slug: 'samgtu', citySlug: 'samara' },
    { fullName: 'Самарский государственный медицинский университет', shortName: 'СамГМУ', slug: 'samsmu', citySlug: 'samara' },
    { fullName: 'Самарский государственный экономический университет', shortName: 'СГЭУ', slug: 'sseu', citySlug: 'samara' },
    { fullName: 'Омский государственный университет им. Ф.М. Достоевского', shortName: 'ОмГУ', slug: 'omsu', citySlug: 'omsk' },
    { fullName: 'Омский государственный технический университет', shortName: 'ОмГТУ', slug: 'omgtu', citySlug: 'omsk' },
    { fullName: 'Омский государственный медицинский университет', shortName: 'ОмГМУ', slug: 'omgmu', citySlug: 'omsk' },
    { fullName: 'Омский государственный педагогический университет', shortName: 'ОмГПУ', slug: 'omgpu', citySlug: 'omsk' },
    { fullName: 'Сибирский государственный автомобильно-дорожный университет', shortName: 'СибАДИ', slug: 'sibadi', citySlug: 'omsk' },
    { fullName: 'Южный федеральный университет', shortName: 'ЮФУ', slug: 'sfedu', citySlug: 'rostov-on-don' },
    { fullName: 'Донской государственный технический университет', shortName: 'ДГТУ', slug: 'donstu', citySlug: 'rostov-on-don' },
    { fullName: 'Ростовский государственный медицинский университет', shortName: 'РостГМУ', slug: 'rostgmu', citySlug: 'rostov-on-don' },
    { fullName: 'Ростовский государственный экономический университет (РИНХ)', shortName: 'РГЭУ (РИНХ)', slug: 'rsue', citySlug: 'rostov-on-don' },
    { fullName: 'Уфимский государственный нефтяной технический университет', shortName: 'УГНТУ', slug: 'rusoil', citySlug: 'ufa' },
    { fullName: 'Башкирский государственный университет', shortName: 'БашГУ', slug: 'bashedu', citySlug: 'ufa' },
    { fullName: 'Башкирский государственный медицинский университет', shortName: 'БГМУ', slug: 'bsmu', citySlug: 'ufa' },
    { fullName: 'Уфимский государственный авиационный технический университет', shortName: 'УГАТУ', slug: 'ugatu', citySlug: 'ufa' },
    { fullName: 'Башкирский государственный педагогический университет им. М. Акмуллы', shortName: 'БГПУ им. Акмуллы', slug: 'bspu', citySlug: 'ufa' },
    { fullName: 'Сибирский федеральный университет', shortName: 'СФУ', slug: 'sfu-kras', citySlug: 'krasnoyarsk' },
    { fullName: 'Сибирский государственный университет науки и технологий им. М.Ф. Решетнева', shortName: 'СибГУ', slug: 'sibsau', citySlug: 'krasnoyarsk' },
    { fullName: 'Красноярский государственный медицинский университет им. В.Ф. Войно-Ясенецкого', shortName: 'КрасГМУ', slug: 'krasgmu', citySlug: 'krasnoyarsk' },
    { fullName: 'Красноярский государственный педагогический университет им. В.П. Астафьева', shortName: 'КГПУ', slug: 'kspu', citySlug: 'krasnoyarsk' },
    { fullName: 'Воронежский государственный университет', shortName: 'ВГУ', slug: 'vsu', citySlug: 'voronezh' },
    { fullName: 'Воронежский государственный технический университет', shortName: 'ВГТУ', slug: 'vgtu', citySlug: 'voronezh' },
    { fullName: 'Воронежский государственный медицинский университет им. Н.Н. Бурденко', shortName: 'ВГМУ', slug: 'vsmau', citySlug: 'voronezh' },
    { fullName: 'Воронежский государственный аграрный университет им. императора Петра I', shortName: 'ВГАУ', slug: 'vsau', citySlug: 'voronezh' },
    { fullName: 'Пермский государственный национальный исследовательский университет', shortName: 'ПГНИУ', slug: 'psu', citySlug: 'perm' },
    { fullName: 'Пермский национальный исследовательский политехнический университет', shortName: 'ПНИПУ', slug: 'pstu', citySlug: 'perm' },
    { fullName: 'Пермский государственный медицинский университет им. академика Е.А. Вагнера', shortName: 'ПГМУ', slug: 'psmu', citySlug: 'perm' },
    { fullName: 'Пермский государственный гуманитарно-педагогический университет', shortName: 'ПГГПУ', slug: 'pshpu', citySlug: 'perm' },
    { fullName: 'Волгоградский государственный университет', shortName: 'ВолГУ', slug: 'volsu', citySlug: 'volgograd' },
    { fullName: 'Волгоградский государственный технический университет', shortName: 'ВолгГТУ', slug: 'vstu', citySlug: 'volgograd' },
    { fullName: 'Волгоградский государственный медицинский университет', shortName: 'ВолгГМУ', slug: 'volgmed', citySlug: 'volgograd' },
    { fullName: 'Волгоградский государственный социально-педагогический университет', shortName: 'ВГСПУ', slug: 'vspu', citySlug: 'volgograd' },
    { fullName: 'Кубанский государственный университет', shortName: 'КубГУ', slug: 'kubsu', citySlug: 'krasnodar' },
    { fullName: 'Кубанский государственный технологический университет', shortName: 'КубГТУ', slug: 'kubstu', citySlug: 'krasnodar' },
    { fullName: 'Кубанский государственный медицинский университет', shortName: 'КубГМУ', slug: 'ksma', citySlug: 'krasnodar' },
    { fullName: 'Кубанский государственный аграрный университет им. И.Т. Трубилина', shortName: 'КубГАУ', slug: 'kubsau', citySlug: 'krasnodar' },
    { fullName: 'Саратовский национальный исследовательский государственный университет им. Н.Г. Чернышевского', shortName: 'СГУ', slug: 'sgu', citySlug: 'saratov' },
    { fullName: 'Саратовский государственный технический университет им. Гагарина Ю.А.', shortName: 'СГТУ', slug: 'sstu', citySlug: 'saratov' },
    { fullName: 'Саратовский государственный медицинский университет им. В.И. Разумовского', shortName: 'СГМУ', slug: 'sgmu', citySlug: 'saratov' },
    { fullName: 'Саратовская государственная юридическая академия', shortName: 'СГЮА', slug: 'ssla', citySlug: 'saratov' },
    { fullName: 'Тюменский государственный университет', shortName: 'ТюмГУ', slug: 'utmn', citySlug: 'tyumen' },
    { fullName: 'Тюменский индустриальный университет', shortName: 'ТИУ', slug: 'tiu', citySlug: 'tyumen' },
    { fullName: 'Тюменский государственный медицинский университет', shortName: 'ТюмГМУ', slug: 'tyumsmu', citySlug: 'tyumen' },
    { fullName: 'Государственный аграрный университет Северного Зауралья', shortName: 'ГАУ Северного Зауралья', slug: 'gausz', citySlug: 'tyumen' },
    { fullName: 'Тольяттинский государственный университет', shortName: 'ТГУ', slug: 'tltsu', citySlug: 'tolyatti' },
    { fullName: 'Поволжский государственный университет сервиса', shortName: 'ПВГУС', slug: 'volgasu', citySlug: 'tolyatti' },
    { fullName: 'Удмуртский государственный университет', shortName: 'УдГУ', slug: 'udsu', citySlug: 'izhevsk' },
    { fullName: 'Ижевский государственный технический университет им. М.Т. Калашникова', shortName: 'ИжГТУ', slug: 'istu', citySlug: 'izhevsk' },
    { fullName: 'Ижевская государственная медицинская академия', shortName: 'ИГМА', slug: 'igma', citySlug: 'izhevsk' },
    { fullName: 'Ижевская государственная сельскохозяйственная академия', shortName: 'Ижевская ГСХА', slug: 'izhgsha', citySlug: 'izhevsk' },] as const satisfies readonly UniversitySeed[]
export type UniversitySlug = (typeof listUniversities)[number]['slug']

export type CitySeed = {
    name: string
    slug: string
}
export const listCities = [
    { name: 'Москва', slug: 'moscow' },
    { name: 'Санкт-Петербург', slug: 'spb' },
    { name: 'Новосибирск', slug: 'novosibirsk' },
    { name: 'Екатеринбург', slug: 'ekaterinburg' },
    { name: 'Казань', slug: 'kazan' },
    { name: 'Нижний Новгород', slug: 'nizhny-novgorod' },
    { name: 'Челябинск', slug: 'chelyabinsk' },
    { name: 'Самара', slug: 'samara' },
    { name: 'Омск', slug: 'omsk' },
    { name: 'Ростов-на-Дону', slug: 'rostov-on-don' },
    { name: 'Уфа', slug: 'ufa' },
    { name: 'Красноярск', slug: 'krasnoyarsk' },
    { name: 'Воронеж', slug: 'voronezh' },
    { name: 'Пермь', slug: 'perm' },
    { name: 'Волгоград', slug: 'volgograd' },
    { name: 'Краснодар', slug: 'krasnodar' },
    { name: 'Саратов', slug: 'saratov' },
    { name: 'Тюмень', slug: 'tyumen' },
    { name: 'Тольятти', slug: 'tolyatti' },
    { name: 'Ижевск', slug: 'izhevsk' },
] as const satisfies readonly CitySeed[]

export type CitySlug = (typeof listCities)[number]['slug']