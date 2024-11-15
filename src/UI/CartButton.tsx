import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useCart } from "../store/CartContext";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

const CartButton: React.FC = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <IconButton
      color="inherit"
      onClick={() => navigate("/cart")}
      className="cart-button"
    >
      <Badge badgeContent={itemCount} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartButton;
