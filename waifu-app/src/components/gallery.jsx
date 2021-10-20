import WaifuApi from "../lib/WaifuApi";
import { useType } from "../contexts/gallery.type";
import { useEffect, useState } from "react";
import WaifuRating from "./waifu-bookmark";
import { useParams } from "react-router-dom";


const waifuApi = new WaifuApi();

export default function Gallery() {
    const params = useParams();

    const type = useType();
    const [waifus, setWaifus] = useState([]);
    console.log('gallery page: ', type.type);

    const handleOnClick = e => {
        scrollToTop();
        if (params.type === "nsfw" || (params.type === "nsfw" && type.type === "sfw"))
            (async () => setWaifus(await waifuApi.getThirtyRandom("nsfw", "waifu")))();
        else if (type.type === "sfw" && (params.type !== "nsfw" && params.type !== "bookmarked"))
            (async () => setWaifus(await waifuApi.getThirtyRandom("sfw", "waifu")))();
    }
    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

    useEffect(()=>{
        if (params.type === "nsfw" || (params.type === "nsfw" && type.type === "sfw"))
            (async () => setWaifus(await waifuApi.getThirtyRandom("nsfw", "waifu")))();
        else if (type.type === "sfw" && (params.type !== "nsfw" && params.type !== "bookmarked"))
            (async () => setWaifus(await waifuApi.getThirtyRandom("sfw", "waifu")))();
        else if (params.type === "bookmarked")
            setWaifus(JSON.parse(localStorage.getItem('bookmarked')) || []);
    }, [type.type]);
    
    return params.type !== "bookmarked" ? (
        <div className="flex flex-col gap-44 justify-center">
            {
                waifus && waifus.map(waifu => {
                    return (
                        <div key={waifu}>
                            <div className="flex flex-col justify-center gap-11">
                                <img className="object-contain h-screen rounded-lg" alt={waifu} src={waifu} />
                                <WaifuRating waifuUrl={waifu} />
                            </div>
                        </div>
                    )
                })
            }
            <button className="bg-transparent w-9/12 self-center hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded mb-60" onClick={handleOnClick}>NEXT</button>
        </div>
    ) :
    (
        <div className="flex flex-wrap gap-44 justify-center mb-60">
            {
                waifus && waifus.map(waifu => {
                    return (
                        <div key={waifu}>
                            <div className="flex flex-col justify-center gap-11">
                                <a href={waifu} target="_blank"><img className="object-contain rounded-lg h-80" alt={waifu} src={waifu} /></a>
                                <WaifuRating waifuUrl={waifu} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}