import { apiClient } from "../../apiClient";

export async function getVideos(type: "movie" | "tv", id: number) {
  const res = await apiClient.get(`/${type}/${id}/videos`);
  return res.data.results;
}