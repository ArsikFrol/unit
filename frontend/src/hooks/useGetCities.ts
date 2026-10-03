import { useEffect, useState } from 'react'

import { Api } from '@/services/api-client'
import { GetCity } from '@/types/city'

type TReturn = {
    listCities: GetCity[] | undefined,
    loading: boolean,
    error: Error | undefined
}

export function useGetCities(value: string): TReturn {
    const [listCities, setListCities] = useState<GetCity[]>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        async function fetchCities() {
            try {
                const data = await Api.cities.getCities(value)
                setListCities(data)
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchCities()
    }, [value])

    return { listCities, loading, error }
}