import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import CarCard from './CarCard.jsx'

export default function CarGrid({ cars, emptyMessage }) {
  return (
    <Box aria-live="polite" sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 2.5 }}>
      {cars.length ? (
        cars.map((c) => <CarCard key={c.id} car={c} />)
      ) : (
        <Paper variant="outlined" sx={{ gridColumn: '1/-1', p: 5, textAlign: 'center', color: 'text.secondary', borderStyle: 'dashed', borderWidth: 2 }}>
          {emptyMessage}
        </Paper>
      )}
    </Box>
  )
}
