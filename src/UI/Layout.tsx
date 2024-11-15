import Navbar from "./Navbar";
import { ReactNode } from "react";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box className="layout">
      <CssBaseline />
      <Navbar />
      <Container component="main" className="layout-main">
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
