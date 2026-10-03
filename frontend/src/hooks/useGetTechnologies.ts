import { useEffect, useState } from 'react'

import { Api } from '@/services/api-client'
import { Technology } from '@/types/technology'

type TReturn = {
    listTechnologies: Technology[] | undefined,
    loading: boolean,
    error: Error | undefined
}

export function useGetTechnologies(value: string): TReturn {
    const [listTechnologies, setListTechnologies] = useState<Technology[]>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        async function fetchListTechnologies() {
            try {
                const data = await Api.technologies.getTechnologies(value)
                setListTechnologies(data)
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchListTechnologies()
    }, [value])

    return { listTechnologies, loading, error }
}