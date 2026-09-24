import { TechnologyModel } from "../../../backend/src/generated/prisma/models"
import { CreatorSlug } from '../../../backend/prisma/constans'

type Status = 'completed' | 'in_development'

export type GetProject = {
    projectId: string
    status: Status
    title: string
    description: string

    bgColor: string
    imageLogo: string
    link: string

    startOfDevelopment: string
    endOfDevelopment: string | null

    technologies: TechnologyModel[]
    creators: {
        avatarUrl: string,
        name: string,
        slug: CreatorSlug,
        bgColor: string | null,
        colorText: string | null,
        role: string
    }[]
}