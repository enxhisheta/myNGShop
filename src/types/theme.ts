import { createTheme, Theme } from "@mui/material/styles";

const commonThemeSettings = {
  typography: {
    fontFamily: "var(--font-family)",
    lineHeight: "var(--line-height)",
    fontWeight: "var(--font-weight)",
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
      default: "var(--light-background)",
      paper: "#ffffff",
    },
    text: {
      primary: "var(--light-color)",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--light-header-background)",
          "&.sticky": {
            backgroundColor: "var(--light-header-sticky-background)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--light-button-background)",
          color: "var(--light-button-color)",
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
      default: "var(--dark-background)",
      paper: "#333",
    },
    text: {
      primary: "var(--dark-color)",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--dark-header-background)",
          "&.sticky": {
            backgroundColor: "var(--dark-header-sticky-background)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--dark-button-background)",
          color: "var(--dark-button-color)",
        },
      },
    },
  },
});
