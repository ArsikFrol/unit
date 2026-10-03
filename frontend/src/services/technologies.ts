
import { axiosInstance } from "./instance"
import { ApiRoutes } from "./constants"
import { Technology } from "@/types/technology"

export const getTechnologies = async (value: string): Promise<Technology[]> => {
    const { data } = await axiosInstance.get<Technology[]>(`${ApiRoutes.TECHNOLOGIES}?value=${value}`)

    return data
}