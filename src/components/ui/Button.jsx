import MuiButton from '@mui/material/Button'
import { Link } from 'react-router-dom'

const VARIANTS = {
  solid: { variant: 'contained', color: 'secondary' },
  line: { variant: 'outlined', color: 'inherit', sx: { borderColor: 'divider' } },
  ghost: {
    variant: 'outlined',
    sx: { color: '#fff', borderColor: '#ffffff66', '&:hover': { borderColor: '#fff', bgcolor: '#ffffff18' } },
  },
}

// `to` = rota interna, `href` = link externo (nova aba), nenhum = <button>.
export default function Button({ to, href, variant = 'solid', sx, ...rest }) {
  const v = VARIANTS[variant]
  const link = to ? { component: Link, to } : href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {}
  return <MuiButton size="large" {...v} {...link} sx={[v.sx ?? {}, ...(Array.isArray(sx) ? sx : [sx ?? {}])]} {...rest} />
}
