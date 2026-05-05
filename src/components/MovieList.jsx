import MovieCard from "./MovieCard";

function MovieList({ peliculas, alSeleccionar }) {
  return (
    <div>
      {peliculas.map((peli) => (
        <MovieCard
          key={peli.imdbID}
          pelicula={peli}
          alSeleccionar={alSeleccionar}
        />
      ))}
    </div>
  );
}

export default MovieList;