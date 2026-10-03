import { useEffect, useState } from 'react'

import { Api } from '@/services/api-client'
import { GetUniversity } from '@/types/university'

type TReturn = {
    listUniversities: GetUniversity[] | undefined,
    loading: boolean,
    error: Error | undefined
}

export function useGetUniversities(value: string): TReturn {
    const [listUniversities, setListUniversities] = useState<GetUniversity[]>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        async function fetchListUniversities() {
            try {
                const data = await Api.universities.getUniversities(value)
                setListUniversities(data)
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchListUniversities()
    }, [value])

    return { listUniversities, loading, error }
}