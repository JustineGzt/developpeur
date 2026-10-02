import { Route, Routes } from 'react-router'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Services from '@/pages/Services'
import Realisations from '@/pages/Realisations'
import Tarifs from '@/pages/Tarifs'
import APropos from '@/pages/APropos'
import Contact from '@/pages/Contact'
import MentionsLegales from '@/pages/MentionsLegales'
import Confidentialite from '@/pages/Confidentialite'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="realisations" element={<Realisations />} />
        <Route path="tarifs" element={<Tarifs />} />
        <Route path="a-propos" element={<APropos />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mentions-legales" element={<MentionsLegales />} />
        <Route path="confidentialite" element={<Confidentialite />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
