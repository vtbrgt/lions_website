import Box from '@mui/material/Box'

export default function CarImage({ car }) {
    return (
      <Box
        component="img" src={car.image} alt={`${car.brand} ${car.name}`} loading="lazy"
        sx={[{ width: '100%', aspectRatio: '16 / 10', objectFit: 'cover', display: 'block' }]}
      />
    )
}
