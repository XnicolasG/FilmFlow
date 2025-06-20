import { useRef } from 'preact/hooks';
import { useMovies } from '../../Hooks/useMovies';
import { Arrow } from '../../../public/icons/Arrow';

export const DailyCards = () => {
    const { movies, loading, error } = useMovies({ path: 'trending/movie/day', params: { sort_by: "popularity.desc" } })
    const sliderRef = useRef(null);
    const scrollAmount = 310; // ajustable según tamaño de las cards

    const scrollLeft = () => {
        if (sliderRef.current) sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    };

    const scrollRight = () => {
        if (sliderRef.current) sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        console.log('right');

    };


    return (
        <section className="relative w-full bg-transparent ">
            <button onClick={scrollLeft} className="left-0 absolute top-1/2 -translate-y-1/2 z-10">
                <Arrow />
            </button>

            <ul
                ref={sliderRef}
                className="dailyCards bg-transparent py-18 px-6 ">
                {
                    movies.slice(0, 10).map((movie, i) => {
                        let color;
                        i === 0
                            ? color = 'gold'
                            : i === 1
                                ? color = 'silver'
                                : i === 2
                                    ? color = 'bronce'
                                    : color = ''
                        return (
                            <li className="relative dailyCards__item  shrink-0 w-44 h-72">
                                <figure
                                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.poster_path})` }}
                                    className={`dailyCards__figure ${color} w-full h-full overflow-hidden rounded-lg group-hover:-z-10`}
                                >
                                    <img className="relative" src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={movie.title} />
                                </figure>
                                <p className={`dailyCards__number ${color} `}>{(i += 1)}</p>
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={scrollRight} className="right-0 bg-red-500  absolute top-1/2 -translate-y-1/2 z-10">
                <Arrow style='hover:text-black rotate-180'/>
            </button>
        </section>

    )
}


