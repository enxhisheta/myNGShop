import { useState } from "react";
import { useForm } from "react-hook-form";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Product } from "../types/types";
import useProducts from "../hooks/useProducts";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
      className="add-products-form"
    >
      <input
        type="file"
        accept="image/*"
        id="image-upload"
        hidden
        onChange={handleImageSelect}
      />

      <Box className="add-products-form-image">
        {selectedImage ? (
          <Box className="add-products-form-preview">
            <img src={selectedImage} alt="Selected" />
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
    </Box>
  );
};

export default AddProductsForm;
