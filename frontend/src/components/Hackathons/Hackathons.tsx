import { StaticImageData } from "next/image";

import Title from "../UI/Title";
import Elem from "./Elem";

import unitHack from '../../../public/unit_hack.svg'
import unitSpi from '../../../public/unit_spi.svg'

export type Hack = {
    id: number,
    imageTitle: StaticImageData | string,
    desc: string,
    link: string
}

const listHack: Hack[] = [
    {
        id: 1, imageTitle: unitHack, desc: 'Каждый год ЮНИТ проводит ЮНИТ.ХАК — межвузовский хакатон для всех студентов Екатеринбурга. Кейсодержатели: Контур, Targem Games, Naumen и другие ИТ- компании России.', link: 'unit-ekb.ru/unithack26'
    },
    { id: 2, imageTitle: unitSpi, desc: 'Внутренний хакатон для участников объединения. Является рубежом обучающего полугодия для тех, кто только вступил в ЮНИТ. 48 часов разработки сайта, приложения или игры.', link: '' }
]

export default function Hackathons() {
    return (
        <div className="mb-[100px]" id='hack'>
            <Title title="Хакатоны" />
            <div className='flex flex-col gap-y-[20px]'>
                {
                    listHack.map((obj, index) => <Elem key={index} obj={obj} />)
                }
            </div>
        </div>
    )
}