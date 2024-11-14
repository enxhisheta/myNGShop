import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  TextField,
  Box,
} from "@mui/material";
import { Product } from "../types/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/products/${product.id}`);
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", product, "Quantity:", quantity);
  };

  return (
    <Card className="product-card">
      <CardMedia
        component="img"
        className="product-card-media"
        image={product.imageSrc}
        alt={product.name}
      />
      <CardContent className="product-card-content">
        <Typography gutterBottom variant="h6" component="h3">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
        <TextField
          type="number"
          label="Quantity"
          InputProps={{ inputProps: { min: 1 } }}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          size="small"
        />
        <Box className="product-card-actions">
          <Button variant="contained" onClick={handleAddToCart} fullWidth>
            Add to Cart
          </Button>
          <Button variant="outlined" onClick={handleViewDetails} fullWidth>
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
