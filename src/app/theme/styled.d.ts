// src/styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      // Brand colors
      brand: string;
      brandLight: string;
      brandDark: string;

      // Neutral colors
      white: string;
      black: string;
      gray100: string;
      gray200: string;
      gray500: string;
      gray800: string;

      // Accent colors
      accent: string;
      accentLight: string;
      accentDark: string;

      // Gradient colors
      primary: string;
      secondary: string;
      tertiary: string;

      success: string;
      warning: string;
      danger: string;
      info: string;

      textPrimary: string;
      textSecondary: string;
      textInverted: string;

      hover: string;
      hoverLight: string;
      hoverDark: string;
      button: string;
      tertiaryLight: string;
      successDark: string;
      infoDark: string;
      warningDark: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    fontSize: {
      extraSmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      full: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
