import { useEffect } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart } from "../store/CartContext";
import Receipt from "../UI/Receipt";

const OrderConfirmationPage: React.FC = () => {
  const { orderData, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (!orderData) {
      navigate("/cart");
      return;
    }
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!orderData) return null;

  return (
    <Container maxWidth="md">
      <Box className="order-confirmation">
        <Typography variant="h4" gutterBottom>
          Thank you for your order!
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Your order has been successfully placed.
        </Typography>

        <Receipt />

        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{ mt: 4 }}
        >
          Continue Shopping
        </Button>
      </Box>
    </Container>
  );
};

export default OrderConfirmationPage;
