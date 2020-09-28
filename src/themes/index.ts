import { ThemeProps } from 'styled-components';

enum Colors {
  BACKGROUND = '#F9FAFB',
  BRAND = '#419a1c',
  WHITE = '#FFFFFF',
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
    primary: Colors.BRAND,
    background: Colors.BACKGROUND,
    white: Colors.WHITE,
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
  shadows: {
    base: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  },
  screenWidth: {
    xs: `(min-width: ${ScreenWidth.XS}px)`,
    sm: `(min-width: ${ScreenWidth.SM}px)`,
    md: `(min-width: ${ScreenWidth.MD}px)`,
    lg: `(min-width: ${ScreenWidth.LG}px)`,
    xl: `(min-width: ${ScreenWidth.XL}px)`,
  },
} as const;

export type AppTheme = typeof theme;

export type WithTheme = ThemeProps<AppTheme>;
