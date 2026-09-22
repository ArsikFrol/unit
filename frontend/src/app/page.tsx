'use client'

import { useState } from "react"

import About from "@/components/About/About"
import Hackathons from "@/components/Hackathons/Hackathons"
import Header from "@/components/Header"
import OurProjects from "@/components/OurProjects/OurProjects"
import Preview from "@/components/Preview"
import Container from "@/components/UI/Container"
import WhatDoing from "@/components/WhatDoing/WhatDoing"
import { HowGetInto } from "@/components/HowGetInto/HowGetInto"

export default function Home() {
    const [idShowBigElem, setIdShowBigElem] = useState<string>('')

    return (
        <>
            <Header idShowBigElem={idShowBigElem} />
            <Preview />
            <Container>
                <About />
                <WhatDoing />
                <OurProjects idShowBigElem={idShowBigElem} setIdShowBigElem={setIdShowBigElem} />
                <Hackathons />{/*  */}
                <HowGetInto />
            </Container>
        </>
    )
}
