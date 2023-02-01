import Image from "next/image";
import {
  HomeIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className="sticky bg-[#040714] h-[72px] top-0 z-[1000] flex items-center px-10 md:px-12">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
        alt="Logo"
      />
      {/* Navbar Links */}
      <div className="hidden ml-40 md:flex items-center space-x-6 ">
        <a className="navbar-link group" onClick={() => router.push("/")}>
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </a>
        <a className="navbar-link group" onClick={() => router.push("/Search")}>
          <SearchIcon className="h-4" />
          <span className="span">Search</span>
        </a>
        <a
          className="navbar-link group"
          onClick={() => router.push("/WatchList")}
        >
          <PlusIcon className="h-4" />
          <span className="span">Watchlist</span>
        </a>
        <a className="navbar-link group">
          <StarIcon className="h-4" />
          <span className="span">Originals</span>
        </a>
        <a className="navbar-link group">
          <img src="/images/movie-icon.svg" alt="Movies" className="h-4" />
          <span className="span">Movies</span>
        </a>
        <a className="navbar-link group">
          <img src="/images/series-icon.svg" alt="Series" className="h-4" />
          <span className="span">Series</span>
        </a>
      </div>
      {/* <button
        className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
        onClick={signIn}
      >
        Login
      </button> */}
    </div>
  );
};

export default Navbar;
