import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useCart } from "../store/CartContext";
import { Product } from "../types/types";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const isBase64Image = (src: string) => src.startsWith("data:image");

  const getImageSrc = (imageSrc: string) => {
    return isBase64Image(imageSrc)
      ? imageSrc
      : `/images/${imageSrc.split("/").pop()}`;
  };

  return (
    <Box className="product-details">
      <Box
        component="img"
        src={getImageSrc(product.imageSrc)}
        alt={product.name}
        className="product-details-image"
      />
      <Box className="product-details-content">
        <Typography variant="h4" className="product-details-title">
          {product.name}
        </Typography>
        <Typography variant="h5" className="product-details-price">
          ${product.price}
        </Typography>
        <Typography className="product-details-description">
          {product.description}
        </Typography>
        <TextField
          type="number"
          label="Quantity"
          InputProps={{ inputProps: { min: 1 } }}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="product-details-quantity"
        />
        <Button
          variant="contained"
          onClick={handleAddToCart}
          className="product-details-button"
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
