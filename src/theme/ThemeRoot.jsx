import { useMemo } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import useMediaQuery from '@mui/material/useMediaQuery'
import { buildTheme } from './theme'

export default function ThemeRoot({ children }) {
  const dark = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = useMemo(() => buildTheme(dark ? 'dark' : 'light'), [dark])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  )
}
