import { useEffect, useState } from 'react'

import { Api } from '@/services/api-client'
import { GetCreator } from '@/types/creator'
import { CreatorSlug } from '../../../backend/prisma/constans'

type TReturn = {
    creator: GetCreator | undefined,
    loading: boolean,
    error: Error | undefined
}

export function useGetCreator(slug: CreatorSlug): TReturn {
    const [creator, setCreator] = useState<GetCreator>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        async function fetchcreator() {
            try {
                const data = await Api.creators.getCreator(slug)
                setCreator(data)
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchcreator()
    }, [])

    return { creator, loading, error }
}