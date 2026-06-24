import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategories";
import ProductCard from "../components/ProductCard";
import { CircularProgress } from "@mui/material";
import { Container, Grid, TextField, Select, MenuItem, Pagination } from "@mui/material";
import { useState } from "react";

function Productos() {
const { products, loading, error } = useProducts();
const { categories } = useCategories();

const [search, setSearch] = useState("");

const [selectedCategory, setSelectedCategory] = useState("");

const [page, setPage] = useState(1);

const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(search.toLowerCase())
);

const filteredByCategory = filteredProducts.filter((product) =>
  selectedCategory === "" || product.category?.name?.toLowerCase() === selectedCategory.toLowerCase()
);

const productsPerPage = 8;
const startIndex = (page - 1) * productsPerPage;
const endIndex = startIndex + productsPerPage;
const currentProducts = filteredByCategory.slice(startIndex, endIndex);

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
        {currentProducts.map((product) => (
          <Grid key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={Math.ceil(
        filteredByCategory.length / productsPerPage
      )}
      page={page}
      onChange={(event, value) =>
        setPage(value)
      }
      sx={{ mt: 4 }}
    />

    </Container>
  );
}

export default Productos;