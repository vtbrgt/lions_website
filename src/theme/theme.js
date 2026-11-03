import { createTheme } from '@mui/material/styles'

export const INK = '#0a0a0a'
const display = {
  fontFamily: '"Archivo", Impact, sans-serif',
  fontWeight: 800,
  lineHeight: 1.02,
  fontStretch: '80%',
  letterSpacing: '-0.01em',
}

export const buildTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: { main: mode === 'dark' ? '#e5192b' : '#d4000f', contrastText: '#fff' },
      secondary: { main: '#ffc700', contrastText: INK },
      background:
        mode === 'dark'
          ? { default: '#0e0e10', paper: '#17171a' }
          : { default: '#f4f4f1', paper: '#ffffff' },
      divider: mode === 'dark' ? '#2a2a2f' : '#dcdcd6',
    },
    shape: { borderRadius: 6 },
    typography: {
      fontFamily: '"Montserrat", system-ui, sans-serif',
      h1: { ...display, fontSize: 'clamp(46px, 8vw, 96px)', textTransform: 'uppercase' },
      h2: { ...display, fontSize: 'clamp(30px, 5vw, 52px)', textTransform: 'uppercase' },
      h3: { ...display, fontSize: 30, textTransform: 'uppercase' },
      h6: { ...display, fontSize: 22 },
      button: { textTransform: 'none', fontWeight: 700 },
    },
    components: {
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: { root: { borderRadius: 4, borderWidth: 2, '&:hover': { borderWidth: 2 } } },
      },
    },
  })
