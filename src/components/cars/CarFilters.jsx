import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import SelectField from '../ui/SelectField.jsx'
import Button from '../ui/Button.jsx'
import { BRANDS, CAR_TYPES } from '../../data/cars'

const BRAND_OPTIONS = BRANDS.map((b) => ({ value: b, label: b }))
const SORT_OPTIONS = [
  { value: 'rel', label: 'Relevância' },
  { value: 'pa', label: 'Menor preço' },
  { value: 'pd', label: 'Maior preço' },
  { value: 'km', label: 'Menor km' },
]

export default function CarFilters({ filters, setFilter, onClear }) {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: '2fr 1fr 1fr 1fr auto' }, gap: 1.25, mb: 3, alignItems: 'center' }}>
      <TextField
        type="search" size="small" label="Buscar modelo" placeholder="Ex.: Corolla" value={filters.q}
        onChange={(e) => setFilter('q', e.target.value)}
        slotProps={{ inputLabel: { shrink: true } }}
        sx={(theme) => ({
          gridColumn: { xs: '1/-1', md: 'auto' },
          bgcolor: 'background.paper',
          borderRadius: 1,
          '& .MuiInputLabel-root.Mui-focused': {
            color: theme.palette.mode === 'dark' ? '#ffc700' : '#000',
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.mode === 'dark' ? '#ffc700' : '#000',
          },
        })}
      />
      <SelectField label="Marca" placeholder="Todas" options={BRAND_OPTIONS} value={filters.brand} onChange={(e) => setFilter('brand', e.target.value)} />
      <SelectField label="Tipo" placeholder="Todos" options={CAR_TYPES} value={filters.type} onChange={(e) => setFilter('type', e.target.value)} />
      <SelectField label="Ordenar" options={SORT_OPTIONS} value={filters.sort} onChange={(e) => setFilter('sort', e.target.value)} />
      <Button variant="line" type="button" onClick={onClear} sx={{ gridColumn: { xs: '1/-1', md: 'auto' } }}>Limpar</Button>
    </Box>
  )
}
