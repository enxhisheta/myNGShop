import Container from "@mui/material/Container";
import CartSummary from "../UI/CartSummary";
import Typography from "@mui/material/Typography";

const CartSummaryPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" className="page-title">
        Shopping Cart
      </Typography>
      <CartSummary />
    </Container>
  );
};

export default CartSummaryPage;
