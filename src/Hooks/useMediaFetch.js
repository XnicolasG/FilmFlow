import { useEffect, useState } from 'preact/hooks'
import { FetchFromTMBD } from '../lib/api/FetchFromTMBD'

export const useMediaFetch = ({ path, params = {} }) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const getData = async () => {
            try {
                const results = await FetchFromTMBD(path, params)
                setLoading(false)
                setMovies(results)
            } catch (error) {
                console.log(error);
                setError(error.message || 'Something went wrong loading the data')
                setLoading(false)
            }
        }
        getData()
    }, [path, JSON.stringify(params)])
    return { movies, loading, error }
}
