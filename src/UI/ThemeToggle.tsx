import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ThemeContext from "../store/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <IconButton onClick={toggleTheme} className="theme-toggle">
      {darkTheme ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};
export default ThemeToggle;
