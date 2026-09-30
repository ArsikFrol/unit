import { TechSlug } from "../../../backend/prisma/constans"

export type Technology = {
    technologyId: string,
    bgColor: string | null,
    colorText: string | null,
    iconUrl: string | null,
    name: string,
    slug: TechSlug
}