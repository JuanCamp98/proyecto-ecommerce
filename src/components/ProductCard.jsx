import { Card, CardMedia, CardContent, Typography, Button, Snackbar, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

function ProductCard({ product }) {

  const { agregarProducto } = useContext(CartContext);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleAgregar = () => {

    agregarProducto(product);

    setOpenSnackbar(true);

  };

  return (
    <>
      <Card

        sx={{

          maxWidth: 300,

          borderRadius: 3,

          boxShadow: 6,

          transition: "0.3s",

          "&:hover": {

            transform: "scale(1.03)",

          },

        }}

      >
        <CardMedia

          component="img"

          height="220"

          sx={{
            objectFit: "cover",
          }}

          image={product.images?.[0]}

          alt={product.title}

        />

        <CardContent>

          <Typography

            variant="h6"

            sx={{

              minHeight: 60,

              fontWeight: "bold",

            }}

          >

            {product.title}

          </Typography>

          <Typography

            variant="h6"

            color="primary"

            sx={{

              fontWeight: "bold",

              mb: 2,

            }}

          >

            ${product.price}

          </Typography>

          <Button

            variant="contained"

            fullWidth

            onClick={handleAgregar}

            sx={{ mb: 1 }}

          >

            Agregar al carrito

          </Button>

          <Button

            variant="outlined"

            fullWidth

            component={Link}

            to={`/producto/${product.id}`}

          >

            Ver detalle

          </Button>

        </CardContent>

      </Card>

      <Snackbar

        open={openSnackbar}

        autoHideDuration={2000}

        onClose={() =>
          setOpenSnackbar(false)
        }

      >

        <Alert

          severity="success"

          variant="filled"

          onClose={() =>
            setOpenSnackbar(false)
          }

        >

          Producto agregado al carrito

        </Alert>

      </Snackbar>

    </>

  );

}

export default ProductCard;