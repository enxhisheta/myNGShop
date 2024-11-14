import { useEffect, useState } from "react";
import { Container, Typography, CircularProgress } from "@mui/material";
import { Product } from "../types/products";
import ProductCard from "../UI/ProductCard";

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load products");
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading) {
    return (
      <Container className="products-loading">
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="products-error">
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container className="products-container">
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default ProductsPage;
