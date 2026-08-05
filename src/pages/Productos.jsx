import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategories";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import { Container, Grid, TextField, Select, MenuItem, Pagination, Typography, CircularProgress, Alert } from "@mui/material";

function Productos() {
  const { products, loading, error } = useProducts();
  const { categories } = useCategories();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [search, selectedCategory]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredByCategory = filteredProducts.filter(
    (product) =>
      selectedCategory === "" ||
      product.category?.name?.toLowerCase() ===
        selectedCategory.toLowerCase()
  );

  const productsPerPage = 8;

  const totalPages = Math.ceil(
    filteredByCategory.length / productsPerPage
  );

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const currentProducts = filteredByCategory.slice(
    startIndex,
    endIndex
  );

  if (loading) {
    return (
      <Container
        sx={{
          mt: 5,
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

  if (error) {
    return (
      <Container sx={{ mt: 5 }}>
        <Alert severity="error">
          No se pudieron cargar los productos.
        </Alert>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography
        variant="h3"
        gutterBottom
      >
        Productos
      </Typography>

      <TextField
        label="Buscar producto"
        variant="outlined"
        fullWidth
        sx={{
          mb: 3,
          backgroundColor: "white",
        }}
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <Select
        fullWidth
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(e.target.value)
        }
        sx={{
          mb: 3,
          backgroundColor: "white",
        }}
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

      <Typography sx={{ mb: 3 }}>
        Productos encontrados: {filteredByCategory.length}
      </Typography>

      {currentProducts.length === 0 ? (
        <Typography
          variant="h5"
          sx={{
            mt: 5,
            textAlign: "center",
          }}
        >
          No encontramos productos que coincidan con tu búsqueda.
        </Typography>
      ) : (
        <Grid
          container
          spacing={3}
          justifyContent="center"
        >
          {currentProducts.map((product) => (
            <Grid
              item
              key={product.id}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}

      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={(event, value) =>
            setPage(value)
          }
          color="primary"
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",

            "& .MuiPaginationItem-root": {
              color: "white",
            },

            "& .Mui-selected": {
              backgroundColor: "#1976d2",
              color: "white",
            },

            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        />
      )}
    </Container>
  );
}
export default Productos;