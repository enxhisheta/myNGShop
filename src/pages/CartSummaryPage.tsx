import { Container, Typography } from "@mui/material";
import CartSummary from "../UI/CartSummary";

const CartSummaryPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" className="page-title">
        Your Shopping Cart
      </Typography>
      <CartSummary />
    </Container>
  );
};

export default CartSummaryPage;
