import { useEffect, useState } from "preact/hooks"
import { loadGenreMap, mapGenres } from "../../utils/genreHelper"

export const SliderItem = ({ movies }) => {
    useEffect(() => {
        const getGenre = async () => await loadGenreMap()
        getGenre()
    }, [movies])
    return (
        <>
            {
                movies.map((movie) => {
                    const genres = mapGenres(movie.genre_ids)
                    return (
                        <section
                            key={movie.id}
                            className="item text-white">
                            <img className=''
                                src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                                alt={movie.title} />
                                <span className="item__cover absolute top-1 w-full h-full bg-black/50"/>
                            <article className="content">
                                <p>{movie.title}</p>
                                <p>{movie.release_date}</p>
                                <div className='flex gap-x-2'>
                                    {
                                        genres.map((genre, i) => (
                                            <span
                                                key={i}
                                                className='content_genre'>{genre}
                                            </span>
                                        ))
                                    }
                                </div>
                                <p>{movie.overview}</p>
                            </article>
                        </section>
                    )
                }

                )
            }
        </>
    )
}

