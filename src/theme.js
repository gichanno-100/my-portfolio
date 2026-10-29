import { createTheme } from '@mui/material/styles';

// index.css의 CSS 변수와 동일한 값 (팔레트 교체 시 함께 수정)
export const colors = {
  primary: '#111111',
  primaryLight: '#424242',
  primaryDark: '#000000',
  secondary: '#757575',
  secondaryLight: '#e0e0e0',
  background: '#f5f5f5',
  surface: '#ffffff',
  surfaceTint: '#eeeeee',
  textPrimary: '#111111',
  textSecondary: '#616161',
  border: '#e0e0e0',
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
