import { Container, Typography, Button } from "@mui/material";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import { Grid, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {

  const { products, loading } = useProducts();

if (loading) {
  return <CircularProgress />;
}

const randomProducts = [...products]
  .sort(() => Math.random() - 0.5)
  .slice(0, 8);
  
  return (
    <Container sx={{ mt: 5, textAlign: "center" }}>
      <Typography
       variant="h2" 
       sx={{
        fontWeight: "bold",
        mb: 2,
       }}
       >
        Bienvenido a la tienda E-Commerce
      </Typography>

      <Typography 
      variant="h5" 
      color="text.secondary"
      sx={{ mb: 4 }}
      >
        Encontrá tecnologia, ropa, hogar y mucho más en un solo lugar.
      </Typography>

      <Button
        variant="contained"
        size="large"
        component={Link}
        to="/productos"
      >
        Ver Productos
      </Button>
    

      <Typography
  variant="h4"
  sx={{ mt: 5, mb: 3 }}
>
  Productos Destacados
</Typography>

<Grid container spacing={3}>
  {randomProducts.map((product) => (
    <Grid item key={product.id}>
      <ProductCard product={product} />
    </Grid>
  ))}
</Grid>

    </Container>
  );
}

export default Home;