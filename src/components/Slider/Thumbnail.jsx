import { SliderButtons } from "./SliderButtons"

export const Thumbnail = ({ movies, onNext, onPrev }) => {
    return (
        <section className="thumbnail">
            <SliderButtons onNext={onNext} onPrev={onPrev} />
            {
                movies.map((movie) => (
                    <div className={`thumbnail__item`}>
                        <img src={movie.thumbnail} alt={movie.name} />                    
                    </div>
                ))
            }
        </section>
    )
}


