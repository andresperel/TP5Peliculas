import { useState } from "react";

function Buscador({ onBuscar }) {
  const [texto, setTexto] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (texto.trim() !== "") {
      onBuscar(texto);
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Escribí una película..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default Buscador;