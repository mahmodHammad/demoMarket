import { Roboto } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
const initTheme = createTheme();
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#008EA5",
        light: "#008EA5",
        dark: "#00697A",
      },
      secondary: {
        main: "#002A37",
        light: "#002A37",
        dark: "#002A37",
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    components: {
      MuiAlert: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.severity === "info" && {
              backgroundColor: "#60a5fa",
            }),
          }),
        },
      },

      MuiButton: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            textTransform: "capitalize",
            borderRadius: "8px",
            ...(ownerState.size === "small" && {
              fontSize: "12px",
              padding: "6px 16px",
            }),
            ...(ownerState.size === "medium" && {
              // color: "green",
              fontSize: "14px",
              padding: "8px 20px",
            }),
            ...(ownerState.size === "large" && {
              fontSize: "16px",
              padding: "12px 24px",
            }),
          }),
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: "#232425",
          },
        },

        variants: [
          {
            props: { variant: "h1" },
            style: {
              fontSize: "84px",
              fontWeight: "bold",
              [initTheme.breakpoints.down("md")]: {
                fontSize: "64px",
              },
            },
          },
          {
            props: { variant: "h2" },
            style: {
              fontSize: "68px",
              fontWeight: "bold",
              [initTheme.breakpoints.down("md")]: {
                fontSize: "48px",
              },
            },
          },
          {
            props: { variant: "h3" },
            style: {
              fontSize: "52px",
              fontWeight: "bold",

              [initTheme.breakpoints.down("md")]: {
                fontSize: "34px",
              },
            },
          },
          {
            props: { variant: "h4" },
            style: {
              fontSize: "36px",
              fontWeight: "bold",

              [initTheme.breakpoints.down("md")]: {
                fontSize: "24px",
              },
            },
          },
          {
            props: { variant: "h5" },
            style: {
              fontSize: "24px",
              fontWeight: "bold",

              [initTheme.breakpoints.down("md")]: {
                fontSize: "18px",
              },
            },
          },
          {
            props: { variant: "body" },
            style: {
              display: "block",
              fontSize: "16px",
              [initTheme.breakpoints.down("md")]: {
                fontSize: "14px",
              },
            },
          },
          {
            props: { variant: "label" },
            style: {
              display: "block",
              fontSize: "16px",
              fontWeight: "bold",
              [initTheme.breakpoints.down("md")]: {
                fontSize: "14px",
              },
            },
          },
          {
            props: { variant: "small" },
            style: {
              display: "block",
              fontSize: "14px",
              [initTheme.breakpoints.down("md")]: {
                fontSize: "12px",
              },
            },
          },
          {
            props: { variant: "caption" },
            style: {
              color: "#525451",
              display: "block",
              fontSize: "12px",
              [initTheme.breakpoints.down("md")]: {
                fontSize: "10px",
              },
            },
          },
        ],
      },
      MuiSlider: {
        styleOverrides: {
          valueLabel: ({ ownerState, theme }) => ({
            ...(ownerState.orientation === "vertical" && {
              backgroundColor: "transparent",
              color: theme.palette.grey[500],
            }),
          }),
        },
      },
    },
  })
);

export default theme;
