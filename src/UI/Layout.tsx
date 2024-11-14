import { Box, Container, CssBaseline } from "@mui/material";
import Navbar from "./Navbar";
import { ReactNode } from "react";
import Footer from "./Footer";

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
