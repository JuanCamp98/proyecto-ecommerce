import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Container, TextField, Button, Alert, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {alert("Completa todos los campos");
      return;
    }

    login(email);

    alert("Login exitoso");
  };

  return (
  <Container
    maxWidth="sm"
    sx={{
      mt: 6,
      p: 4,
      backgroundColor: "#ffffff",
      borderRadius: 2,
      boxShadow: 3,
    }}
  >
    <Typography
      variant="h3"
      align="center"
      gutterBottom
    >
      Ingresar
    </Typography>

    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        type="email"
        fullWidth
        sx={{ mb: 2 }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        label="Contraseña"
        type="password"
        fullWidth
        sx={{ mb: 3 }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
      >
        Ingresar
      </Button>

      <Typography
      sx={{ mt: 2 }}
      align="center"
      >
        ¿No tienes una cuenta? 
      </Typography>

      <Button
        component={Link}
        to="/registro"
        sx={{ mt: 1 }}
      >
        Registrarse
      </Button>
        
    </form>
  </Container>
);
}

export default Login;