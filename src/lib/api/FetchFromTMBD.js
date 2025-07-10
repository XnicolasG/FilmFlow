import { apiClient } from "../apiClient"

export const FetchFromTMBD = async (path, params = {}) => {
    try {
        const { data } = await apiClient.get(path, { params });
        const source = path.includes('trending')
            ? 'trending'
            : path.includes('discover')
                ? 'discover'
                : path.includes('search')
                    ? 'search'
                    : 'unknown';

        const type = path.includes('/tv')
            ? 'tv'
            : path.includes('/movie')
                ? 'movie'
                : path.includes('/person')
                    ? 'person'
                    : 'all';
        
        const results = Array.isArray(data.results) ? data.results : []

        return results.map((item) => ({
            ...item,
            media_type: item.media_type || type,
            source
        }))
    } catch (error) {
        console.error('error at FetchFromTMBD :', error);
    }
}