import { Box, Typography, Divider, Paper } from "@mui/material";
import { useCart } from "../store/CartContext";

const Receipt: React.FC = () => {
  const { orderData } = useCart();
  const { personalInfo, items, totalAmount, orderDate, orderId } = orderData!;

  return (
    <Paper elevation={3} className="receipt">
      <Box className="receipt-header">
        <Typography variant="h5">Order Receipt</Typography>
        <Typography variant="subtitle1">Order ID: {orderId}</Typography>
        <Typography variant="body2">
          Date: {new Date(orderDate).toLocaleDateString()}
        </Typography>
      </Box>

      <Divider />

      <Box className="receipt-customer">
        <Typography variant="h6">Customer Information</Typography>
        <Typography>
          {personalInfo.firstName} {personalInfo.lastName}
        </Typography>
        <Typography>{personalInfo.email}</Typography>
        <Typography>{personalInfo.address}</Typography>
        <Typography>{personalInfo.phone}</Typography>
      </Box>

      <Divider />

      <Box className="receipt-items">
        <Typography variant="h6">Order Items</Typography>
        {items.map((item) => (
          <Box key={item.id} className="receipt-item">
            <Typography>{item.name}</Typography>
            <Box className="receipt-item-details">
              <Typography>Quantity: {item.quantity}</Typography>
              <Typography>Price: ${item.price}</Typography>
              <Typography>Total: ${item.price * item.quantity}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Divider />

      <Box className="receipt-total">
        <Typography variant="h6">Total Amount: ${totalAmount}</Typography>
      </Box>
    </Paper>
  );
};

export default Receipt;
