import { NavLink, Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Link$ from '@mui/material/Link'
import { OFFICIAL_SITE } from '../../data/store'
import { INK } from '../../theme/theme'
import Logo from '../ui/Logo'

const LINKS = [
  { to: '/', label: 'Página inicial', end: true },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/visita', label: 'Agende uma visita' },
]

export default function Header() {
  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: INK, color: '#fff', borderBottom: '1px solid #2a2a2f', pt: 'env(safe-area-inset-top, 0px)', backgroundImage: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'space-between' },
            gap: 1,
            rowGap: { xs: 2, md: 0 },
            py: { xs: 1.5, md: 0 },
          }}
        >
          <Box component={Link} to="/" aria-label="Lions Seminovos — página inicial" sx={{ display: 'flex', alignItems: 'center', gap: 1.25, color: 'inherit', textDecoration: 'none' }}>
            <Logo height={30} aria-hidden="true" />
          </Box>
          <Box component="nav" aria-label="Principal" sx={{ display: 'flex', gap: 0.5, order: { xs: 3, md: 0 }, width: { xs: '100%', md: 'auto' } }}>
            {LINKS.map((l) => (
              <Button
                key={l.to}
                component={NavLink}
                to={l.to}
                end={l.end}
                color="inherit"
                sx={{ textAlign: 'center', flex: { xs: 1, md: 'none' }, color: '#c9c9cf', fontSize: { xs: 13, md: 14 }, px: { xs: 0.5, md: 1.75 }, '&.active': { bgcolor: 'primary.main', color: '#fff' }, '&:not(.active):hover': { bgcolor: '#ffffff14', color: '#fff' } }}
              >
                {l.label}
              </Button>
            ))}
          </Box>
          <Link$ href={OFFICIAL_SITE} target="_blank" rel="noopener noreferrer" underline="none" color="#c9c9cf" sx={{ display: { xs: 'none', md: 'inline' }, fontSize: 13, fontWeight: 700 }}>
            Site oficial ↗
          </Link$>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
