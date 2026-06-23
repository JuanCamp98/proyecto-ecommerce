import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
  
function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <AppBar position="static">
      <Toolbar>
  <Typography
    variant="h6"
    sx={{ flexGrow: 1 }}
  >
    Proyecto E-Commerce
  </Typography>

  <Button color="inherit" component={Link} to="/">
    Home
  </Button>

  <Button color="inherit" component={Link} to="/productos">
    Productos
  </Button>

  <Button color="inherit" component={Link} to="/carrito">
    Carrito
  </Button>

  <Button color="inherit" component={Link} to="/login">
    Login
  </Button>

  <Button color="inherit" component={Link} to="/perfil">
    Perfil
  </Button>

  <Button color="inherit" component={Link} to="/contacto">
    Contacto
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