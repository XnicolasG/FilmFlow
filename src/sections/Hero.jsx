import { useState } from "preact/hooks";
import { SliderItem } from "../components/Slider/SliderItem";
import { Thumbnail } from "../components/Slider/Thumbnail";

export const Hero = () => {
    const [currentDirection, setCurrentDirection] = useState('')
    const movies = [
        {
            image: "https://image.tmdb.org/t/p/original/nAxGnGHOsfzufThz20zgmRwKur3.jpg",
            thumbnail:
                "https://image.tmdb.org/t/p/w1280/gL6puhup6PXqrKqItWbGA8LF529.jpg",
            name: "Pecadores",
            year: 2025,
            genre: ["Terror", "acción"],
            about: `Tratando de dejar atrás sus problemáticas vidas, dos hermanos gemelos
        regresan a su pueblo natal para empezar de nuevo, solo para descubrir
        que un mal aún mayor les espera para darles la bienvenida.`,
        },
        {
            image: "https://image.tmdb.org/t/p/original/7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg",
            thumbnail:
                "https://www.themoviedb.org/t/p/w1280/fTpbUIwdsfyIldzYvzQi2K4Icws.jpg",
            name: "Cómo entrenar a tu dragón",
            year: 2025,
            genre: ["Fantasía", "acción"],
            about: `En la escarpada isla de Berk, donde vikingos y dragones han sido enemigos acérrimos durante generaciones, Hipo se desmarca desafiando siglos de tradición cuando entabla amistad con Desdentao, un temido dragón de la Furia Nocturna. Su insólito vínculo revela la verdadera naturaleza de los dragones y desafía los cimientos de la sociedad vikinga.`,
        },
        {
            image: "https://image.tmdb.org/t/p/original/uQ4lG7E7mlyKsGvbASftQ6Hu2IX.jpg",
            thumbnail:
                "https://www.themoviedb.org/t/p/w1280/tNQWO6cNzQYCyvw36mUcAQQyf5F.jpg",
            name: "The Last of Us",
            year: 2023,
            genre: ["Drama"],
            about: `Año 2023, veinte años después del comienzo de una plaga mundial que infectó a población con un hongo mutado transformando a las personas en unas criaturas caníbales, el contrabandista Joel tiene la misión de escoltar a la adolescente Ellie por un mundo postapocalíptico en el nada va a ser fácil para los viajeros. Joel todavía vive atormentado por el recuerdo de su única hija. Ellie es portadora de algo que podría cambiar el destino de la humanidad ¿Conseguirán sobrevivir los dos?`,
        },
    ];
     const [thumbnails, setThumbnails] = useState(movies);

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

