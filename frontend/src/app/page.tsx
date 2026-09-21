'use client'

import About from "@/components/About";
import Container from "@/components/Container";
import Hackathons from "@/components/Hackathons/Hackathons";
import Header from "@/components/Header";
import OurProjects from "@/components/OurProjects/OurProjects";
import Preview from "@/components/Preview";
import WhatDoing from "@/components/WhatDoing/WhatDoing";
import { useState } from "react";

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
                <Hackathons />
            </Container>
        </>
    )
}
