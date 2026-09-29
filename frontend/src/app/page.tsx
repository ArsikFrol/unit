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

export default function Home() {
    const { setShowIdModal, showIdModal } = useModalProject()

    return (
        <>
            <Header showIdModal={showIdModal} />
            <Preview />
            <Container>
                <About />
                <WhatDoing />
                <OurProjects showIdModal={showIdModal} setShowIdModal={setShowIdModal} />
                <Hackathons />
                <HowGetInto />
                <Contacts />
            </Container>
        </>
    )
}
