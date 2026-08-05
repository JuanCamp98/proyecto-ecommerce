import { useState } from "react";
import {  Container,  TextField,  Button,  Alert,  Typography } from "@mui/material";

function Contacto() {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    setError("");
    setEnviado(false);

    if (
      !nombre.trim() ||
      !email ||
      !asunto.trim() ||
      !mensaje.trim()
    ) {
      setError("Completa todos los campos.");
      return;
    }

   const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
      setError("Ingresa un email válido.");
      return;
    }

    setEnviado(true);

    setNombre("");
    setEmail("");
    setAsunto("");
    setMensaje("");

  };

  return (

    <Container
      maxWidth="md"
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
        Contacto
      </Typography>

      {error && (
        <Alert
          severity="error"
          sx={{ mb: 2 }}
        >
          {error}
        </Alert>
      )}

      {enviado && (
        <Alert
          severity="success"
          sx={{ mb: 2 }}
        >
          Mensaje enviado correctamente.
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
          label="Asunto"
          fullWidth
          sx={{ mb: 2 }}
          value={asunto}
          onChange={(e) =>
            setAsunto(e.target.value)
          }
        />

        <TextField
          label="Mensaje"
          multiline
          rows={4}
          fullWidth
          sx={{ mb: 3 }}
          value={mensaje}
          onChange={(e) =>
            setMensaje(e.target.value)
          }
        />

        <Button
          type="submit"
          variant="contained"
        >
          Enviar mensaje
        </Button>

      </form>

    </Container>

  );
}

export default Contacto;