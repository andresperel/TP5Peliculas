import "./App.css";
import { useState, useEffect } from "react";
import Buscador from "./components/SearchBar";
import ListaPeliculas from "./components/MovieList";
import Cargando from "./components/Loader";
import MensajeError from "./components/ErrorMessage";
import { buscarPeliculas } from "./services/api";

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");
  const [buscado, setBuscado] = useState(false);
  const [query, setQuery] = useState("");

  const buscar = (texto) => {
    setQuery(texto);
    setBuscado(true);
  };

  useEffect(() => {
    if (!query) return;

    const traerPeliculas = async () => {
      setCargando(true);
      setError("");

      try {
        const data = await buscarPeliculas(query);

        if (data.Response === "False") {
          setPeliculas([]);
        } else {
          setPeliculas(data.Search || []);
        }
      } catch {
        setError("Ocurrió un error al buscar");
      }

      setCargando(false);
    };

    traerPeliculas();
  }, [query]);

  const seleccionar = () => {};

  return (
    <div>
      <h1>Buscador de Películas</h1>

      <Buscador onBuscar={buscar} />

      {cargando && <Cargando />}
      {error && <MensajeError mensaje={error} />}

      {!cargando && buscado && peliculas.length === 0 && (
        <p>No se encontraron resultados</p>
      )}

      {!cargando && peliculas.length > 0 && (
        <ListaPeliculas
          peliculas={peliculas}
          alSeleccionar={seleccionar}
        />
      )}
    </div>
  );
}

export default App;