import hatchBanner from '../assets/banners/hatch_banner.webp'
import sedanBanner from '../assets/banners/sedan_banner.webp'
import suvBanner from '../assets/banners/suv_banner.webp'

export const SLIDES = [
  { 
    id: 1, title: 'Seu próximo carro já está aqui.', text: 'Seminovos revisados, com procedência e laudo. Escolha no catálogo e veja de perto.',
    cta: { label: 'Ver catálogo', to: '/catalogo' }, car: { name: 'Sedã', type: 'sedan', color: '#e8e8ea' },
    bg: 'radial-gradient(900px 400px at 80% 20%, #5a0008 0, transparent 70%), #0a0a0a', image: hatchBanner
  },
  { 
    id: 2, title: 'Seu usado vale mais na troca.', text: 'Avaliação na hora e o valor do seu carro entra como entrada.',
    cta: { label: 'Agendar avaliação', to: '/visita' }, car: { name: 'SUV', type: 'suv', color: '#1c1c20' },
    bg: 'linear-gradient(120deg, #d4000f, #8f0009)', image: sedanBanner 
  },
  { 
    id: 3, title: 'Parcelas que cabem no mês.', text: 'Simule entrada, prazo e parcela de qualquer carro em segundos.',
    cta: { label: 'Simular agora', to: '/catalogo' }, car: { name: 'Hatch', type: 'hatch', color: '#ffc700' },
    bg: 'radial-gradient(900px 400px at 20% 80%, #3b3b42 0, transparent 70%), #0a0a0a', image: suvBanner
   },
]
