// src/styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      brand: string;
      white: string;
    };
    fonts: string[];
    fontSize: {
      small: string;
      medium: string;
      Large: string;
    };
  }
}
