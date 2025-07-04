import { apiClient } from "../lib/apiClient";

let genreMap = {};
export const loadGenreMap = async (type = 'movie', language = 'en-US') => {
    const { data } = await apiClient.get(`genre/${type}/list`, {
        params: { language }
    })

    data.genres.forEach((g) => (genreMap[g.id] = g.name));
    return genreMap;
}

export const mapGenres = genreIds => genreIds.map((id) => genreMap?.[id]).filter(Boolean)

