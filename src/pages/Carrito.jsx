import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Container, Typography, Button, Card, CardContent } from "@mui/material";

function Carrito() {
  const { cart, eliminarProducto, vaciarCarrito, } = useContext(CartContext);

  const total = cart.reduce((acc, product) => acc + product.price, 0);

  if (cart.length === 0) {
    return (
      <Container sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h3">
          Carrito 
        </Typography>

        <Typography variant="h5" sx={{ mt: 3 }}>
          No hay productos en el carrito
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Agrega productos para comenzar tu compra
        </Typography>
      </Container>
    );
  }

  return (
    
      <Container sx={{ mt: 4 }}>
  <Typography
    variant="h3"
    gutterBottom
  >
    Carrito
  </Typography>

  <Typography variant="h6">
    Productos en el carrito: {cart.length}
  </Typography>

  <Typography
    variant="h5"
    sx={{ my: 2 }}
  >
    Total: ${total}
  </Typography>

  <Button
    variant="contained"
    color="error"
    sx={{ mb: 3 }}
    onClick={vaciarCarrito}
  >
    Vaciar carrito
  </Button>

    {cart.map((product, index) => (
      <Card
        key={index}
      sx={{ mb: 2 }}
      >
        <CardContent>
          <Typography variant="h6">
            {product.title}
          </Typography>
          
          <Typography>
            ${product.price}
          </Typography>
            
          <Button
            color="error"
            onClick={() => eliminarProducto(product.id)}
          >
              Eliminar
          </Button>
        </CardContent>
      </Card>
      ))}
    </Container>
    );
    }
export default Carrito;