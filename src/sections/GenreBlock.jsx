// import { useEffect} from "preact/hooks";
import { MovieCards } from "../components/GenreBlock/GenreCard"
import { useGenreMixed } from "../Hooks/useGenreMixed"

export const GenreBlock = ({ genreName, genreIds }) => {
    const { items, loading, error } = useGenreMixed({ genreName, genreIds, limit: 21 })


    return (
        <section className="px-10 mb-8">
            <h2 className="text-xl text-slate-100">{genreName}</h2>
            <MovieCards genreIds={items} />
        </section>
    );
}



