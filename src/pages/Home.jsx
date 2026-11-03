import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import HeroCarousel from '../components/home/HeroCarousel.jsx'
import QuickSearch from '../components/home/QuickSearch.jsx'
import Differentials from '../components/home/Differentials.jsx'
import CarGrid from '../components/cars/CarGrid.jsx'
import Button from '../components/ui/Button.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import { CARS } from '../data/cars'
import { INK } from '../theme/theme'

const featured = CARS.filter((c) => c.tag).slice(0, 3)

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <QuickSearch />
      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <SectionHeader
          title="Destaques"
          subtitle="Os seminovos que mais chamam atenção no estoque desta semana."
          action={<Button variant="line" to="/catalogo">Ver todos</Button>}
        />
        <CarGrid cars={featured} />
      </Container>
      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <Differentials />
      </Container>
      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <Box sx={{ bgcolor: INK, color: '#fff', borderRadius: 1.5, p: { xs: 3, md: 5 }, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2.5, flexWrap: 'wrap' }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: 'clamp(28px, 4vw, 44px)', maxWidth: '20ch' }}>Viu um carro? Veja ao vivo.</Typography>
          <Button to="/visita">Agendar visita</Button>
        </Box>
      </Container>
    </>
  )
}
