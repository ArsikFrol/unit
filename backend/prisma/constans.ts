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
    { fullName: 'Московский государственный университет им. М.В. Ломоносова', shortName: 'МГУ', slug: 'mgu', citySlug: 'moscow' },
    { fullName: 'Национальный исследовательский университет «Высшая школа экономики»', shortName: 'НИУ ВШЭ', slug: 'hse', citySlug: 'moscow' },
    { fullName: 'Московский государственный технический университет им. Н.Э. Баумана', shortName: 'МГТУ им. Баумана', slug: 'bmstu', citySlug: 'moscow' },
    { fullName: 'Российский университет дружбы народов', shortName: 'РУДН', slug: 'rudn', citySlug: 'moscow' },
    { fullName: 'Московский физико-технический институт', shortName: 'МФТИ', slug: 'mipt', citySlug: 'moscow' },
    { fullName: 'Национальный исследовательский ядерный университет «МИФИ»', shortName: 'НИЯУ МИФИ', slug: 'mephi', citySlug: 'moscow' },
    { fullName: 'Первый Московский государственный медицинский университет им. И.М. Сеченова', shortName: 'Сеченовский Университет', slug: 'sechenov', citySlug: 'moscow' },
    { fullName: 'Российская академия народного хозяйства и государственной службы при Президенте РФ', shortName: 'РАНХиГС', slug: 'ranepa', citySlug: 'moscow' },
    { fullName: 'Финансовый университет при Правительстве Российской Федерации', shortName: 'Финансовый университет', slug: 'fa', citySlug: 'moscow' },
    { fullName: 'Московский государственный институт международных отношений', shortName: 'МГИМО', slug: 'mgimo', citySlug: 'moscow' },
    { fullName: 'Российский экономический университет им. Г.В. Плеханова', shortName: 'РЭУ им. Плеханова', slug: 'rea', citySlug: 'moscow' },
    { fullName: 'Московский авиационный институт', shortName: 'МАИ', slug: 'mai', citySlug: 'moscow' },
    { fullName: 'Национальный исследовательский технологический университет «МИСиС»', shortName: 'МИСиС', slug: 'misis', citySlug: 'moscow' },
    { fullName: 'Московский политехнический университет', shortName: 'Московский Политех', slug: 'moscow-polytech', citySlug: 'moscow' },
    { fullName: 'Московский педагогический государственный университет', shortName: 'МПГУ', slug: 'mpgu', citySlug: 'moscow' },
    { fullName: 'Российский национальный исследовательский медицинский университет им. Н.И. Пирогова', shortName: 'РНИМУ им. Пирогова', slug: 'rsmu', citySlug: 'moscow' },
    { fullName: 'Московский государственный юридический университет им. О.Е. Кутафина', shortName: 'МГЮА', slug: 'msal', citySlug: 'moscow' },
    { fullName: 'Российский государственный гуманитарный университет', shortName: 'РГГУ', slug: 'rggu', citySlug: 'moscow' },
    { fullName: 'Московский государственный лингвистический университет', shortName: 'МГЛУ', slug: 'mglu', citySlug: 'moscow' },
    { fullName: 'Российский государственный социальный университет', shortName: 'РГСУ', slug: 'rgsu', citySlug: 'moscow' },
    { fullName: 'Санкт-Петербургский государственный университет', shortName: 'СПбГУ', slug: 'spbgu', citySlug: 'spb' },
    { fullName: 'Санкт-Петербургский политехнический университет Петра Великого', shortName: 'СПбПУ', slug: 'spbpu', citySlug: 'spb' },
    { fullName: 'Национальный исследовательский университет ИТМО', shortName: 'ИТМО', slug: 'itmo', citySlug: 'spb' },
    { fullName: 'Санкт-Петербургский государственный электротехнический университет «ЛЭТИ»', shortName: 'ЛЭТИ', slug: 'etu', citySlug: 'spb' },
    { fullName: 'Российский государственный педагогический университет им. А.И. Герцена', shortName: 'РГПУ им. Герцена', slug: 'herzen', citySlug: 'spb' },
    { fullName: 'Санкт-Петербургский государственный архитектурно-строительный университет', shortName: 'СПбГАСУ', slug: 'spbgasu', citySlug: 'spb' },
    { fullName: 'Санкт-Петербургский государственный университет телекоммуникаций им. М.А. Бонч-Бруевича', shortName: 'СПбГУТ', slug: 'sut', citySlug: 'spb' },
    { fullName: 'Первый Санкт-Петербургский государственный медицинский университет им. И.П. Павлова', shortName: 'ПСПбГМУ', slug: 'pspbGMU', citySlug: 'spb' },
    { fullName: 'Санкт-Петербургский государственный экономический университет', shortName: 'СПбГЭУ', slug: 'spbgeu', citySlug: 'spb' },
    { fullName: 'Российский государственный гидрометеорологический университет', shortName: 'РГГМУ', slug: 'rshu', citySlug: 'spb' },
    { fullName: 'Санкт-Петербургский государственный морской технический университет', shortName: 'СПбГМТУ', slug: 'smtu', citySlug: 'spb' },
    { fullName: 'Санкт-Петербургский государственный институт кино и телевидения', shortName: 'СПбГИКиТ', slug: 'gikit', citySlug: 'spb' },
    { fullName: 'Российский государственный университет им. А.И. Герцена', shortName: 'РГУ им. Герцена', slug: 'rgu-herzen', citySlug: 'spb' },
    { fullName: 'Санкт-Петербургская государственная художественно-промышленная академия им. А.Л. Штиглица', shortName: 'Академия Штиглица', slug: 'stieglitz', citySlug: 'spb' },
    { fullName: 'Санкт-Петербургский государственный лесотехнический университет им. С.М. Кирова', shortName: 'СПбГЛТУ', slug: 'spbgltu', citySlug: 'spb' },
    { fullName: 'Российский государственный аграрный университет — МСХА им. К.А. Тимирязева', shortName: 'РГАУ-МСХА', slug: 'timiryazev', citySlug: 'spb' },
    { fullName: 'Санкт-Петербургский государственный педиатрический медицинский университет', shortName: 'СПбГПМУ', slug: 'spbgpmu', citySlug: 'spb' },
    { fullName: 'Санкт-Петербургский государственный университет промышленных технологий и дизайна', shortName: 'СПбГУПТД', slug: 'sutd', citySlug: 'spb' },
    { fullName: 'Санкт-Петербургский государственный университет гражданской авиации', shortName: 'СПбГУГА', slug: 'spbguga', citySlug: 'spb' },
    { fullName: 'Санкт-Петербургский государственный университет аэрокосмического приборостроения', shortName: 'ГУАП', slug: 'guap', citySlug: 'spb' },
    { fullName: 'Уральский федеральный университет им. Б.Н. Ельцина', shortName: 'УрФУ', slug: 'urfu', citySlug: 'ekaterinburg' },
    { fullName: 'Уральский государственный экономический университет', shortName: 'УрГЭУ', slug: 'usue', citySlug: 'ekaterinburg' },
    { fullName: 'Уральский государственный медицинский университет', shortName: 'УГМУ', slug: 'ugmu', citySlug: 'ekaterinburg' },
    { fullName: 'Уральский государственный педагогический университет', shortName: 'УрГПУ', slug: 'uspu', citySlug: 'ekaterinburg' },
    { fullName: 'Уральский государственный лесотехнический университет', shortName: 'УГЛТУ', slug: 'ugltu', citySlug: 'ekaterinburg' },
    { fullName: 'Уральский государственный университет путей сообщения', shortName: 'УрГУПС', slug: 'urgups', citySlug: 'ekaterinburg' },
    { fullName: 'Уральский государственный архитектурно-художественный университет им. Н.С. Алферова', shortName: 'УрГАХУ', slug: 'urgahu', citySlug: 'ekaterinburg' },
    { fullName: 'Уральский государственный горный университет', shortName: 'УГГУ', slug: 'ursmu', citySlug: 'ekaterinburg' },
    { fullName: 'Уральский государственный аграрный университет', shortName: 'УрГАУ', slug: 'urgau', citySlug: 'ekaterinburg' },
    { fullName: 'Российский государственный профессионально-педагогический университет', shortName: 'РГППУ', slug: 'rsvpu', citySlug: 'ekaterinburg' },
    { fullName: 'Уральский юридический институт МВД России', shortName: 'УрЮИ МВД', slug: 'uryui-mvd', citySlug: 'ekaterinburg' },
    { fullName: 'Уральский институт ГПС МЧС России', shortName: 'УрИ ГПС', slug: 'uri-gps', citySlug: 'ekaterinburg' },
    { fullName: 'Уральский институт управления — филиал РАНХиГС', shortName: 'УИУ РАНХиГС', slug: 'uiu-ranepa', citySlug: 'ekaterinburg' },
    { fullName: 'Екатеринбургская академия современного искусства', shortName: 'ЕАСИ', slug: 'easi', citySlug: 'ekaterinburg' },
    { fullName: 'Уральская государственная консерватория им. М.П. Мусоргского', shortName: 'УГК', slug: 'uralcons', citySlug: 'ekaterinburg' },
    { fullName: 'Уральский технический институт связи и информатики', shortName: 'УрТИСИ', slug: 'urtisi', citySlug: 'ekaterinburg' },
    { fullName: 'Гуманитарный университет', shortName: 'ГУ', slug: 'gu-ekb', citySlug: 'ekaterinburg' },
    { fullName: 'Екатеринбургский государственный театральный институт', shortName: 'ЕГТИ', slug: 'egti', citySlug: 'ekaterinburg' },
    { fullName: 'Уральский филиал Финансового университета', shortName: 'УрФУ при Правительстве РФ', slug: 'fa-ural', citySlug: 'ekaterinburg' },
    { fullName: 'Институт экономики УрО РАН', shortName: 'ИЭ УрО РАН', slug: 'ie-uran', citySlug: 'ekaterinburg' },
    { fullName: 'Казанский (Приволжский) федеральный университет', shortName: 'КФУ', slug: 'kpfu', citySlug: 'kazan' },
    { fullName: 'Казанский национальный исследовательский технический университет им. А.Н. Туполева', shortName: 'КНИТУ-КАИ', slug: 'kai', citySlug: 'kazan' },
    { fullName: 'Казанский национальный исследовательский технологический университет', shortName: 'КНИТУ', slug: 'knrtu', citySlug: 'kazan' },
    { fullName: 'Казанский государственный энергетический университет', shortName: 'КГЭУ', slug: 'kgeu', citySlug: 'kazan' },
    { fullName: 'Казанский государственный медицинский университет', shortName: 'КГМУ', slug: 'kgmu', citySlug: 'kazan' },
    { fullName: 'Казанский государственный аграрный университет', shortName: 'КГАУ', slug: 'kazgau', citySlug: 'kazan' },
    { fullName: 'Казанский инновационный университет им. В.Г. Тимирясова', shortName: 'КИУ', slug: 'kiu', citySlug: 'kazan' },
    { fullName: 'Казанский государственный архитектурно-строительный университет', shortName: 'КГАСУ', slug: 'kgasu', citySlug: 'kazan' },
    { fullName: 'Казанский государственный институт культуры', shortName: 'КазГИК', slug: 'kazgik', citySlug: 'kazan' },
    { fullName: 'Казанская государственная консерватория им. Н.Г. Жиганова', shortName: 'КГК', slug: 'kazancons', citySlug: 'kazan' },
    { fullName: 'Казанский филиал Российского государственного университета правосудия', shortName: 'КФ РГУП', slug: 'kf-rgup', citySlug: 'kazan' },
    { fullName: 'Казанский кооперативный институт', shortName: 'ККИ РУК', slug: 'kki-ruk', citySlug: 'kazan' },
    { fullName: 'Казанский институт финансов, экономики и информатики', shortName: 'КИФЭИ', slug: 'kifei', citySlug: 'kazan' },
    { fullName: 'Казанский филиал РАНХиГС', shortName: 'КФ РАНХиГС', slug: 'kf-ranepa', citySlug: 'kazan' },
    { fullName: 'Казанская православная духовная семинария', shortName: 'КазПДС', slug: 'kazpds', citySlug: 'kazan' },
    { fullName: 'Казанский филиал Московского финансово-промышленного университета «Синергия»', shortName: 'Синергия Казань', slug: 'synergy-kazan', citySlug: 'kazan' },
    { fullName: 'Казанский филиал Российского университета кооперации', shortName: 'КФ РУК', slug: 'kf-ruk', citySlug: 'kazan' },
    { fullName: 'Казанский филиал Университета «Синергия»', shortName: 'Синергия', slug: 'synergy-kzn', citySlug: 'kazan' },
    { fullName: 'Казанский государственный цирковое училище', shortName: 'КГЦУ', slug: 'kazcircus', citySlug: 'kazan' },
    { fullName: 'Казанский медицинский колледж', shortName: 'КМК', slug: 'kazmedcollege', citySlug: 'kazan' },
    { fullName: 'Новосибирский государственный университет', shortName: 'НГУ', slug: 'nsu', citySlug: 'novosibirsk' },
    { fullName: 'Новосибирский государственный технический университет', shortName: 'НГТУ', slug: 'nstu', citySlug: 'novosibirsk' },
    { fullName: 'Сибирский государственный университет телекоммуникаций и информатики', shortName: 'СибГУТИ', slug: 'sibsutis', citySlug: 'novosibirsk' },
    { fullName: 'Новосибирский государственный медицинский университет', shortName: 'НГМУ', slug: 'ngmu', citySlug: 'novosibirsk' },
    { fullName: 'Новосибирский государственный педагогический университет', shortName: 'НГПУ', slug: 'nspu', citySlug: 'novosibirsk' },
    { fullName: 'Сибирский государственный университет путей сообщения', shortName: 'СГУПС', slug: 'sgups', citySlug: 'novosibirsk' },
    { fullName: 'Новосибирский государственный архитектурно-строительный университет', shortName: 'НГАСУ', slug: 'ngasu', citySlug: 'novosibirsk' },
    { fullName: 'Новосибирский государственный аграрный университет', shortName: 'НГАУ', slug: 'nsau', citySlug: 'novosibirsk' },
    { fullName: 'Новосибирский государственный университет экономики и управления', shortName: 'НГУЭУ', slug: 'nsuem', citySlug: 'novosibirsk' },
    { fullName: 'Сибирский институт управления — филиал РАНХиГС', shortName: 'СИУ РАНХиГС', slug: 'siu-ranepa', citySlug: 'novosibirsk' },
    { fullName: 'Новосибирский юридический институт', shortName: 'НЮИ', slug: 'nui', citySlug: 'novosibirsk' },
    { fullName: 'Новосибирская государственная консерватория им. М.И. Глинки', shortName: 'НГК', slug: 'ngk', citySlug: 'novosibirsk' },
    { fullName: 'Новосибирский государственный театральный институт', shortName: 'НГТИ', slug: 'ngti', citySlug: 'novosibirsk' },
    { fullName: 'Новосибирский институт повышения квалификации и переподготовки работников образования', shortName: 'НИПКиПРО', slug: 'nipkipro', citySlug: 'novosibirsk' },
    { fullName: 'Новосибирский филиал Финансового университета', shortName: 'НФ ФинУниверситет', slug: 'fa-nsk', citySlug: 'novosibirsk' },
    { fullName: 'Новосибирский филиал Российского экономического университета им. Г.В. Плеханова', shortName: 'НФ РЭУ', slug: 'rea-nsk', citySlug: 'novosibirsk' },
    { fullName: 'Новосибирский филиал Российского государственного гуманитарного университета', shortName: 'НФ РГГУ', slug: 'rggu-nsk', citySlug: 'novosibirsk' },
    { fullName: 'Новосибирский филиал Московского педагогического государственного университета', shortName: 'НФ МПГУ', slug: 'mpgu-nsk', citySlug: 'novosibirsk' },
    { fullName: 'Новосибирский филиал Российского университета дружбы народов', shortName: 'НФ РУДН', slug: 'rudn-nsk', citySlug: 'novosibirsk' },
    { fullName: 'Новосибирский филиал Университета «Синергия»', shortName: 'Синергия Нск', slug: 'synergy-nsk', citySlug: 'novosibirsk' },
] as const satisfies readonly UniversitySeed[]

export type CitySeed = {
    name: string
    slug: string
}

export const listCities = [
    { name: 'Москва', slug: 'moscow' },
    { name: 'Санкт-Петербург', slug: 'spb' },
    { name: 'Екатеринбург', slug: 'ekaterinburg' },
    { name: 'Казань', slug: 'kazan' },
    { name: 'Новосибирск', slug: 'novosibirsk' },
] as const satisfies readonly CitySeed[]

export type CitySlug = (typeof listCities)[number]['slug']