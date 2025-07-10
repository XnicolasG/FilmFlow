import { SliderButtons } from "./SliderButtons"

export const Thumbnail = ({ movies, onNext, onPrev }) => {
    console.log(movies);
    
    return (
        <section className="thumbnail">
            <SliderButtons onNext={onNext} onPrev={onPrev} />
            {
                movies.map((movie) => (
                    <a href={`/media/${movie.source}/${movie.media_type}/${movie.id}`} className={`thumbnail__item`}>
                        <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={movie.title} />                    
                    </a>
                ))
            }
        </section>
    )
}


