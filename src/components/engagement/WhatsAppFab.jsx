import { useSearchParams } from 'react-router-dom'
import Fab from '@mui/material/Fab'
import Tooltip from '@mui/material/Tooltip'
import { keyframes } from '@mui/material/styles'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { CARS } from '../../data/cars'
import { whatsappLink } from '../../utils/whatsapp'

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(37,211,102,.55) }
  70% { box-shadow: 0 0 0 16px rgba(37,211,102,0) }
  100% { box-shadow: 0 0 0 0 rgba(37,211,102,0) }`

export default function WhatsAppFab() {
  const [params] = useSearchParams()
  const car = CARS.find((c) => String(c.id) === params.get('carro'))
  const message = car
    ? `Olá! Tenho interesse no ${car.brand} ${car.name} ${car.year}.`
    : 'Olá! Vim pelo site e gostaria de falar com um consultor.'

  return (
    <Tooltip title="Fale com um consultor" placement="left">
      <Fab
        component="a" href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"
        sx={{ position: 'fixed', right: 20, bottom: 'calc(20px + env(safe-area-inset-bottom, 0px))', zIndex: 1200, bgcolor: '#25d366', color: '#fff', '&:hover': { bgcolor: '#1ebe5a' }, animation: `${pulse} 2.4s infinite`, '@media (prefers-reduced-motion: reduce)': { animation: 'none' } }}
      >
        <WhatsAppIcon />
      </Fab>
    </Tooltip>
  )
}
