import { Container, Typography, Grid, Box } from "@mui/material";
import ProceedForm from "../UI/ProceedForm";
import CartSummary from "../UI/CartSummary";

const CheckoutPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <ProceedForm />
        </Grid>

        <Grid item xs={12} md={5}>
          <Box sx={{ position: { md: "sticky" }, top: "100px" }}>
            <Typography variant="h5" gutterBottom>
              Order Summary
            </Typography>
            <CartSummary />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
