import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useProducts from "../hooks/useProducts";
import ProductDetails from "../UI/ProductDetails";
import { Product } from "../types/types";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { loading, error, fetchProductById } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        if (!productId) return;
        const productData = await fetchProductById(String(productId));
        setProduct(productData);
      } catch (error) {
        console.error("Product not found");
        throw error;
      }
    };
    loadProduct();
  }, [productId, fetchProductById, navigate]);

  return (
    <Container className="product-details-page">
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/all-products")}
        className="back-button"
      >
        Back
      </Button>

      {loading && (
        <div className="loading-container">
          <CircularProgress />
        </div>
      )}

      {error && (
        <Typography color="error" className="error-message">
          {error}
        </Typography>
      )}

      {product && <ProductDetails product={product} />}
    </Container>
  );
};

export default ProductDetailsPage;
