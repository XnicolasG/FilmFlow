import { useRef, useState } from "preact/hooks"
import { Arrow } from "../../../public/icons/Arrow"

export const MovieCards = ({ genreIds }) => {
    const sliderRef = useRef(null);
    const scrollAmount = 885;
    const scrollLeft = () => {
        if (sliderRef.current) sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    };

    const scrollRight = () => {
        if (sliderRef.current) sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        console.log('rigth');

    };
    if (genreIds?.length === 0) return null
    console.log(genreIds);


    return (
        <section className='relative text-slate-100 overflow-hidden '>
            <button
                onClick={scrollLeft}
                className='absolute group top-1/2 left-0 z-10'>
                <Arrow style='group-hover:text-black' />
            </button>
            <ul
                ref={sliderRef}
                className='genreCard_Slider flex gap-x-5 p-1 overflow-x-auto overflow-y-hidden scroll-smooth'>
                {

                    genreIds.slice(0, 20).map((item) => {
                        return (

                            <li
                                key={item.id}
                                className='relative group w-42 h-56' 
                            >
                                    <figure className=' w-42 h-full overflow-hidden rounded outline-2 outline-transparent hover:outline-2 hover:outline-amber-50 transition-all duration-200'>
                                        <img className='w-full h-full hover:scale-110 transition-all duration-200' 
                                        src={`https://image.tmdb.org/t/p/w1280/${item.poster_path}`} alt={item.title || item.name} />
                                    </figure>
                                    <article className='p-2 w-full h-full absolute top-0 group-hover:outline-2 group-hover:outline-amber-50 bg-gray-950/60 backdrop-blur-xs translate-y-full  flex items-center justify-center  group-hover:translate-y-0 transition-all duration-400 rounded '>
                                        <p className='text-slate-50'>{item.title || item.name}</p>
                                    </article>
                            </li>
                        )
                    })
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
