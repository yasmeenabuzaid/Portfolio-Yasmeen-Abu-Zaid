import { createTheme } from '@mui/material/styles';

export const getAppTheme = (isDarkMode) => createTheme({
  direction: 'ltr', 
  palette: {
    mode: isDarkMode ? 'dark' : 'light',
    primary: {
      main: '#06b6d4', 
    },
    secondary: {
      main: '#a855f7', 
    },
    background: {
      paper: isDarkMode ? '#0f172a' : '#f8fafc',
    }
  },
  typography: {
    fontFamily: 'inherit',
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInput-underline:before': { borderBottomColor: isDarkMode ? '#334155' : '#cbd5e1' },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#06b6d4' },
          '& .MuiInputBase-input': { color: isDarkMode ? '#e2e8f0' : '#1e293b' },
          '& .MuiInputLabel-root': { color: isDarkMode ? '#94a3b8' : '#64748b' },
        }
      }
    }
  }
});