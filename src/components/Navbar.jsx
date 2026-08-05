import { AppBar, Toolbar, Button, Typography, Badge } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext";

function Navbar() {
  const { user, logout } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const cantidadProductos = cart.reduce(
    (acc, product) => acc + product.cantidad,
    0
  );
  
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
          La tienda de Pocho
        </Typography>

        <Button
          color="inherit"
          component={Link}
          to="/"
        >
          Home
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/productos"
        >
          Productos
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/carrito"
        >
          <Badge
            badgeContent={cantidadProductos}
            color="error"
          >
            Carrito
          </Badge>
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/contacto"
        >
          Contacto
        </Button>

        {user ? (
          <>
            <Typography
              sx={{
                ml: 2,
                mr: 1,
              }}
            >
              Hola, {user.nombre}
            </Typography>

            <Button
              color="inherit"
              component={Link}
              to="/perfil"
            >
              Perfil
            </Button>

            <Button
              color="inherit"
              onClick={handleLogout}
            >
              Cerrar sesión
            </Button>
          </>
        ) : (
          <>
            <Button
              color="inherit"
              component={Link}
              to="/login"
            >
              Iniciar sesión
            </Button>

            <Button
              color="inherit"
              component={Link}
              to="/registro"
            >
              Registro
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;