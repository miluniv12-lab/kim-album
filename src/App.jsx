import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Fechas from './pages/Fechas/Fechas'
import Fotos from './pages/Fotos/Fotos'
import Videos from './pages/Videos/Videos'
import Viajes from './pages/Viajes/Viajes'
import Compromisos from './pages/Compromisos/Compromisos'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fechas" element={<Fechas />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/viajes" element={<Viajes />} />
          <Route path="/compromisos" element={<Compromisos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
