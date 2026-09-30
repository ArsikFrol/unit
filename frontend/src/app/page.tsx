'use client'

import About from "@/components/About/About"
import Hackathons from "@/components/Hackathons/Hackathons"
import Header from "@/components/Headers/Header"
import OurProjects from "@/components/OurProjects/OurProjects"
import Preview from "@/components/Preview"
import Container from "@/components/UI/Container"
import WhatDoing from "@/components/WhatDoing/WhatDoing"
import { HowGetInto } from "@/components/HowGetInto/HowGetInto"
import useModalProject from "@/store/modalProject/modalStore"
import { Contacts } from "@/components/Contacts"
import { cn } from "@/lib/utils"
import { useTypedRouter } from "@/hooks/useTypedRouter"

export default function Home() {
    const { setShowIdModal, showIdModal } = useModalProject()

        const router = useTypedRouter()

    const clickSeeMore = () => {
        router.push('/projects')
    }

    return (
        <>
            <Header showIdModal={showIdModal} />
            <Preview />
            <Container>
                <About />
                <WhatDoing />
                {/* <OurProjects showIdModal={showIdModal} setShowIdModal={setShowIdModal} /> */}
                <div className={cn(
                                'bg-white/70 h-[50px] text-[25px] w-[450px] flex items-center justify-center mx-auto mt-[50px] rounded-2xl',
                                'hover:scale-101 hover:bg-white transition-all duration-300 cursor-pointer'
                            )} onClick={clickSeeMore}>
                                Увидеть больше проектов
                            </div>
                <Hackathons />
                <HowGetInto />
                <Contacts />
            </Container>
        </>
    )
}
