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
    <Card 
    sx={{ 
      maxWidth: 300,
      height: "100%",
      transition: "transform 0.3s",
      "&:hover": {
        transform: "scale(1.03)",
        boxShadow: 6,
      },
    }}
  >
      
      <CardMedia
        component="img"
        height="220"
        sx={{ objectFit: "cover"}}
        image={product.images?.[0]}
        alt={product.title}
      />

      <CardContent>
        <Typography
          variant="h6"
          sx={{
            minHeight: 60,
        }}
      >
  {product.title}
</Typography>

<Typography
  variant="h6"
  color="primary"
  sx={{ fontWeight: "bold" }}
>
  ${product.price}
</Typography>
      <Button
          variant="contained"
          fullWidth
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