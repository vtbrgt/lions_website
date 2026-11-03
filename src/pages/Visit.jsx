import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import VisitForm from '../features/visit/VisitForm.jsx'
import VisitSuccess from '../features/visit/VisitSuccess.jsx'
import StoreInfo from '../features/visit/StoreInfo.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import { submitLead } from '../services/leads'

export default function Visit() {
  const [params] = useSearchParams()
  const [confirmed, setConfirmed] = useState(null)
  const handleSubmit = (visit) => {
    submitLead({ source: 'agendamento', ...visit })
    setConfirmed(visit)
  }

  return (
    <Container maxWidth="lg" sx={{ pt: 8 }}>
      <SectionHeader title="Agende uma visita" subtitle="Escolha o carro, o dia e o horário. Nossa equipe confirma por telefone." />
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, alignItems: 'start' }}>
        {confirmed ? (
          <VisitSuccess visit={confirmed} />
        ) : (
          <Paper variant="outlined" sx={{ p: 3 }}>
            <VisitForm defaultCarId={params.get('carro') ?? ''} onSubmit={handleSubmit} />
          </Paper>
        )}
        <StoreInfo />
      </Box>
    </Container>
  )
}
