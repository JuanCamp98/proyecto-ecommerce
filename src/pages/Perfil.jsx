import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Perfil() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h2>No hay usuario logueado</h2>;
  }

  return (
    <>
      <h1>Perfil</h1>

      <p>Nombre: {user.nombre}</p>

      <p>Email: {user.email}</p>
    </>
  );
}

export default Perfil;