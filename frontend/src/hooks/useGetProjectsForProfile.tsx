import { useEffect, useState } from 'react'

import { Api } from '@/services/api-client'
import { GetProject } from '@/types/project'
import { CreatorSlug } from '../../../backend/prisma/constans'

type TReturn = {
    listProjects: GetProject[] | undefined,
    loading: boolean,
    error: Error | undefined
}

export function useGetProjectsForProfile(slug: CreatorSlug): TReturn {
    const [listProjects, setListProjects] = useState<GetProject[]>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        async function fetchListProjects() {
            try {
                const data = await Api.projects.getProjectsForProfile(slug)
                setListProjects(data)
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchListProjects()
    }, [slug])

    return { listProjects, loading, error }
}