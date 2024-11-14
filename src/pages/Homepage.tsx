import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box className="hero-section">
        <Typography variant="h1" className="hero-title">
          Welcome to NGShop
        </Typography>
        <Typography variant="h4" className="hero-subtitle">
          Discover Premium Audio Experience
        </Typography>
        <Button
          variant="contained"
          className="hero-button"
          onClick={() => navigate("/all-products")}
        >
          Shop Now
        </Button>
      </Box>

      <Grid container className="features-section">
        <Grid item xs={12} md={4} className="feature-item">
          <Typography variant="h6">Premium Quality</Typography>
          <Typography>High-end audio equipment for true enthusiasts</Typography>
        </Grid>
        <Grid item xs={12} md={4} className="feature-item">
          <Typography variant="h6">Free Shipping</Typography>
          <Typography>On orders over $300</Typography>
        </Grid>
        <Grid item xs={12} md={4} className="feature-item">
          <Typography variant="h6">24/7 Support</Typography>
          <Typography>Expert assistance whenever you need</Typography>
        </Grid>
      </Grid>

      <Box className="categories-section">
        <Typography variant="h3" className="section-title">
          Popular Categories
        </Typography>
        <Grid container className="categories-grid">
          <Grid item xs={12} sm={6} className="category-item">
            <Box className="category-content">
              <Typography variant="h5">Headphones</Typography>
              <Button
                variant="outlined"
                onClick={() => navigate("/all-products")}
              >
                Browse
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
