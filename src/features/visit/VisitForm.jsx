import { useState } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import ToggleButton from '@mui/material/ToggleButton'
import SelectField from '../../components/ui/SelectField.jsx'
import Button from '../../components/ui/Button.jsx'
import { CARS } from '../../data/cars'
import { TIME_SLOTS } from '../../data/store'
import { maskPhone, todayISO } from '../../utils/format'
import { validateVisit } from './validate'

const CAR_OPTIONS = CARS.map((c) => ({ value: String(c.id), label: `${c.brand} ${c.name} (${c.year})` }))

export default function VisitForm({ defaultCarId = '', onSubmit }) {
  const [values, setValues] = useState({ name: '', phone: '', carId: defaultCarId, date: '', time: '' })
  const [errors, setErrors] = useState({})
  const set = (key, value) => setValues((v) => ({ ...v, [key]: value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validateVisit(values)
    setErrors(found)
    if (!Object.keys(found).length) onSubmit(values)
  }

  return (
    <Stack component="form" spacing={2.25} onSubmit={handleSubmit} noValidate>
      <TextField 
        label="Nome completo" 
        autoComplete="name" 
        value={values.name} 
        onChange={(e) => set('name', e.target.value)} 
        error={!!errors.name} helperText={errors.name} 
        sx={(theme) => ({
          '& .MuiInputLabel-root.Mui-focused': {
            color: theme.palette.mode === 'dark' ? '#ffc700' : '#000',
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.mode === 'dark' ? '#ffc700' : '#000',
          },
        })}
      />
      <TextField 
        label="Telefone com DDD" 
        placeholder="(21) 99999-9999" 
        autoComplete="tel" 
        slotProps={{ htmlInput: { inputMode: 'tel' } }} 
        value={values.phone} 
        onChange={(e) => set('phone', maskPhone(e.target.value))} 
        error={!!errors.phone} 
        helperText={errors.phone}
        sx={(theme) => ({
          '& .MuiInputLabel-root.Mui-focused': {
            color: theme.palette.mode === 'dark' ? '#ffc700' : '#000',
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.mode === 'dark' ? '#ffc700' : '#000',
          },
        })}
      />
      <SelectField size="medium" label="Veículo de interesse" placeholder="Selecione" options={CAR_OPTIONS} value={values.carId} onChange={(e) => set('carId', e.target.value)} error={!!errors.carId} helperText={errors.carId} />
      <TextField 
        type="date" 
        label="Data" 
        slotProps={{ inputLabel: { shrink: true }, htmlInput: { min: todayISO() } }} 
        value={values.date} 
        onChange={(e) => set('date', e.target.value)} 
        error={!!errors.date} 
        helperText={errors.date}
        sx={(theme) => ({
          '& .MuiInputLabel-root.Mui-focused': {
            color: theme.palette.mode === 'dark' ? '#ffc700' : '#000',
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.mode === 'dark' ? '#ffc700' : '#000',
          },
        })}
      />
      <FormControl error={!!errors.time} component="fieldset">
        <FormLabel component="legend" sx={{ mb: 1, fontWeight: 700, fontSize: 14 }}>Horário</FormLabel>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {TIME_SLOTS.map((t) => (
            <ToggleButton
              key={t} value={t} size="small" selected={values.time === t} onChange={() => set('time', t)}
              sx={{ px: 1.75, fontWeight: 700, border: 1, borderColor: 'divider', borderRadius: 1, '&.Mui-selected, &.Mui-selected:hover': { bgcolor: 'secondary.main', color: 'secondary.contrastText' } }}
            >
              {t}
            </ToggleButton>
          ))}
        </Box>
        <FormHelperText>{errors.time}</FormHelperText>
      </FormControl>
      <Button type="submit">Confirmar agendamento</Button>
    </Stack>
  )
}
