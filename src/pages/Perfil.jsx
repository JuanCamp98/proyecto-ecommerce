import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext";

function Perfil() {
  const { user, logout } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  if (!user) {
    return <h2>No hay usuario logueado</h2>;
  }

  return (
    <>
      <h1>Perfil</h1>

      <p>Nombre: {user.nombre}</p>

      <p>Email: {user.email}</p>

      <p>Productos en carrito: {cart.length}</p>

      <button onClick={logout}>
        Cerrar sesión
      </button>
    </>
  );
}

export default Perfil;