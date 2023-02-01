import MovieThumbnail from "./MovieThumbnail";
function MoviesCollection({ results, title }) {
  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
        {results.map((res) => (
          <MovieThumbnail key={res.id} res={res} />
        ))}
      </div>
    </div>
  );
}

export default MoviesCollection;
