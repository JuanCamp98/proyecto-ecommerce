import { useParams, useNavigate } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import {  Container,  Card,  CardMedia,  CardContent,  Typography,  Button,  CircularProgress,  Alert } from "@mui/material";

function DetalleProducto() {

  const { id } = useParams();
  const navigate = useNavigate();

  const { agregarProducto, mensaje } = useContext(CartContext);

  const {
    product,
    loading,
    error
  } = useProduct(id);

  if (loading) {

    return (

      <Container
        sx={{
          mt: 5,
          textAlign: "center"
        }}
      >

        <CircularProgress />

        <Typography sx={{ mt: 2 }}>
          Cargando producto...
        </Typography>


      </Container>

    );

  }

  if (error) {

    return (

      <Container sx={{ mt: 5 }}>

        <Alert severity="error">

          {error}

        </Alert>

        <Button

          variant="contained"

          sx={{ mt: 3 }}

          onClick={() => navigate("/productos")}

        >

          Volver a productos

        </Button>

      </Container>

    );

  }

  if (!product) {

    return (

      <Container sx={{ mt: 5 }}>

        <Typography variant="h4">

          Producto no encontrado

        </Typography>

      </Container>

    );

  }

  return (

    <Container maxWidth="md" sx={{ mt: 5 }}>

      <Card

        sx={{

          borderRadius: 3,

          boxShadow: 4

        }}

      >

        <CardMedia

          component="img"

          height="400"

          image={
            product.images?.[0] ||
            "https://via.placeholder.com/400"
          }

          alt={product.title}

          sx={{
            objectFit: "contain"
          }}

        />

        <CardContent>

          <Typography

            variant="h4"

            gutterBottom

          >

            {product.title}

          </Typography>

          <Typography

            variant="h5"

            color="primary"

            sx={{
              mb: 2,
              fontWeight: "bold"
            }}

          >

            ${product.price}


          </Typography>

          <Typography sx={{ mb: 2 }}>

            {product.description}

          </Typography>

          <Typography sx={{ mb: 3 }}>

            <strong>Categoría:</strong>{" "}

            {product.category?.name || "Sin categoría"}

          </Typography>

          <Button

            variant="contained"

            onClick={() => agregarProducto(product)}

            sx={{ mr: 2 }}

          >

            Agregar al carrito

          </Button>

        {mensaje && (
          <Alert
            severity="success"
            sx={{ mt: 2 }}
          >
            {mensaje}
          </Alert>
        )}

          <Button

            variant="outlined"

            onClick={() => navigate("/productos")}

          >

            Volver a productos

          </Button>

        </CardContent>

      </Card>

    </Container>

  );

}

export default DetalleProducto;