import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function SectionHeader({ title, subtitle, action }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 2, flexWrap: 'wrap', mb: 3.5 }}>
      <Box>
        <Typography variant="h2" component="h2">{title}</Typography>
        {subtitle && <Typography color="text.secondary" sx={{ mt: 1, maxWidth: '52ch' }}>{subtitle}</Typography>}
      </Box>
      {action}
    </Box>
  )
}
