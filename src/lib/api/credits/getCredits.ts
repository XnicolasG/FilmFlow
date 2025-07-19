import { apiClient } from "../../apiClient"

export const getCredits = async (type: "movie" | "tv", id: string ) => {
    const response = await apiClient.get(`/${type}/${id}/credits`)
    return response.data
}