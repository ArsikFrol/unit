import { GetCity } from "@/types/city";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const getCities = async (value: string): Promise<GetCity[]> => {
    const { data } = await axiosInstance.get(`${ApiRoutes.CITIES}?value=${value}`)

    return data
}