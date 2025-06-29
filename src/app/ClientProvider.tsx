"use client";

import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/theme";

export function ClientProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
}
