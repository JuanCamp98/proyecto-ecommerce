import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container
      sx={{
        mt: 8,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
        }}
      >
        404
      </Typography>

      <Typography
        variant="h4"
        sx={{ mt: 2 }}
      >
        Página no encontrada
      </Typography>

      <Typography
        variant="body1"
        sx={{ mt: 2, mb: 4 }}
      >
        La página que estás buscando no existe o fue eliminada.
      </Typography>

      <Button
        variant="contained"
        component={Link}
        to="/"
      >
        Volver al inicio
      </Button>
    </Container>
  );
}

export default NotFound;