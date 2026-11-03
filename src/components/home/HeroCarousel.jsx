import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Button from '../ui/Button.jsx'
import { SLIDES } from '../../data/slides'

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const withImage = (image) => ({
  xs: `linear-gradient(rgba(0,0,0,.62), rgba(0,0,0,.62)), url(${image})`,
  md: `linear-gradient(90deg, rgba(0,0,0,.8) 0%, rgba(0,0,0,.45) 55%, rgba(0,0,0,.1) 100%), url(${image})`,
})

export default function HeroCarousel() {
  return (
    <Box
      component="section" aria-label="Destaques"
      sx={{
        color: '#fff',
        '--swiper-navigation-color': '#fff',
        '--swiper-navigation-size': '28px',
        '& .swiper-button-prev, & .swiper-button-next': { display: { xs: 'none', md: 'flex' } },
        '& .swiper-pagination-bullet': { bgcolor: '#fff', opacity: 0.5, transition: 'width .25s' },
        '& .swiper-pagination-bullet-active': { bgcolor: 'secondary.main', opacity: 1, width: 28, borderRadius: 5 },
      }}
    >
      <Swiper
        modules={[A11y, Autoplay, Keyboard, Navigation, Pagination]}
        loop
        keyboard
        navigation
        pagination={{ clickable: true }}
        autoplay={reducedMotion() ? false : { delay: 6000, pauseOnMouseEnter: true, disableOnInteraction: false }}
        a11y={{ prevSlideMessage: 'Slide anterior', nextSlideMessage: 'Próximo slide', paginationBulletMessage: 'Ir para o slide {{index}}' }}
      >
        {SLIDES.map((s, n) => (
          <SwiperSlide key={s.id}>
            <Box
              sx={{
                overflow: 'hidden',
                background: s.image ? undefined : s.bg,
                backgroundImage: s.image ? withImage(s.image) : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <Container
                maxWidth="lg"
                sx={{
                  display: 'grid',
                  gridTemplateColumns: s.image ? '1fr' : { xs: '1fr', md: '1.05fr 1fr' },
                  gap: 3, alignItems: 'center', minHeight: { xs: 420, md: 540 }, py: 6, px: { xs: 3, md: 8 },
                }}
              >
                <Box>
                  <Typography variant="h1" component={n === 0 ? 'h1' : 'h2'}>{s.title}</Typography>
                  <Typography sx={{ maxWidth: '46ch', color: '#ffffffcc', fontSize: 18, my: 2.5 }}>{s.text}</Typography>
                  <Button to={s.cta.to}>{s.cta.label}</Button>
                </Box>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}