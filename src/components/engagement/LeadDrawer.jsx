import { useState } from 'react'
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import Slide from '@mui/material/Slide'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '../ui/Button.jsx'
import { maskPhone } from '../../utils/format'
import { submitLead } from '../../services/leads'
import { whatsappLink } from '../../utils/whatsapp'

export default function LeadDrawer() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '' })
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || form.phone.replace(/\D/g, '').length < 10) return setError('Informe nome e telefone com DDD.')
    setError('')
    await submitLead({ source: 'aba-desconto', ...form })
    setDone(true)
  }

  return (
    <Box onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} sx={{ position: 'fixed', left: 0, top: '28%', zIndex: 1200, display: 'flex', alignItems: 'flex-start' }}>
      <ButtonBase
        onClick={() => setOpen((o) => !o)} aria-expanded={open}
        sx={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', bgcolor: 'primary.main', color: '#fff', fontWeight: 800, fontSize: 12, letterSpacing: '.08em', px: 1.25, py: 2, borderRadius: '8px 0 0 8px', boxShadow: 3 }}
      >
        SEU DESCONTO ESTÁ AQUI!
      </ButtonBase>
      <Slide in={open} direction="right" mountOnEnter unmountOnExit>
        <Paper elevation={6} sx={{ width: 300, maxWidth: 'calc(100vw - 56px)', p: 2.5, ml: 0.5, borderRadius: 2, bgcolor: 'primary.main', color: '#fff' }}>
          {done ? (
            <Stack spacing={1.5}>
              <Typography variant="h6" component="h2">Recebemos seu contato!</Typography>
              <Typography variant="body2">Um consultor vai te chamar com a melhor oferta. Quer adiantar?</Typography>
              <Button href={whatsappLink(`Olá, sou ${form.name}. Acabei de pedir meu desconto no site.`)}>Falar no WhatsApp</Button>
            </Stack>
          ) : (
            <Stack component="form" spacing={1.5} onSubmit={handleSubmit} noValidate>
              <Typography variant="h6" component="h2">Ganhe até R$ 3.000 de desconto</Typography>
              <Typography variant="body2">Deixe seu contato e receba uma oferta personalizada.</Typography>
              <TextField
                size="small"
                placeholder="Seu nome"
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                sx={{
                  bgcolor: '#fff',
                  borderRadius: 1,
                  '& input': { color: '#242424' },
                  '& input::placeholder': { color: '#888', opacity: 1 },
                }}
                slotProps={{ htmlInput: { 'aria-label': 'Seu nome' } }}
              />
              <TextField 
                size="small" 
                placeholder="Telefone com DDD" 
                autoComplete="tel" 
                value={form.phone} 
                onChange={(e) => setForm({ ...form, phone: maskPhone(e.target.value) })} 
                sx={{
                  bgcolor: '#fff',
                  borderRadius: 1,
                  '& input': { color: '#242424' },
                  '& input::placeholder': { color: '#888', opacity: 1 },
                }}
                slotProps={{ htmlInput: { inputMode: 'tel', 'aria-label': 'Telefone' } }} 
              />
              {error && <Typography variant="caption" role="alert" sx={{ fontWeight: 700 }}>{error}</Typography>}
              <Button type="submit">Solicitar</Button>
            </Stack>
          )}
        </Paper>
      </Slide>
    </Box>
  )
}
