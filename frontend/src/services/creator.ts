import { GetCreator } from "@/types/creator";
import { CreatorSlug } from "../../../backend/prisma/constans";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const getCreator = async (slug: CreatorSlug): Promise<GetCreator> => {
    const { data } = await axiosInstance.get(`${ApiRoutes.CREATORS}/${slug}`)

    return data
}