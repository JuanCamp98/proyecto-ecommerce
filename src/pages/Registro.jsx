import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Container, TextField, Button, Typography } from "@mui/material";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { registro } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

if (
  !nombre ||
  !email ||
  !password ||
  !confirmPassword
) {
  alert("Completa todos los campos");
  return;
}

if (password !== confirmPassword) {
  alert("Las contraseñas no coinciden");
  return;
}

    registro(nombre, email);

    alert("Usuario registrado");
  };

  return (
  <Container
    maxWidth="sm"
    sx={{
      mt: 4,
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
      Registro
    </Typography>

    <form onSubmit={handleSubmit}>
      <TextField
        label="Nombre"
        fullWidth
        sx={{ mb: 2 }}
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

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
        sx={{ mb: 2 }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextField
        label="Confirmar Contraseña"
        type="password"
        fullWidth
        sx={{ mb: 3 }}
        value={confirmPassword}
        onChange={(e) =>
          setConfirmPassword(e.target.value)
        }
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
      >
        Registrarse
      </Button>
    </form>
  </Container>
);
}

export default Registro;