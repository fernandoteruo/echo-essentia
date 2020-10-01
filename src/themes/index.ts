import { ThemeProps } from 'styled-components';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open Sans:300,400,600,700,800', 'sans-serif'],
  },
});

enum Colors {
  BACKGROUND = '#F9FAFB',
  PRIMARY = '#f93',
  SECONDARY = '#ff9933',
  BORDER = '#EAEAEA',
  WHITE = '#FFFFFF',
  BLACK = '#2e3215',
}

enum ScreenWidth {
  XS = 360,
  SM = 600,
  MD = 1024,
  LG = 1400,
  XL = 1920,
}

export const theme = {
  colors: {
    primary: Colors.PRIMARY,
    secondary: Colors.SECONDARY,
    border: Colors.BORDER,
    background: Colors.BACKGROUND,
    white: Colors.WHITE,
    black: Colors.BLACK,
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    nax: '64px',
  },
  screenWidth: {
    xs: `(min-width: ${ScreenWidth.XS}px)`,
    sm: `(min-width: ${ScreenWidth.SM}px)`,
    md: `(min-width: ${ScreenWidth.MD}px)`,
    lg: `(min-width: ${ScreenWidth.LG}px)`,
    xl: `(min-width: ${ScreenWidth.XL}px)`,
  },
  typography: {
    regular: 'Open Sans',
  },
} as const;

export type AppTheme = typeof theme;

export type WithTheme = ThemeProps<AppTheme>;
