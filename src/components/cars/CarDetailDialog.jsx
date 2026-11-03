import { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import CarImage from './CarImage.jsx'
import Button from '../ui/Button.jsx'
import { formatPrice, formatKm } from '../../utils/format'
import { installment, defaultDown, DEFAULT_PLAN } from '../../utils/finance'
import { whatsappLink } from '../../utils/whatsapp'

export default function CarDetailDialog({ car, open, onClose }) {
  const fullScreen = useMediaQuery(useTheme().breakpoints.down('sm'))
  const [down, setDown] = useState(defaultDown(car.price))
  const [months, setMonths] = useState(DEFAULT_PLAN.months)
  const parcela = installment(car.price, down, months)
  const message = `Olá! Simulei o ${car.brand} ${car.name} ${car.year}: entrada de ${formatPrice(down)} e ${months}x de ${formatPrice(parcela)}. Podem me ajudar?`

  return (
    <Dialog open={open} onClose={onClose} fullScreen={fullScreen} fullWidth maxWidth="sm" aria-labelledby="car-dialog-title">
      <DialogTitle id="car-dialog-title" sx={{ pr: 7, fontFamily: 'Archivo', fontWeight: 800 }}>
        {car.brand} {car.name}
        <IconButton aria-label="Fechar" onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8 }}><CloseIcon /></IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ bgcolor: '#0a0a0a', borderRadius: 1.5, px: 0, pt: 0, pb: 0, mb: 2, overflow: 'hidden' }}><CarImage car={car} /></Box>
        <Typography color="text.secondary" sx={{ mb: 2 }}>{car.year} · {formatKm(car.km)} · {car.fuel} · à vista {formatPrice(car.price)}</Typography>

        <Typography id="down-label" sx={{ fontWeight: 700 }}>Entrada: {formatPrice(down)}</Typography>
        <Slider aria-labelledby="down-label" value={down} min={0} max={Math.round((car.price * 0.6) / 1000) * 1000} step={1000} onChange={(_, v) => setDown(v)} />
        <Typography id="months-label" sx={{ fontWeight: 700 }}>Prazo: {months} meses</Typography>
        <Slider aria-labelledby="months-label" value={months} min={12} max={60} step={12} marks onChange={(_, v) => setMonths(v)} />

        <Box sx={{ bgcolor: 'primary.main', color: '#fff', borderRadius: 1.5, p: 2.5, my: 2, textAlign: 'center' }}>
          <Typography variant="body2">Parcela estimada</Typography>
          <Typography variant="h3" component="p">{months}x {formatPrice(parcela)}</Typography>
        </Box>
        <Typography variant="caption" color="text.secondary">Simulação ilustrativa (taxa de {(DEFAULT_PLAN.rate * 100).toFixed(2).replace('.', ',')}% a.m.). Sujeita a análise de crédito.</Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 2.5, pb: 1 }}>
          <Button to={`/visita?carro=${car.id}`} onClick={onClose} sx={{ flex: 1 }}>Agendar visita</Button>
          <Button variant="line" href={whatsappLink(message)} startIcon={<WhatsAppIcon />} sx={{ flex: 1 }}>Falar com consultor</Button>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}
