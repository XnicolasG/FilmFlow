import { SliderButtons } from "./SliderButtons"

export const Thumbnail = ({ movies, onNext, onPrev }) => {
    return (
        <section className="thumbnail">
            <SliderButtons onNext={onNext} onPrev={onPrev} />
            {
                movies.map((movie) => (
                    <div className={`thumbnail__item`}>
                        <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={movie.title} />                    
                    </div>
                ))
            }
        </section>
    )
}


