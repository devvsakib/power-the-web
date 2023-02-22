import { PlusIcon, XIcon } from "@heroicons/react/solid";
import { GlobalContext } from "../../context/GlobalState";
import Head from "next/head";
import Image from "next/image";
import { useState, useContext } from "react";
import ReactPlayer from "react-player";
import Navbar from "../../components/Navbar";
function Movie({ result }) {
  const { addToWatchlist } = useContext(GlobalContext);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [Player, setPlayer] = useState(false);
  const index = result.videos.results.findIndex(
    (element) => element.type === "Trailer"
  );
  return (
    <div>
      <Head>
        <title>{result.title || result.original_name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section>
        <div className="relative min-h-[calc(100vh-72px)]">
          <Image
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
              `${BASE_URL}${result.poster_path}`
            }
            layout="fill"
            objectFit="cover"
            alt="Poster"
          />
        </div>
        <div className="absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50">
          <h1 className="text-3xl sm:text-4xl font-body font-bold md:text-5xl">
            {result.title || result.original_name}
          </h1>
          <div className="flex items-end space-x-3 md:space-x-5">
            <button className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
              <img src="/images/play-icon-black.svg" className="h-6 md:h-8" />
              <span className="uppercase font-medium tracking-wide">Play</span>
            </button>
            <button
              className="text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
              onClick={() => {
                setPlayer(true);
              }}
            >
              <img src="/images/play-icon-white.svg" className="h-6 md:h-8" />
              <span className="uppercase font-medium tracking-wide">
                Trailer
              </span>
            </button>
            <div className="rounded-full border-2 border-white flex items-center justify-center cursor-pointer w-11 h-11 bg-black/60">
              <PlusIcon
                className="h-6"
                onClick={() => addToWatchlist(result)}
              />
            </div>
            <div className="rounded-full border-2 border-white flex items-center justify-center cursor-pointer w-11 h-11 bg-black/60">
              <img src="/images/group-icon.svg" alt="" />
            </div>
          </div>
          <div>
            {result.release_date || result.first_air_date} •{" "}
            {Math.floor(result.runtime / 60)}h {result.runtime % 60}m •{" "}
            {result.genres.map((genre) => genre.name + " ")} •{" "}
          </div>
          <h4 className="text-sm md:text-lg max-w-4xl">{result.overview}</h4>
        </div>
        {/* bg overlay */}
        {Player && (
          <>
            {" "}
            <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50"></div>
            <div className="absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 opacity-100 z-50">
              <div className="flex items-center justify-between bg-black text-white p-3.5 pt-14">
                <p className="font-semibold">Play Trailer</p>
                <div
                  className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
                  onClick={() => setPlayer(false)}
                >
                  <XIcon className="h-5" />
                </div>
              </div>
              <div className="relative pt-[50%]">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: "0", left: "0" }}
                  controls={true}
                  playing={Player}
                />
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
export default Movie;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
  ).then((response) => response.json());
  return {
    props: {
      result: request,
    },
  };
}
