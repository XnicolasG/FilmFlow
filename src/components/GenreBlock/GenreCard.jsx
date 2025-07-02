import { useRef, useState } from "preact/hooks"
import { Arrow } from "../../../public/icons/Arrow"
import { useMovies } from "../../Hooks/useMovies"

export const MovieCards = ({ genre, genreIds }) => {
    const sliderRef = useRef(null);
    const scrollAmount = 885;

    const scrollLeft = () => {
        if (sliderRef.current) sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    };

    const scrollRight = () => {
        if (sliderRef.current) sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        console.log('rigth');
        
    };

    let data = [];

    const { movies: moviesData } = useMovies({
        path: `discover/movie`,
        params: { with_genres: genreIds.movie, sort_by: 'popularity.desc' }
    })
    const { movies: tvData } = useMovies({
        path: `discover/tv`,
        params: { with_genres: genreIds.tv, sort_by: 'popularity.desc' }
    })


    if (genreIds.movie) data.push(...moviesData.map((movie) => ({ ...movie, media_type: 'movie' })))
    if (genreIds.tv) data.push(...tvData.map((tv) => ({ ...tv, media_type: 'tv' })))

    
        
    const sorted = data.sort((a, b) => b.popularity - a.popularity)


    return (
        <section className='relative text-slate-100 overflow-hidden '>
            <button
                onClick={scrollLeft}
                className='absolute group top-1/2 left-0 z-10'>
                <Arrow style='group-hover:text-black'/>
            </button>
            <ul
                ref={sliderRef}
                className='genreCard_Slider flex gap-x-5 p-1 overflow-x-auto scroll-smooth'>
                {
                    sorted.slice(0, 20).map((item) => (

                        <li
                            key={item.id}
                            className=''
                        >
                            <figure className='w-42 overflow-hidden rounded outline-2 outline-transparent hover:outline-2 hover:outline-amber-50 transition-all duration-200'>
                                <img className='w-full hover:scale-110 transition-all duration-200' src={`https://image.tmdb.org/t/p/w1280/${item.poster_path}`} alt={``} />
                            </figure>
                        </li>
                    ))
                }
            </ul>
            <button
                onClick={scrollRight}
                className='absolute group top-1/2 right-0'>
                <Arrow style='group-hover:text-black rotate-180' />
            </button>
        </section>
    )
}
