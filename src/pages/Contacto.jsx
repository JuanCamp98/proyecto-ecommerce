import { useState } from "react";
import { Container, TextField, Button, Alert, Typography } from "@mui/material";

function Contacto() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [asunto, setAsunto] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [enviado, setEnviado] = useState(false);
    const handleSubmit = (e) => { e.preventDefault();
  setEnviado(true);
  setNombre("");
  setEmail("");
  setAsunto("");
  setMensaje("");
};return (
  <Container maxWidth="md"
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
      Contacto
    </Typography>

    {enviado && (
      <Alert severity="success" sx={{ mb: 2 }}>
        Mensaje enviado correctamente
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
        sx={{ mb: 2 }}
        value={mensaje}
        onChange={(e) =>
          setMensaje(e.target.value)
        }
      />

      <Button
        type="submit"
        variant="contained"
      >
        Enviar
      </Button>
    </form>
  </Container>
);
}
export default Contacto;