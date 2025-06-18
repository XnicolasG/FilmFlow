export const SliderItem = ({ movies }) => {
    return (
        <>
            {
                movies.map((movie) => (
                    <div 
                    key={movie.id}
                    className="item text-white">
                        <img className='' src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.name} />
                        <article className="content">
                            <p>{movie.title}</p>
                            <p>{movie.release_date}</p>
                            {/* <p>{movie.genre}</p> */}
                            <p>{movie.overview}</p>
                        </article>
                    </div>
                ))
            }
        </>
    )
}

