export const SliderItem = ({ movies }) => {
    return (
        <>
            {
                movies.map((movie) => (
                    <div className="item text-white">
                        <img className='lg:mt-14' src={movie.image} alt={movie.name} />
                        <article className="content">
                            <p>{movie.name}</p>
                            <p>{movie.year}</p>
                            <p>{movie.genre}</p>
                            <p>{movie.about}</p>
                        </article>
                    </div>
                ))
            }
        </>
    )
}

