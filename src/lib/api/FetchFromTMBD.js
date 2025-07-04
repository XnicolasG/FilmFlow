import { apiClient } from "../apiClient"

export const FetchFromTMBD = async (path, params = {}) => {
    try {
        const { data } = await apiClient.get(path, { params });
        return data.results || []
    } catch (error) {
        console.error('error at FetchFromTMBD :', error);
    }
}