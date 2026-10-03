import { CitySlug } from "../../../backend/prisma/constans"

export type GetCity = {
    cityId: string,
    name: string,
    slug: CitySlug,
    countUniversity: number
}