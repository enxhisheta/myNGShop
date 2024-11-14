import { Container, Typography } from "@mui/material";
import AddProductsForm from "../UI/AddProductsForm";

const AddProductsPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add New Products
      </Typography>
      <AddProductsForm />
    </Container>
  );
};

export default AddProductsPage;
