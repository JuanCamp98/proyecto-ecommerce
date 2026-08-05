import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  const [mensaje, setMensaje] = useState("");

  const mostrarMensaje = (texto) => {

    setMensaje(texto);

    setTimeout(() => {
      setMensaje("");
    }, 2500);

  };

  const agregarProducto = (product) => {

    setCart((prevCart) => {

      const existe = prevCart.find(
        (item) => item.id === product.id
      );

      if (existe) {

        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                cantidad: item.cantidad + 1,
              }
            : item
        );

      }

      return [
        ...prevCart,
        {
          ...product,
          cantidad: 1,
        }
      ];

    });

    mostrarMensaje(
      "Producto agregado al carrito"
    );

  };

  const aumentarCantidad = (id) => {

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              cantidad: item.cantidad + 1,
            }
          : item
      )
    );

  };

  const disminuirCantidad = (id) => {

    setCart((prevCart) =>
      prevCart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              cantidad: item.cantidad - 1,
            }
          : item
      )
      .filter((item) => item.cantidad > 0)
    );

  };

  const eliminarProducto = (id) => {

    setCart((prevCart) =>
      prevCart.filter(
        (product) => product.id !== id
      )
    );


    mostrarMensaje(
      "Producto eliminado del carrito"
    );

  };

  const vaciarCarrito = () => {

    setCart([]);

    mostrarMensaje(
      "Carrito vaciado"
    );

  };

  return (

    <CartContext.Provider
      value={{
        cart,
        setCart,
        agregarProducto,
        aumentarCantidad,
        disminuirCantidad,
        eliminarProducto,
        vaciarCarrito,
        mensaje,
      }}
    >

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;