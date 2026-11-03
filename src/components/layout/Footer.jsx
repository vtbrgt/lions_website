import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { OFFICIAL_SITE } from '../../data/store'
import { INK } from '../../theme/theme'

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: INK, color: '#a1a1a8', fontSize: 14, mt: 5, pt: 4, pb: 'calc(32px + env(safe-area-inset-bottom, 0px))' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
        <span>Projeto de demonstração inspirado no site público da Lions Seminovos. Veículos e preços são ilustrativos.</span>
        <Link href={OFFICIAL_SITE} target="_blank" rel="noopener noreferrer" color="#fff">lionsseminovos.com.br</Link>
      </Container>
    </Box>
  )
}
