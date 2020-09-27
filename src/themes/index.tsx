import { ThemeProps } from 'styled-components';

const theme = {};

export type AppTheme = typeof theme;

export type WithTheme = ThemeProps<AppTheme>;

export default theme;
