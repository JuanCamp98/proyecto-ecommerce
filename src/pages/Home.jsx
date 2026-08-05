import { Container, Typography, Button, Grid, CircularProgress, Box } from "@mui/material";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

function Home() {
  const { products, loading } = useProducts();

  if (loading) {
    return (
      <Container
        sx={{
          mt: 8,
          textAlign: "center",
        }}
      >
        <CircularProgress />

        <Typography sx={{ mt: 2 }}>
          Cargando productos...
        </Typography>
      </Container>
    );
  }

  const randomProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);

  return (
    <Container sx={{ mt: 5, mb: 6 }}>

      <Box
        sx={{
          background:
            "linear-gradient(135deg, #1e293b, #2563eb)",
          color: "white",
          borderRadius: 4,
          p: 6,
          textAlign: "center",
          mb: 7,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Bienvenido a La Tienda de Pocho
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: 4,
          }}
        >
          Descubrí productos de tecnología, moda, hogar y mucho más.
        </Typography>

        <Button
          component={Link}
          to="/productos"
          variant="contained"
          color="warning"
          size="large"
        >
          Explorar productos
        </Button>
      </Box>

      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 1,
          fontWeight: "bold",
        }}
      >
        ⭐ Productos destacados
      </Typography>

      <Typography
        align="center"
        color="text.secondary"
        sx={{ mb: 5 }}
      >
        Una selección de algunos de nuestros productos más populares.
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent="center"
      >
        {randomProducts.map((product) => (
          <Grid
            item
            key={product.id}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;