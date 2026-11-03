import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { keyframes } from '@mui/material/styles'
import Button from '../ui/Button.jsx'
import { OFFICIAL_SITE } from '../../data/store'
import { INK } from '../../theme/theme'

export default function Hero() {
  return (
    <Box component="section" sx={{ color: '#fff', overflow: 'hidden', background: `radial-gradient(900px 400px at 80% 20%, #3a2a05 0, transparent 70%), ${INK}` }}>
      <Container maxWidth="lg" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.05fr 1fr' }, gap: 3, alignItems: 'center', minHeight: { md: 540 }, py: 6 }}>
        <Box>
          <Typography variant="h1" component="h1">Seu próximo carro já está aqui.</Typography>
          <Typography sx={{ maxWidth: '46ch', color: '#c9c9cf', fontSize: 18, my: 2.5 }}>
            Seminovos revisados, com procedência e laudo. Escolha no catálogo e marque uma visita para ver de perto.
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            <Button color="secondary" to="/catalogo">Ver catálogo</Button>
            <Button variant="ghost" href={OFFICIAL_SITE}>Visitar site oficial ↗</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
