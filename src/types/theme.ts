import { createTheme, Theme } from "@mui/material/styles";

const commonThemeSettings = {
  typography: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    lineHeight: 1.5,
    fontWeight: 400,
  },
  shape: {
    borderRadius: 8,
  },
};

export const lightTheme: Theme = createTheme({
  ...commonThemeSettings,
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "rgba(70, 70, 70, 0.87)",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&.sticky": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#1a1a1a",
          color: "#ffffff",
        },
      },
    },
  },
});

export const darkTheme: Theme = createTheme({
  ...commonThemeSettings,
  palette: {
    mode: "dark",
    background: {
      default: "#242424",
      paper: "#333333",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&.sticky": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#646cff",
          color: "#ffffff",
        },
      },
    },
  },
});
