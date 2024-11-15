import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
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
