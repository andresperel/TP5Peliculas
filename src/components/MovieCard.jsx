function MovieCard({ pelicula, alSeleccionar }) {
  return (
    <div
      onClick={() => alSeleccionar(pelicula.imdbID)}
      style={{ cursor: "pointer", margin: "10px" }}
    >
      <img
        src={
          pelicula.Poster !== "N/A"
            ? pelicula.Poster
            : "https://via.placeholder.com/150"
        }
        alt={pelicula.Title}
        width="120"
      />

      <h3>{pelicula.Title}</h3>
      <p>{pelicula.Year}</p>
      <p>{pelicula.Type}</p>
    </div>
  );
}

export default MovieCard;