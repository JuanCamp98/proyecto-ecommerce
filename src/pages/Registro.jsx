import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const { registro } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    registro(nombre, email);

    alert("Usuario registrado");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registro</h1>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">
        Registrarse
      </button>
    </form>
  );
}

export default Registro;