import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
// import CartButton from "./CartButton";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo/shopLogo2.png";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/all-products" },
    { label: "Cart", path: "/cart" },
    { label: "Checkout", path: "/checkout" },
  ];

  return (
    <AppBar position="fixed" className={`navbar ${sticky ? "sticky" : ""}`}>
      <Toolbar className="navbar-toolbar">
        <Box className="navbar-logo-container" onClick={() => navigate("/")}>
          <Box
            component="img"
            src={logo}
            alt="NGshop"
            className="navbar-logo"
          />
        </Box>

        <Box className="navbar-actions">
          <ThemeToggle />
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {menuItems.map((item) => (
              <MenuItem
                key={item.path}
                onClick={() => handleNavigate(item.path)}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
