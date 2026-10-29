import { createTheme } from '@mui/material/styles';

// index.css의 CSS 변수와 동일한 값 (팔레트 교체 시 함께 수정)
export const colors = {
  primary: '#2d3a8c',
  primaryLight: '#5c6bc0',
  primaryDark: '#1b2560',
  secondary: '#ff7a59',
  secondaryLight: '#ffa58e',
  background: '#f6f7fb',
  surface: '#ffffff',
  surfaceTint: '#eef0fb',
  textPrimary: '#1f2340',
  textSecondary: '#5b6075',
  border: '#e3e5f0',
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      light: colors.primaryLight,
      dark: colors.primaryDark,
    },
    secondary: {
      main: colors.secondary,
      light: colors.secondaryLight,
    },
    background: {
      default: colors.background,
      paper: colors.surface,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    divider: colors.border,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.125rem',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
});

export default theme;
