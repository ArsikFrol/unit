import { GetUniversity } from "@/types/university";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const getUniversities = async (value: string): Promise<GetUniversity[]> => {
    const { data } = await axiosInstance.get(`${ApiRoutes.UNIVERSITIES}?value=${value}`)

    return data
}