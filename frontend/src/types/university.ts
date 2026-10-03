import { UniversitySlug } from "../../../backend/prisma/constans"

export type GetUniversity = {
    universityId: string,

    fullName: string
    shortName: string
    slug: UniversitySlug

    cityId: string
}