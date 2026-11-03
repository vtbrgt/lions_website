import Container from '@mui/material/Container'
import CarFilters from '../components/cars/CarFilters.jsx'
import CarGrid from '../components/cars/CarGrid.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import { useCarFilters } from '../hooks/useCarFilters'

export default function Catalog() {
  const { filters, cars, setFilter, clear } = useCarFilters()
  const n = cars.length

  return (
    <Container maxWidth="lg" sx={{ pt: 8 }}>
      <SectionHeader title="Catálogo" subtitle={`${n} veículo${n === 1 ? '' : 's'} encontrado${n === 1 ? '' : 's'}`} />
      <CarFilters filters={filters} setFilter={setFilter} onClear={clear} />
      <CarGrid cars={cars} emptyMessage="Nenhum veículo com esses filtros. Remova um filtro ou toque em Limpar." />
    </Container>
  )
}
