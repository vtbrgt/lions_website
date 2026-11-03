import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CarImage from './CarImage.jsx'
import CarDetailDialog from './CarDetailDialog.jsx'
import Button from '../ui/Button.jsx'
import { formatPrice, formatKm } from '../../utils/format'
import { installment, defaultDown, DEFAULT_PLAN } from '../../utils/finance'
import { INK } from '../../theme/theme'

export default function CarCard({ car }) {
  const [open, setOpen] = useState(false)
  const parcela = installment(car.price, defaultDown(car.price), DEFAULT_PLAN.months)

  return (
    <Card variant="outlined" component="article" sx={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <Box sx={{ position: 'relative', px: 0, pt: 0, pb: 0, background: `linear-gradient(160deg, #17171a, ${INK})` }}>
        {car.tag && <Chip label={car.tag} size="small" color="primary" sx={{ position: 'absolute', top: 10, left: 10, fontWeight: 700, borderRadius: 0.75 }} />}
        <CarImage car={car} />
      </Box>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 0.75, flex: 1 }}>
        <Typography variant="h6" component="h3">{car.brand} {car.name}</Typography>
        <Typography variant="body2" color="text.secondary">{car.year} · {formatKm(car.km)} · {car.fuel}</Typography>
        <Typography variant="h6" component="p" sx={{ fontSize: 26, mt: 'auto', pt: 1 }}>{formatPrice(car.price)}</Typography>
        <Typography variant="caption" color="primary" sx={{ fontWeight: 700 }}>ou {DEFAULT_PLAN.months}x de {formatPrice(parcela)} com 30% de entrada</Typography>
        <Button to={`/visita?carro=${car.id}`} sx={{ mt: 1 }}>Agendar visita</Button>
        <Button variant="line" onClick={() => setOpen(true)}>Simular parcela</Button>
      </CardContent>
      {open && <CarDetailDialog car={car} open={open} onClose={() => setOpen(false)} />}
    </Card>
  )
}
