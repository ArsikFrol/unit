import { CreatorSlug } from "../../../backend/prisma/constans"

type LinkType = "GITHUB" | "TELEGRAM" | "VK" | "PORTFOLIO"

export type GetCreator = {
    creatorId: string,
    avatarUrl: string,
    bgColor: string,
    bio: string,
    colorText: string,
    name: string,
    role: string,
    slug: CreatorSlug,
    links: {
        creatorSlug: CreatorSlug
        type: LinkType
        url: string
        order: number
    }[]
}