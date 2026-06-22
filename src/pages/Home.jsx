import { Container, Typography, Button } from "@mui/material";

function Home() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Bienvenido a Proyecto E-Commerce
      </Typography>

      <Typography variant="h6" gutterBottom>
        Encontrá los mejores productos al mejor precio.
      </Typography>

      <Button
        variant="contained"
        size="large"
      >
        Ver Productos
      </Button>
    </Container>
  );
}

export default Home;