import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Container, TextField, Button, Typography, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Registro() {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { registro } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    setError("");
    setSuccess(false);

    if (
      !nombre.trim() ||
      !email.trim() ||
      !password ||
      !confirmPassword
    ) {

      setError(
        "Completa todos los campos."
      );

      return;

    }

    const emailValido =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {

      setError(
        "Ingresa un email válido."
      );

      return;

    }

    if (password.length < 6) {

      setError(
        "La contraseña debe tener al menos 6 caracteres."
      );

      return;

    }

    if (password !== confirmPassword) {

      setError(
        "Las contraseñas no coinciden."
      );

      return;

    }

    registro(
      nombre.trim(),
      email.trim()
    );

    setSuccess(true);

    setNombre("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setTimeout(() => {

      navigate("/login");

    }, 1500);

  };

  return (

    <Container

      maxWidth="sm"

      sx={{

        mt: 5,

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

      {error && (

        <Alert
          severity="error"
          sx={{ mb: 2 }}
        >

          {error}

        </Alert>

      )}

      {success && (

        <Alert

          severity="success"

          sx={{ mb: 2 }}

        >

          Usuario registrado correctamente. Redirigiendo al login...

        </Alert>

      )}

      <form onSubmit={handleSubmit}>

        <TextField

          label="Nombre"

          fullWidth

          sx={{ mb: 2 }}

          value={nombre}

          onChange={(e) =>
            setNombre(e.target.value)
          }

        />

        <TextField

          label="Email"

          type="email"

          fullWidth

          sx={{ mb: 2 }}

          value={email}

          onChange={(e) =>
            setEmail(e.target.value)
          }

        />

        <TextField

          label="Contraseña"

          type="password"

          fullWidth

          sx={{ mb: 2 }}

          value={password}

          onChange={(e) =>
            setPassword(e.target.value)
          }

        />

        <TextField

          label="Confirmar contraseña"

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