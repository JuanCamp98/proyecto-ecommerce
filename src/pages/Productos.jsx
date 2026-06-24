import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategories";
import ProductCard from "../components/ProductCard";
import { CircularProgress } from "@mui/material";
import { Container, Grid, TextField, Select, MenuItem } from "@mui/material";
import { useState } from "react";

function Productos() {
const { products, loading, error } = useProducts();
const { categories } = useCategories();

const [search, setSearch] = useState("");

const [selectedCategory, setSelectedCategory] = useState("");

const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(search.toLowerCase())
);

const filteredByCategory = filteredProducts.filter((product) =>
  selectedCategory === "" || product.category?.name?.toLowerCase() === selectedCategory.toLowerCase()
);

  if (loading) {
    return <CircularProgress />;
  }
  if (error) return <h2>{error}</h2>;

  return (
    <Container sx={{ mt: 4 }}>
      <h1>Productos</h1>
      <h2>Categorías</h2>

    {categories.slice(0, 5).map((category) => (
      <p key={category.id}>
        {category.name}
      </p>
    ))}

    <TextField
      label="Buscar producto"
      variant="outlined"
      fullWidth
      sx={{ mb: 3 }}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <Select
        fullWidth
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(e.target.value)
        }
        sx={{ mb: 3 }}
      >
        <MenuItem value="">
          Todas las categorías
        </MenuItem>

        {categories.map((category) => (
          <MenuItem
            key={category.id}
            value={category.name}
          >
            {category.name}
          </MenuItem>
        ))}
      </Select>

      <p>Cantidad filtrada: {filteredByCategory.length}</p>

      <Grid container spacing={3}>
        {filteredByCategory.map((product) => (
          <Grid item key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Productos;