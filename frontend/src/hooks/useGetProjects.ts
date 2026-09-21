import { useEffect, useState } from 'react'

import { Api } from '@/services/api-client'
import { GetProject } from '@/types/project'

type TReturn = {
    listProjects: GetProject[] | undefined,
    loading: boolean,
    error: Error | undefined
}

export function useGetProjects(): TReturn {
    const [listProjects, setListProjects] = useState<GetProject[]>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        async function fetchListProjects() {
            try {
                const data = await Api.projects.getProjects()
                setListProjects(data)
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchListProjects()
    }, [])

    return { listProjects, loading, error }
}