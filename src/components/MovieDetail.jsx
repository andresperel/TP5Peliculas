function MovieDetail({ pelicula }) {
  return (
    <div>
      <h2>{pelicula.Title}</h2>

      <img
        src={pelicula.Poster !== "N/A" ? pelicula.Poster : ""}
        width="200"
      />

      <p><strong>Año:</strong> {pelicula.Year}</p>
      <p><strong>Género:</strong> {pelicula.Genre}</p>
      <p><strong>Director:</strong> {pelicula.Director}</p>
      <p><strong>Actores:</strong> {pelicula.Actors}</p>
      <p><strong>Sinopsis:</strong> {pelicula.Plot}</p>
      <p><strong>Duración:</strong> {pelicula.Runtime}</p>
      <p><strong>Idioma:</strong> {pelicula.Language}</p>
      <p><strong>País:</strong> {pelicula.Country}</p>
      <p><strong>Puntaje IMDb:</strong> {pelicula.imdbRating}</p>
    </div>
  );
}

export default MovieDetail;