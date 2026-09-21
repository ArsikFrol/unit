'use client'

import { StaticImageData } from "next/image";
import { useState } from "react";

import hacaton from '../../../public/hacaton.webp'
import projects from '../../../public/projects.webp'
import study from '../../../public/study.webp'
import time from '../../../public/time.webp'
import { WhatDoingCarousel } from "../UI/WhatDoingCarousel";
import Title from "../UI/Title";
import ActiveElem from "./ActiveElem";

export type ElemCarousel = {
    id: number,
    title: string,
    desc: string,
    image: StaticImageData,
    altImage: string
}

const listElem: ElemCarousel[] = [
    { id: 1, altImage: 'Стартапы', desc: ' Наши участники создают проекты и стартапы в ИТ-сфере. Среди них: сервис для нетворкинга, игра-ежедневник, рогалик, игра-новелла и другие. Мы контролируем процесс разработки и помогаем довести проект до релиза.', image: projects, title: 'Создаем ИТ-проекты или стартапы' },
    { id: 2, altImage: 'Хакатоны', desc: ' ЮНИТ проводит межвузовский ИТ-хакатон для студентов Екатеринбурга, который в 2025 году собрал 250 участников и стал региональным. А также мы организуем внутренний хакатон ЮНИТ СПИ — рубеж для новых участников.', image: hacaton, title: 'Проводим хакатоны' },
    { id: 3, altImage: 'Знания', desc: ' Мы — открытая площадка для обмена опытом и знаниями. Наши ребята и ведущие специалисты ИТ-компаний читают лекции про кодинг, дизайн, музыку и другие сферы ИТ. Эти встречи открыты как для членов ЮНИТ, так и всех желающих.', image: study, title: 'Делимся знаниями' },
    { id: 4, altImage: 'Время', desc: ' Ходим на экскурсии в топовые ИТ-компании Екатеринбурга, играем в настолки и не только. В ЮНИТ ты получишь не только практические знания, но и общение с такими же крутыми ребятами, как ты.', image: time, title: 'Приятно проводим время' }
]

export default function WhatDoing() {

    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <div className="mb-[100px]">
            <Title title="Что мы делаем" />
            <ActiveElem selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} cols={listElem.length} />
            <WhatDoingCarousel listObj={listElem} setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex} />
        </div>
    )
}