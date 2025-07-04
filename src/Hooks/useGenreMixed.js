import { useEffect, useMemo, useState } from "preact/hooks"


export const useGenreMixed = ({ genreName, genreIds, limit = 20, sortKey = 'popularity.desc' }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const stableGenreIds = useMemo(() => genreIds, [genreIds]);

    useEffect(() => {
        const fetchingData = async () => {
            try {

                const apiKey = import.meta.env.PUBLIC_APIKEY;
                const results = [];

                if (genreIds.movie) {
                    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${stableGenreIds.movie}&sort_by=${sortKey}&language=en-US`)
                    const data = await res.json()
                    // console.error(data);
                    if (data.results.length !== 0) {

                        const movies = data.results.map((item) => ({
                            ...item,
                            genreName: genreName,
                            media_type: 'movie'
                        }))
                        results.push(...movies)
                    }
                }
                if (genreIds.tv) {
                    const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${stableGenreIds.tv}&sort_by=${sortKey}&language=en-US`)
                    const data = await res.json()
                    if (data.results.length !== 0) {
                        const shows = data.results.map((item) => ({
                            ...item,
                            media_type: 'tv'
                        }))
                        results.push(...shows)
                    }
                    // else if (results.length === 0) {
                    //     console.warn(`❌ No se encontraron resultados para ${genreName}, ${results}`);
                    // }
                }
                const sorted = results
                    .filter((item => item.poster_path))
                    .sort((a, b) => b.popularity - a.popularity)
                    .slice(0, limit)
                setItems(sorted.filter((item) => item.lenght !== 0))
                setLoading(false)
            } catch (error) {
                console.error('error at useGenreMixed', error);
                setError("wasn't able to bring data with this genre")
            } finally {
                setLoading(false)
            }
        }
        fetchingData()
    }, [JSON.stringify(genreIds), limit, sortKey])
    return { items, loading, error }
}
