import { ThemeProps } from 'styled-components';

enum Colors {
  BACKGROUND = '#F9FAFB',
  BRAND = '#F93',
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
    xs: `${ScreenWidth.XS}px`,
    sm: `${ScreenWidth.SM}px`,
    md: `${ScreenWidth.MD}px`,
    lg: `${ScreenWidth.LG}px`,
    xl: `${ScreenWidth.XL}px`,
  },
} as const;

export type AppTheme = typeof theme;

export type WithTheme = ThemeProps<AppTheme>;
