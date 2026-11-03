import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '../../components/ui/Button.jsx'
import { OFFICIAL_SITE, OPENING_HOURS } from '../../data/store'

export default function StoreInfo() {
  return (
    <Paper component="aside" variant="outlined" sx={{ p: 3 }}>
      <Typography variant="h6" component="h3" sx={{ fontSize: 26, mb: 1 }}>Loja</Typography>
      <Box component="ul" sx={{ pl: 2.25, m: 0, '& li': { my: 1 } }}>
        {OPENING_HOURS.map((l) => <li key={l}>{l}</li>)}
      </Box>
      <Box sx={{ mt: 2.25 }}>
        <Button variant="line" href={OFFICIAL_SITE}>Ver contatos no site oficial ↗</Button>
      </Box>
    </Paper>
  )
}
