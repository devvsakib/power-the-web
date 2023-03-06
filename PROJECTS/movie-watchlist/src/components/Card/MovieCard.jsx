import { useState, useEffect } from "react"
import axios from "axios"

const MovieCard = ({ drama, idx, addDrama }) => {
    const [singleDrama, setSingleDrama] = useState('')
    const [synopsis, setSynopsis] = useState('')
    const [showCast, setShowCast] = useState(true)
    useEffect(() => {
        const api = `https://mydramalist-scrape-api.vercel.app/id/${drama.slug}`
        axios.get(api)
            .then(data => {
                setSingleDrama(data.data.data);
                setSynopsis(data.data.data.synopsis);
            })
    }, [drama])

    return (
                singleDrama?.title ? (
                    <div key={idx} className="card flex-col  shadow-lg card-side  p-0 overflow-hidden bg-base-100" >
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <img className='w-full md:h-[300px]' src={singleDrama.poster} alt="Movie" />
                            <div className="card-body justify-between py-2 text-left pl-5 md:pl-3 pr-2">
                                <div>
                                    <h2 className="card-title mb-2">{singleDrama?.title}</h2>
                                    <p className="text-sm">{synopsis.length > 50 ? synopsis.slice(0, 70) + "..." : "No Synopsis"}</p>
                                    <p><b className="text-sm">Type: </b>{singleDrama.details?.type}</p>
                                    <p><b className="text-sm">Country: </b>{singleDrama.details?.country}</p>
                                    <p><b className="text-sm">Rating: </b>{singleDrama.rating}</p>
                                    <p><b className="text-sm">Episodes: </b>{singleDrama.details?.episodes}</p>
                                    <p><b className="text-sm">Ranked: </b>{singleDrama.details?.ranked}</p>
                                    <p className="break-words"><b className="text-sm">Genere: </b>
                                        {
                                            singleDrama.others?.genres ?
                                                singleDrama.others?.genres.map((genre, id) => (
                                                    <span>{genre}{singleDrama.others?.genres.length - 1 !== id ? ", " : ""}</span>
                                                )) : "No genre found"
                                        }
                                    </p>
                                </div>
                                <div className="card-actions justify-start">

                                </div>
                            </div>
                        </div>
                        <div className="text-left p-3">
                            <div className="flex gap-5">
                                {/* SHOW */}
                                <button className="my-2 btn-primary px-4 rounded-md uppercase font-semibold"
                                    onClick={() => setShowCast(!showCast)}>Show Cast</button>
                                {/* Watch */}
                                <button className="my-2 btn-primary px-4 rounded-md uppercase font-semibold">
                                    <a href={singleDrama?.link} target="_blank">Watch</a>
                                </button>
                                {/* Add */}
                                <button onClick={addDrama} className="my-2 btn-primary px-4 rounded-md uppercase font-semibold">Add</button>
                            </div>
                            <div className={`${showCast ? "hidden" : ""} flex gap-5 justify-start flex-col`}>
                                {
                                    singleDrama?.casts?.map(cast => (
                                        <div className="avatar flex items-center gap-3">
                                            <div className="w-12 rounded-full">
                                                <img src={cast.profile_image} />
                                            </div>
                                            <h2><a href={cast.link} target="_blank">{cast.name}</a></h2>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div >
                ) : undefined
    )
}

export default MovieCard