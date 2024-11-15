import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart } from "../store/CartContext";
import Receipt from "../UI/Receipt";

const OrderConfirmationPage: React.FC = () => {
  const { orderData, clearCart } = useCart();
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    if (!orderData) {
      navigate("/cart");
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!orderData) return null;

  const handleConfirmOrder = () => {
    clearCart();
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

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

        <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleConfirmOrder}
          >
            Confirm Order
          </Button>
          <Button variant="outlined" onClick={() => navigate("/")}>
            Continue Shopping
          </Button>
        </Box>
      </Box>

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
          Order Confirmed!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default OrderConfirmationPage;
