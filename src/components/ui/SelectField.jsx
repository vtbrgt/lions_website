import TextField from '@mui/material/TextField'

export default function SelectField({ label, options, placeholder, sx, ...rest }) {
  return (
    <TextField
      select
      fullWidth
      size="small"
      label={label}
      slotProps={{ select: { native: true }, inputLabel: { shrink: true } }}
      sx={[
        (theme) => ({
          bgcolor: 'background.paper',
          borderRadius: 1,
          '& .MuiInputLabel-root.Mui-focused': {
            color: theme.palette.mode === 'dark' ? '#ffc700' : '#000',
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.mode === 'dark' ? '#ffc700' : '#000',
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx ?? {}]),
      ]}
      {...rest}
    >
      {placeholder !== undefined && <option value="">{placeholder}</option>}
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </TextField>
  )
}