import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, Button, Typography, Fab } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Product } from "../types/types";
import useProducts from "../hooks/useProducts";

const AddProductsForm = () => {
  const { createProduct } = useProducts();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<Omit<Product, "id">>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setSelectedImage(imageUrl);
        setValue("imageSrc", imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: Omit<Product, "id">) => {
    const success = await createProduct(data);
    if (success) {
      reset();
      setSelectedImage(null);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ maxWidth: 600, mx: "auto", p: 3 }}
    >
      <Typography variant="h5" gutterBottom>
        Add New Product
      </Typography>

      <input
        type="file"
        accept="image/*"
        id="image-upload"
        hidden
        onChange={handleImageSelect}
      />

      <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
        {selectedImage ? (
          <Box sx={{ position: "relative", width: "100%", maxWidth: 300 }}>
            <img
              src={selectedImage}
              alt="Selected"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        ) : (
          <Button
            variant="outlined"
            component="label"
            htmlFor="image-upload"
            startIcon={<AddPhotoAlternateIcon />}
          >
            Select Product Image
          </Button>
        )}
      </Box>

      <TextField
        fullWidth
        label="Product Name"
        {...register("name", { required: "Name is required" })}
        error={!!errors.name}
        helperText={errors.name?.message}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Description"
        multiline
        rows={4}
        {...register("description", { required: "Description is required" })}
        error={!!errors.description}
        helperText={errors.description?.message}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Price"
        type="number"
        {...register("price", {
          required: "Price is required",
          min: { value: 0, message: "Price must be positive" },
        })}
        error={!!errors.price}
        helperText={errors.price?.message}
        margin="normal"
      />

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
        Add Product
      </Button>

      <Fab
        color="primary"
        component="label"
        htmlFor="image-upload"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <AddPhotoAlternateIcon />
      </Fab>
    </Box>
  );
};

export default AddProductsForm;
