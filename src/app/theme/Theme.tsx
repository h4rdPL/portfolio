"use client"; // <-- add this

import { ThemeProvider } from "styled-components";
import { PropsWithChildren } from "react";

export const theme = {
  colors: {
    brand: "#6366F1",
    white: "#fff",
  },
  fonts: ["Montserrat", "Sans-serif"],
  fontSize: {
    small: "1rem",
    medium: "2rem",
    Large: "3rem",
  },
};

export const Theme = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
