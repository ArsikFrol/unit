'use client'

import { useRef, useState } from "react"

import Title from "../UI/Title"
import Elem from "./Elem"
import { cn } from "@/lib/utils"
import ProjectModal from "./Modal/ProjectModal"
import { useGetProjects } from "@/hooks/useGetProjects"
import { ProjectModel } from "../../../../backend/src/generated/prisma/models"

type Props = {
    idShowBigElem: string,
    setIdShowBigElem: (value: string) => void
}


export const listProjects: ProjectModel[] = [
    { projectId: '1', status:'COMPLETED', imageLogo: '/projects/mazeMall.webp', title: 'Maze Mall', desc: 'Приключенческий шутер-рогалик, в котором вам предстоит найти выход из захваченного демоном лабиринта торгового центра.', link: 'https://vkplay.ru/play/game/maze_market', bgColor: '#665974', startOfDevelopment: new Date('2023-03-15'), endOfDevelopment: null, createdAt: new Date('2023-03-15'), updatedAt: new Date('2023-03-15') },
    { projectId: '2', status: 'IN_DEVELOPMENT', imageLogo: '/projects/profcom.webp', title: 'Сайт профкома УрГЭУ', desc: 'Многостраничная платформа для профсоюзной организации студентов УрГЭУ. Личный кабинет, оплата взносов и информационные разделы.', link: 'https://профкомургэу.рф', bgColor: '#596674', startOfDevelopment: new Date('2022-09-01'), endOfDevelopment: new Date('2023-06-30'), createdAt: new Date('2022-09-01'), updatedAt: new Date('2023-06-30') },
    { projectId: '3', status:'COMPLETED', imageLogo: '/projects/catnBall.webp', title: 'CatnBall', desc: 'Платформер, где вы управляете котом, наклоняя телефон. Освойте ритм прыжков и используйте клубок, чтобы достичь цели!', link: 'https://rustore.ru/catalog/app/com.Amazengs.Catnball', bgColor: '#4e6788', startOfDevelopment: new Date('2024-01-10'), endOfDevelopment: null, createdAt: new Date('2024-01-10'), updatedAt: new Date('2024-01-10') },
    { projectId: '4', status:'COMPLETED', imageLogo: '/projects/mazeMall.webp', title: 'Inside Out Me', desc: 'Визуальная новелла с необычным сюжетом: в антиутопичном будущем ученая Дешка работает над собственным проектом в стенах зловещей корпорации.', link: 'https://t.me/insideoutmeoff', bgColor: '#745959', startOfDevelopment: new Date('2024-06-01'), endOfDevelopment: null, createdAt: new Date('2024-06-01'), updatedAt: new Date('2024-06-01') },
    { projectId: '5', status: 'IN_DEVELOPMENT', imageLogo: '/projects/mazeMall.webp', title: 'UNIT Landing', desc: 'Одностраничный сайт студии с анимациями и адаптивной вёрсткой.', link: 'https://unit-studio.ru', bgColor: '#4a5d6b', startOfDevelopment: new Date('2023-01-20'), endOfDevelopment: new Date('2023-04-15'), createdAt: new Date('2023-01-20'), updatedAt: new Date('2023-04-15') },
    { projectId: '6', status:'COMPLETED', imageLogo: '/projects/catnBall.webp', title: 'Cyber Runner', desc: 'Бесконечный раннер в киберпанк-сеттинге с процедурной генерацией уровней.', link: 'https://store.steampowered.com/app/cyber_runner', bgColor: '#3d4a5c', startOfDevelopment: new Date('2024-09-05'), endOfDevelopment: null, createdAt: new Date('2024-09-05'), updatedAt: new Date('2024-09-05') },
    { projectId: '7', status: 'IN_DEVELOPMENT', imageLogo: '/projects/profcom.webp', title: 'TaskFlow', desc: 'Веб-приложение для управления задачами с канбан-досками и командной работой.', link: 'https://taskflow.app', bgColor: '#5c6b4a', startOfDevelopment: new Date('2022-11-10'), endOfDevelopment: new Date('2023-08-20'), createdAt: new Date('2022-11-10'), updatedAt: new Date('2023-08-20') },
    { projectId: '8', status:'COMPLETED', imageLogo: '/projects/catnBall.webp', title: 'Pixel Dungeon', desc: 'Классический рогалик с пиксельной графикой и глубокой системой крафта.', link: 'https://pixeldungeon.game', bgColor: '#6b4a5c', startOfDevelopment: new Date('2023-07-01'), endOfDevelopment: null, createdAt: new Date('2023-07-01'), updatedAt: new Date('2023-07-01') },
    { projectId: '9', status: 'IN_DEVELOPMENT', imageLogo: '/projects/profcom.webp', title: 'EcoTracker', desc: 'Мобильное приложение для отслеживания углеродного следа и эко-привычек.', link: 'https://ecotracker.app', bgColor: '#4a6b5c', startOfDevelopment: new Date('2023-02-14'), endOfDevelopment: new Date('2023-12-01'), createdAt: new Date('2023-02-14'), updatedAt: new Date('2023-12-01') },
    { projectId: '10', status:'COMPLETED', imageLogo: '/projects/catnBall.webp', title: 'Space Trader', desc: 'Экономическая стратегия о торговле между звёздными системами.', link: 'https://spacetrader.io', bgColor: '#3d3d5c', startOfDevelopment: new Date('2025-01-15'), endOfDevelopment: null, createdAt: new Date('2025-01-15'), updatedAt: new Date('2025-01-15') },
    { projectId: '11', status: 'IN_DEVELOPMENT', imageLogo: '/projects/profcom.webp', title: 'RecipeBox', desc: 'Приложение для хранения рецептов с умным поиском по ингредиентам.', link: 'https://recipebox.app', bgColor: '#6b5c4a', startOfDevelopment: new Date('2022-05-20'), endOfDevelopment: new Date('2022-11-30'), createdAt: new Date('2022-05-20'), updatedAt: new Date('2022-11-30') },
    { projectId: '12', status:'COMPLETED', imageLogo: '/projects/catnBall.webp', title: 'FitBuddy', desc: 'Трекер тренировок с персонализированными планами и статистикой прогресса.', link: 'https://fitbuddy.app', bgColor: '#4a5c6b', startOfDevelopment: new Date('2024-03-10'), endOfDevelopment: null, createdAt: new Date('2024-03-10'), updatedAt: new Date('2024-03-10') },
    { projectId: '13', status: 'IN_DEVELOPMENT', imageLogo: '/projects/profcom.webp', title: 'MindMap Pro', desc: 'Инструмент для создания ментальных карт с совместной работой в реальном времени.', link: 'https://mindmap.pro', bgColor: '#5c4a6b', startOfDevelopment: new Date('2023-04-05'), endOfDevelopment: new Date('2024-01-20'), createdAt: new Date('2023-04-05'), updatedAt: new Date('2024-01-20') },
    { projectId: '14', status:'COMPLETED', imageLogo: '/projects/mazeMall.webp', title: 'GhostNotes', desc: 'Анонимный мессенджер с самоуничтожающимися сообщениями.', link: 'https://ghostnotes.app', bgColor: '#4a4a4a', startOfDevelopment: new Date('2024-10-01'), endOfDevelopment: null, createdAt: new Date('2024-10-01'), updatedAt: new Date('2024-10-01') },
    { projectId: '15', status: 'IN_DEVELOPMENT', imageLogo: '/projects/profcom.webp', title: 'CryptoWallet', desc: 'Безопасный кошелёк для хранения и обмена криптовалют с поддержкой 20+ сетей.', link: 'https://cryptowallet.io', bgColor: '#5c6b5c', startOfDevelopment: new Date('2022-07-15'), endOfDevelopment: new Date('2023-03-10'), createdAt: new Date('2022-07-15'), updatedAt: new Date('2023-03-10') },
    { projectId: '16', status:'COMPLETED', imageLogo: '/projects/mazeMall.webp', title: 'AI Artist', desc: 'Генератор изображений на основе текстовых описаний с использованием нейросетей.', link: 'https://aiartist.app', bgColor: '#6b4a4a', startOfDevelopment: new Date('2025-02-01'), endOfDevelopment: null, createdAt: new Date('2025-02-01'), updatedAt: new Date('2025-02-01') },
    { projectId: '17', status: 'IN_DEVELOPMENT', imageLogo: '/projects/catnBall.webp', title: 'StudyHub', desc: 'Платформа для онлайн-обучения с видеоуроками, тестами и системой прогресса.', link: 'https://studyhub.ru', bgColor: '#4a5c4a', startOfDevelopment: new Date('2023-06-01'), endOfDevelopment: new Date('2024-02-28'), createdAt: new Date('2023-06-01'), updatedAt: new Date('2024-02-28') },
    { projectId: '18', status:'COMPLETED', imageLogo: '/projects/mazeMall.webp', title: 'MusicLab', desc: 'Веб-студия для создания музыки с виртуальными инструментами и секвенсором.', link: 'https://musiclab.app', bgColor: '#5c4a5c', startOfDevelopment: new Date('2024-08-15'), endOfDevelopment: null, createdAt: new Date('2024-08-15'), updatedAt: new Date('2024-08-15') },
    { projectId: '19', status: 'IN_DEVELOPMENT', imageLogo: '/projects/catnBall.webp', title: 'PlantCare', desc: 'Приложение для ухода за комнатными растениями с напоминаниями и определением по фото.', link: 'https://plantcare.app', bgColor: '#4a6b4a', startOfDevelopment: new Date('2023-09-10'), endOfDevelopment: new Date('2024-05-01'), createdAt: new Date('2023-09-10'), updatedAt: new Date('2024-05-01') },
    { projectId: '20', status:'COMPLETED', imageLogo: '/projects/catnBall.webp', title: 'CityBuilder', desc: 'Градостроительный симулятор с реалистичной экономикой и экологией.', link: 'https://citybuilder.game', bgColor: '#6b5c5c', startOfDevelopment: new Date('2025-04-01'), endOfDevelopment: null, createdAt: new Date('2025-04-01'), updatedAt: new Date('2025-04-01') },
]

export default function OurProjects(props: Props) {
    const [showAllElem, setShowAllElem] = useState<boolean>(false)
    const firstElemRef = useRef<HTMLDivElement>(null)

    /* const { listProjects } = useGetProjects() */

    const handleToggle = () => {
        setShowAllElem(!showAllElem)

        if (showAllElem) requestAnimationFrame(() => {
            firstElemRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        })
    }

    return (
        <div className="mb-[100px]" id='projects'>
            <Title title="Наши проекты" />
            <div className='grid grid-cols-2 gap-x-[20px] gap-y-[20px]'>
                {
                    listProjects.map((obj, index) => {
                        const hidden = !showAllElem && index >= 4
                        return (
                            <div key={index} className={cn(
                                'transition-all duration-500 ease-out',
                                hidden
                                    ? 'opacity-0 scale-95 max-h-0 overflow-hidden pointer-events-none absolute'
                                    : 'opacity-100 scale-100 max-h-[370px]'
                            )} ref={index === 0 ? firstElemRef : undefined}>
                                <Elem obj={obj} setIdShowBigElem={props.setIdShowBigElem} />
                            </div>
                        )
                    })
                }
            </div>
            <div className={cn(
                'bg-white/70 h-[50px] text-[25px] w-[450px] flex items-center justify-center mx-auto mt-[50px] rounded-2xl',
                'hover:scale-101 hover:bg-white transition-all duration-300 cursor-pointer'
            )} onClick={handleToggle}>
                {showAllElem
                    ? 'Скрыть некоторые проекты'
                    : 'Показать больше проектов'
                }
            </div>
            {props.idShowBigElem
                ? <ProjectModal obj={listProjects.find(obj => obj.projectId === props.idShowBigElem)!}
                    setIdShowBigElem={props.setIdShowBigElem} />
                : undefined
            }
        </div>
    )
}