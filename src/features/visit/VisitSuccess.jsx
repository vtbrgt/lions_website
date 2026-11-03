import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '../../components/ui/Button.jsx'
import { CARS } from '../../data/cars'
import { STORE_ADDRESS } from '../../data/store'
import { formatLongDate } from '../../utils/format'
import { downloadIcs } from '../../utils/calendar'
import { whatsappLink } from '../../utils/whatsapp'
import { INK } from '../../theme/theme'

export default function VisitSuccess({ visit }) {
  const car = CARS.find((c) => String(c.id) === String(visit.carId))
  const label = `${car.brand} ${car.name}`
  const when = formatLongDate(visit.date)

  return (
    <Box role="status" sx={{ bgcolor: INK, color: '#fff', borderRadius: 1.5, p: 3.5, borderLeft: '6px solid #d4000f' }}>
      <Typography variant="h3" component="h3" sx={{ mb: 1.25 }}>Visita agendada</Typography>
      <Typography sx={{ mb: 2.5 }}>
        {visit.name.split(' ')[0]}, vamos te esperar para ver o <strong>{label}</strong> em <strong>{when}</strong>, às <strong>{visit.time}</strong>. Confirmaremos pelo telefone {visit.phone}.
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} useFlexGap sx={{ flexWrap: 'wrap' }}>
        <Button onClick={() => downloadIcs({ title: `Visita Lions — ${label}`, date: visit.date, time: visit.time, location: STORE_ADDRESS, description: `Visita para ver o ${label}.` })}>
          Adicionar ao calendário
        </Button>
        <Button variant="ghost" href={whatsappLink(`Olá! Agendei uma visita para ${when} às ${visit.time} para ver o ${label}.`)}>Confirmar no WhatsApp</Button>
        <Button variant="ghost" to="/catalogo">Ver mais veículos</Button>
      </Stack>
    </Box>
  )
}
