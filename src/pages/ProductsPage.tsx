import { Container, Typography, CircularProgress } from "@mui/material";
import useProducts from "../hooks/useProducts";
import ProductCard from "../UI/ProductCard";

const ProductsPage: React.FC = () => {
  const { products, loading, error } = useProducts();

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
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default ProductsPage;
