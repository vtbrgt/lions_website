import { useState } from 'react'
import Paper from '@mui/material/Paper'
import Slide from '@mui/material/Slide'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '../ui/Button.jsx'
import { getConsent, setConsent } from '../../utils/consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(() => getConsent() === null)

  const choose = (value) => {
    setConsent(value)
    setVisible(false)
  }

  return (
    <Slide in={visible} direction="up" mountOnEnter unmountOnExit>
      <Paper
        component="section" role="region" aria-label="Aviso de cookies" elevation={8}
        sx={{ position: 'fixed', zIndex: 1300, left: 16, right: { xs: 16, md: 'auto' }, bottom: 'calc(16px + env(safe-area-inset-bottom, 0px))', maxWidth: { md: 560 }, p: 2.5, borderRadius: 2 }}
      >
        <Typography variant="h6" component="h2" sx={{ mb: 0.5 }}>Sua privacidade</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Usamos cookies para lembrar suas preferências e entender de qual campanha você veio. Você pode recusar os não essenciais e continuar navegando normalmente.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25}>
          <Button onClick={() => choose('accepted')} sx={{ flex: 1 }}>Aceitar</Button>
          <Button variant="line" onClick={() => choose('rejected')} sx={{ flex: 1 }}>Recusar não essenciais</Button>
        </Stack>
      </Paper>
    </Slide>
  )
}
