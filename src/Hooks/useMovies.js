import { useEffect, useState } from 'preact/hooks'

export const useMovies = ({ path, params = {} }) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const key = import.meta.env.PUBLIC_APIKEY;
        const query = new URLSearchParams({ api_key: key, ...params })

        const getData = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/${path}?${query}`)
                const data = await res.json()
                setLoading(false)
                setMovies(data.results || [])
            } catch (error) {
                console.log(error);
                setError(error.message || 'Something went wrong loading the data')
                setLoading(false)
            }
        }
        getData()
    }, [path, JSON.stringify(params)])
    return {movies, loading, error}
}
