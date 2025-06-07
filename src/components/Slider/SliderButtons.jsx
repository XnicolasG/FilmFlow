import { Arrow } from "../../../public/icons/Arrow"

export const SliderButtons = ({ onNext, onPrev }) => {
    return (

        <section className="arrows">
            <button onClick={onPrev} className="arrows__prev group"> <Arrow style="group-hover:text-black/80 " /> </button>
            <button onClick={onNext} className="arrows__next group"> <Arrow style="group-hover:text-black/80 rotate-180" /> </button>
        </section>
    )
}

