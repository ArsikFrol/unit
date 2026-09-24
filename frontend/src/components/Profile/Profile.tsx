'use client'

import { usePathname } from "next/navigation";
import { ClipLoader } from "react-spinners";

import { useGetCreator } from "@/hooks/useGetCreator";
import { Logo } from "./Logo";
import { CreatorSlug } from "../../../../backend/prisma/constans";
import { Projects } from "./Projects";

export function Profile() {
    const pathName = usePathname()
    const creatorId = pathName.split('/')[2] as CreatorSlug

    const { creator, error, loading } = useGetCreator(creatorId)

    if (loading) return <ClipLoader />
    if (!creator) return

    return (
        <div className="flex justify-between">
            <Logo creator={creator} />
            <Projects creatorSlug={creator.slug} creatorName={creator.name} />
        </div>
    )
}