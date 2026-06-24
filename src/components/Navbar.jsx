import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
  
function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <AppBar
  position="sticky"
  sx={{
    background: "#1e293b",
    boxShadow: 3,
  }}
>
  <Toolbar>
  <Typography
    variant="h5"
    sx={{
       flexGrow: 1,
       fontWeight: "bold",
     }}
  >
    Tienda E-Commerce
  </Typography>

  <Button color="inherit" component={Link} to="/">
    Home
  </Button>

  <Button color="inherit" component={Link} to="/productos" sx={{ mx: 0.5}}>
    Productos
  </Button>

  <Button color="inherit" component={Link} to="/carrito" sx={{ mx: 0.5}}>
    Carrito
  </Button>

  <Button color="inherit" component={Link} to="/login" sx={{ mx: 0.5}}>
    Login
  </Button>

  <Button color="inherit" component={Link} to="/perfil" sx={{ mx: 0.5}}>
    Perfil
  </Button>

  <Button color="inherit" component={Link} to="/contacto" sx={{ mx: 0.5}}>
    Contacto
  </Button>

  <Button color="inherit" component={Link} to="/registro" sx={{ mx: 0.5}}>
    Registro
  </Button>

  {user && (
    <Typography sx={{ ml: 2 }}>
      Hola, {user.nombre}
    </Typography>
  )}
</Toolbar>
    </AppBar>
  );
}

export default Navbar;