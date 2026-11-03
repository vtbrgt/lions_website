import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const ITEMS = [
  { title: 'Procedência verificada', text: 'Histórico, laudo cautelar e revisão antes de ir para a vitrine.' },
  { title: 'Financiamento facilitado', text: 'Simulação com os principais bancos e avaliação do seu usado na troca.' },
  { title: 'Garantia e transparência', text: 'Você sabe o que está levando: quilometragem real e documentação em dia.' },
]

export default function Differentials() {
  return (
    <Paper variant="outlined" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
      {ITEMS.map((i) => (
        <Box key={i.title} sx={{ p: 3, borderColor: 'divider', borderStyle: 'solid', borderWidth: 0, borderBottomWidth: { xs: 1, md: 0 }, borderRightWidth: { md: 1 }, '&:last-child': { border: 0 } }}>
          <Typography variant="h6" component="h3" sx={{ mb: 1 }}>{i.title}</Typography>
          <Typography variant="body2" color="text.secondary">{i.text}</Typography>
        </Box>
      ))}
    </Paper>
  )
}
