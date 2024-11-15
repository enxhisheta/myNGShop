import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../store/CartContext";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

const CartSummary = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const totalCost = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Box className="cart-summary">
      {cart.length === 0 ? (
        <Typography variant="body1" className="cart-empty">
          Your cart is empty.
        </Typography>
      ) : (
        <>
          {cart.map((item) => (
            <Box key={item.id} className="cart-item">
              <Typography variant="h6" className="cart-item-name">
                {item.name}
              </Typography>
              <TextField
                type="number"
                size="small"
                inputProps={{ min: 1 }}
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value, 10))
                }
                className="cart-item-quantity"
              />
              <Typography className="cart-item-price">
                Price: ${item.price}
              </Typography>
              <Typography className="cart-item-total">
                Total: ${item.price * item.quantity}
              </Typography>
              <IconButton
                onClick={() => removeFromCart(item.id)}
                className="cart-item-remove"
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
          <Typography variant="h5" className="cart-total">
            Total Cost: ${totalCost}
          </Typography>
          <Button
            variant="contained"
            className="cart-checkout"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </Button>
        </>
      )}
    </Box>
  );
};

export default CartSummary;
