import { loadGenreMap } from "../utils/genreHelper";
import { FetchFromTMBD } from "./api/FetchFromTMBD";


export const staticMediaItems = async () => {
  const allItems = [];

  const trendingTypes = ['movie', 'tv'];
  for (const type of trendingTypes) {
    const items = await FetchFromTMBD(`/trending/${type}/day`);
    allItems.push(...items);
  }

 
  for (const type of trendingTypes) {
    const genreMap = await loadGenreMap(type);             
    const genreIds = Object.keys(genreMap);                

    for (const genreId of genreIds) {
      const items = await FetchFromTMBD(`/discover/${type}`, {
        with_genres: genreId,
        sort_by: 'popularity.desc',
        language: 'en-US'
      });

      allItems.push(...items);
    }
  }

  const map = new Map();
  allItems.forEach(item => {
    const key = `${item.media_type}-${item.id}`;
    if (!map.has(key)) map.set(key, item);
  });

  return Array.from(map.values());
};
