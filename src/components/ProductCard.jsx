import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="200"
        image={product.images?.[0]}
        alt={product.title}
      />

      <CardContent>
        <Typography variant="h6">
          {product.title}
        </Typography>

        <Typography variant="body1">
          ${product.price}
        </Typography>

      <Button
          variant="contained"
          sx={{ mt: 2 }}
          component={Link}
          to={`/producto/${product.id}`}
        >
          Ver detalle
      </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;