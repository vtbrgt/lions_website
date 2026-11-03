import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Button from '../ui/Button.jsx'
import SelectField from '../ui/SelectField.jsx'
import { BRANDS, CAR_TYPES } from '../../data/cars'
import { INK } from '../../theme/theme'

const BRAND_OPTIONS = BRANDS.map((b) => ({ value: b, label: b }))
const PRICE_OPTIONS = [90000, 120000, 150000].map((p) => ({ value: p, label: p.toLocaleString('pt-BR') }))

export default function QuickSearch() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    for (const [key, value] of new FormData(e.currentTarget)) if (value) params.set(key, value)
    navigate(`/catalogo?${params}`)
  }

  return (
    <Box component="section" sx={{ bgcolor: 'primary.main' }}>
      <Container maxWidth="lg">
        <Box component="form" onSubmit={handleSubmit} aria-label="Busca rápida" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 1.25, py: 2, alignItems: 'center' }}>
          <SelectField name="marca" label="Marca" placeholder="Todas" options={BRAND_OPTIONS} defaultValue="" />
          <SelectField name="tipo" label="Tipo" placeholder="Todos" options={CAR_TYPES} defaultValue="" />
          <SelectField name="max" label="Preço até (R$)" placeholder="Qualquer" options={PRICE_OPTIONS} defaultValue="" />
          <Button type="submit" sx={{ gridColumn: { xs: '1/-1', md: 'auto' }, bgcolor: INK, color: '#fff', borderColor: INK, '&:hover': { bgcolor: '#ffc700', borderColor: '#1d1d22', color: '#1d1d22' } }}>
            Buscar veículos
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
