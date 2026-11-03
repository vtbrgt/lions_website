import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Sprite from '../ui/Sprite.jsx'
import WhatsAppFab from '../engagement/WhatsAppFab.jsx'
import LeadDrawer from '../engagement/LeadDrawer.jsx'
import CookieConsent from '../engagement/CookieConsent.jsx'

const TITLES = {
  '/': 'Lions Seminovos — Página inicial',
  '/catalogo': 'Catálogo — Lions Seminovos',
  '/visita': 'Agende uma visita — Lions Seminovos',
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = TITLES[pathname] ?? TITLES['/']
  }, [pathname])

  return (
    <>
      <Sprite />
      <Header />
      <main><Outlet /></main>
      <Footer />
      <LeadDrawer />
      <WhatsAppFab />
      <CookieConsent />
    </>
  )
}
