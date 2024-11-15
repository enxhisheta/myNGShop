import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Product } from "../types/types";
import { useCart } from "../store/CartContext";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleViewDetails = () => {
    navigate(`/products/${product.id}`);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
        >
          {quantity > 1
            ? `${quantity} ${product.name}s added to cart!`
            : `${product.name} added to cart!`}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductCard;
