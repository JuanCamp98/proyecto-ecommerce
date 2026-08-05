import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Alert,
  Box,
} from "@mui/material";

import { Link } from "react-router-dom";

function Carrito() {
  const {
    cart,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
    vaciarCarrito,
    mensaje,
  } = useContext(CartContext);

  const total = cart.reduce(
    (acc, product) =>
      acc + product.price * product.cantidad,
    0
  );

  if (cart.length === 0) {
    return (
      <Container
        sx={{
          mt: 6,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Tu carrito está vacío
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          Agrega productos para comenzar tu compra.
        </Typography>

        <Button
          variant="contained"
          component={Link}
          to="/productos"
          sx={{ mt: 3 }}
        >
          Ver productos
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5 }}>
      {mensaje && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {mensaje}
        </Alert>
      )}

      <Typography variant="h3" gutterBottom>
        Carrito
      </Typography>

      <Typography variant="h6">
        Productos diferentes: {cart.length}
      </Typography>

      <Typography
        variant="h5"
        sx={{
          my: 3,
          fontWeight: "bold",
        }}
      >
        Total: ${total.toFixed(2)}
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Button
          variant="contained"
          color="error"
          onClick={vaciarCarrito}
          sx={{ mr: 2 }}
        >
          Vaciar carrito
        </Button>

        <Button
          variant="contained"
          color="success"
          component={Link}
          to="/compra-exitosa"
          onClick={vaciarCarrito}
        >
          Finalizar compra
        </Button>
      </Box>

      {cart.map((product) => (
        <Card
          key={product.id}
          sx={{
            display: "flex",
            mb: 3,
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            image={product.images?.[0]}
            alt={product.title}
            sx={{
              width: 180,
              objectFit: "contain",
              p: 2,
            }}
          />

          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h5">
              {product.title}
            </Typography>

            <Typography color="text.secondary">
              {product.category?.name}
            </Typography>

            <Typography
              color="primary"
              sx={{
                fontWeight: "bold",
                mt: 2,
              }}
            >
              Precio: ${product.price}
            </Typography>

            <Typography sx={{ mt: 1 }}>
              Subtotal: $
              {(product.price * product.cantidad).toFixed(2)}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mt: 3,
              }}
            >
              <Button
                variant="outlined"
                onClick={() =>
                  disminuirCantidad(product.id)
                }
              >
                -
              </Button>

              <Typography
                sx={{
                  fontWeight: "bold",
                  minWidth: 20,
                  textAlign: "center",
                }}
              >
                {product.cantidad}
              </Typography>

              <Button
                variant="outlined"
                onClick={() =>
                  aumentarCantidad(product.id)
                }
              >
                +
              </Button>
            </Box>

            <Button
              variant="outlined"
              color="error"
              sx={{ mt: 3 }}
              onClick={() =>
                eliminarProducto(product.id)
              }
            >
              Eliminar producto
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Carrito;