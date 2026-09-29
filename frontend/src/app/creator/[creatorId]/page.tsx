'use client'

import { MoveLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { Profile } from "@/components/Profile/Profile";
import Container from "@/components/UI/Container";
import { useTypedRouter } from "@/hooks/useTypedRouter";
import useModalProject from "@/store/modalProject/modalStore";

export default function page() {
    const router = useTypedRouter()
    const searchParams = useSearchParams()

    const { showIdModal, setShowIdModal } = useModalProject()

    const projectId = searchParams.get('projectId')

    const clickBack = () => {
        router.back()
        if (projectId) setShowIdModal(projectId)
    }

    return (
        <div className="relative">
            <div className='absolute  left-[10px] group bg-bg rounded-2xl py-[10px] px-[20px] cursor-pointer w-fit'
                onClick={clickBack}>
                <MoveLeft color="white" size={40} strokeWidth={1}
                    className="group-hover:scale-101 group-hover:translate-x-[-5px] transition-all duration-300" />
            </div>
            <Container>
                <Profile />
            </Container>
        </div>
    )
}