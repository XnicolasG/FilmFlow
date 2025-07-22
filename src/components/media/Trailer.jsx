import { useEffect } from "preact/hooks";
import { getVideos } from "../../lib/api/video/getVideo";


export const Trailer =  ({type, id}) => {
    useEffect(async()=>{

        const videos = await getVideos(type, id);
        const trailer = videos.filter((video) => video.type === 'Trailer')
        console.log(trailer); 
    },[])
    
    return (
        <div>Trailer</div>
    )
}
