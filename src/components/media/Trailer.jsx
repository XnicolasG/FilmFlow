import { useEffect, useState } from "preact/hooks";
import { getVideos } from "../../lib/api/video/getVideo";

export const Trailer = ({ type, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState(null);

  useEffect(() => {
    async function fetchTrailer() {
      try {
        const videos = await getVideos(type, id);
        const trailer = videos.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        setKey(trailer?.key ?? null);
      } catch (error) {
        console.error("Error fetching trailer:", error);
        setKey(null);
      }
    }

    fetchTrailer();
  }, [type, id]);

  
  if (!key) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className=" text-blue-500"
      >
        Trailer
      </button>

      {isOpen && key && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-black rounded-lg overflow-hidden w-[90vw] max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${key}?autoplay=1`}
              allowFullScreen
              title="Trailer"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};