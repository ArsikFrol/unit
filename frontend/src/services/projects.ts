import { GetProject } from '@/types/project'
import { ApiRoutes } from './constants'
import { axiosInstance } from './instance'
import { CreatorSlug } from '../../../backend/prisma/constans'

export const getProjects = async (): Promise<GetProject[]> => {
    const { data } = await axiosInstance.get<GetProject[]>(ApiRoutes.PROJECTS)

    return data
}

export const searchProjects = async (value: string): Promise<GetProject[]> => {
    const { data } = await axiosInstance.get<GetProject[]>(`${ApiRoutes.PROJECTS}/search?value=${value}`)

    return data
}

export const getProjectsForProfile = async (slug: CreatorSlug): Promise<GetProject[]> => {
    const { data } = await axiosInstance.get(`${ApiRoutes.PROJECTS}/${slug}`)

    return data
}