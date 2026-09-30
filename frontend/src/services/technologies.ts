import { Technologie } from "@/types/technology"
import { axiosInstance } from "./instance"
import { ApiRoutes } from "./constants"

export const getTechnologies = async (): Promise<Technologie[]> => {
    const { data } = await axiosInstance.get<Technologie[]>(ApiRoutes.TECHNOLOGIE)

    return data
}