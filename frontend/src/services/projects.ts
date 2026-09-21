import { GetProject } from '@/types/project'
import { ApiRoutes } from './constants'
import { axiosInstance } from './instance'

export const getProjects = async (): Promise<GetProject[]> => {
    const { data } = await axiosInstance.get<GetProject[]>(ApiRoutes.PROJECTS)

    return data
}