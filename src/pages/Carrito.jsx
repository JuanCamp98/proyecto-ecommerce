import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function Carrito() {
  const { cart, eliminarProducto, vaciarCarrito, } = useContext(CartContext);

  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <>
      <h1>Carrito</h1>

        <button onClick={vaciarCarrito}>
            Vaciar carrito
        </button>

      <p>Productos en carrito: {cart.length}</p>
      <h2>Total: ${total}</h2>

      {cart.map((product, index) => (
        <div key={index}>
          <h3>{product.title}</h3>

          <p>${product.price}</p>

          <button
            onClick={() => eliminarProducto(product.id)}
          >
            Eliminar
          </button>

          <hr />
        </div>
      ))}
    </>
  );
}

export default Carrito;