import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext";
import { Container, Typography, Button, Card, CardContent } from "@mui/material";

function Perfil() {
  const { user, logout } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  if (!user) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4">
          Ingresa para ver tu perfil
        </Typography>

        <Typography variant="body1">
          No tienes una cuenta activa
        </Typography>
      </Container>
    )
  }

  return (
    
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Card
        sx={{ backgroundColor: "#1e293b", color: "white", borderRadius: 3, boxShadow: 4}}
        >
          <CardContent sx={{ textAlign: "center" }}>
          <Typography 
          variant="h3"
          gutterBottom
          > 
            Perfil 
          </Typography>

          <Typography sx={{ mb: 1 }}>
            Nombre: {user.nombre}
          </Typography>

          <Typography sx={{ mb: 1 }}>
            Email: {user.email}
            </Typography>

          <Typography sx={{ mb: 3 }}> 
            Productos en carrito: {cart.length}
            </Typography>

          <Button variant="contained" color="error" onClick={logout}>
            Cerrar sesión
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Perfil;  