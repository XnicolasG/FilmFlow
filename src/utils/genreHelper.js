let genreMap = {};
export const loadGenreMap = async (type = 'movie', language = 'en-US') => {
    const apiKey = import.meta.env.PUBLIC_APIKEY;
    const res = await fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${apiKey}&language=${language}`);
    const data = await res.json()
    data.genres.forEach((g) => (genreMap[g.id] = g.name));
    return genreMap;
}

export const mapGenres = genreIds => genreIds.map((id) => genreMap[id]).filter(Boolean)

