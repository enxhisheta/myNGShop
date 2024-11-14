import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useCart } from "../store/CartContext";
import { PersonalInfo } from "../types/types";

const ProceedForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfo>();
  const { createOrder, cart } = useCart();
  const navigate = useNavigate();

  const onSubmit = (data: PersonalInfo) => {
    createOrder(data);
    navigate("/order-confirmation");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className="proceed-form"
      onClick={(e) => e.stopPropagation()}
    >
      <Typography variant="h5" gutterBottom>
        Personal Information
      </Typography>

      <TextField
        fullWidth
        label="First Name"
        {...register("firstName", { required: "First name is required" })}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Last Name"
        {...register("lastName", { required: "Last name is required" })}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Email"
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Address"
        {...register("address", { required: "Address is required" })}
        error={!!errors.address}
        helperText={errors.address?.message}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Phone"
        {...register("phone", { required: "Phone number is required" })}
        error={!!errors.phone}
        helperText={errors.phone?.message}
        margin="normal"
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        size="large"
        sx={{ mt: 3 }}
        disabled={cart.length === 0}
      >
        Place Order
      </Button>
    </Box>
  );
};

export default ProceedForm;
