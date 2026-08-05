import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function CompraExitosa() {
  return (
    <Container
      sx={{
        mt: 8,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
      >
        ¡Compra realizada con éxito!
      </Typography>

      <Typography
        variant="h6"
        sx={{ mb: 4 }}
      >
        Gracias por confiar en La Tienda de Pocho.
      </Typography>

      <Button
        component={Link}
        to="/productos"
        variant="contained"
      >
        Seguir comprando
      </Button>
    </Container>
  );
}

export default CompraExitosa;