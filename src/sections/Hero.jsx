import { useEffect, useState } from "preact/hooks";
import { SliderItem } from "../components/Slider/SliderItem";
import { Thumbnail } from "../components/Slider/Thumbnail";
import { useMovies } from "../Hooks/useMovies";
export const Hero = () => {
    const [currentDirection, setCurrentDirection] = useState('')
    const [thumbnails, setThumbnails] = useState([])
    const { movies, loading, error } = useMovies({ path: 'trending/all/week', params: { sort_by: "popularity.desc" } })
    useEffect(() => {
        if (movies.length) {
            setThumbnails(movies.slice(0, 5));
        }
    }, [movies]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDirection("next");
            setThumbnails(prev => {
                const newOrder = [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
                return newOrder;
            });
            resetDirection();
        }, 8000);

        return () => clearInterval(interval);
    }, [thumbnails]);

    const handleNext = () => {
        setCurrentDirection("next");
        setThumbnails(prev => {
            const newOrder = [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
            return newOrder;
        });
        resetDirection();
    };

    const handlePrev = () => {
        setCurrentDirection("prev");
        setThumbnails(prev => {
            const newOrder = [...prev.slice(1), prev[0]];
            return newOrder;
        });
        resetDirection();
    };

    const resetDirection = () => {
        setTimeout(() => setCurrentDirection(''), 2000);
    };
    return (
        <main id='carousel' className={`carousel ${currentDirection}`} data-index="0" >
            <section class="list">
                <SliderItem movies={thumbnails} />
                <Thumbnail movies={thumbnails} onNext={handleNext} onPrev={handlePrev} />
                <div class="time"></div>
            </section>
        </main >
    )
}

