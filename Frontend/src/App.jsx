import Explore from './pages/Explore/Explore'
import Home from './pages/Home/Home'
import Service from './pages/Services/Service'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '')
  if (path === '/explore') return <Explore />
  if (path === '/contact') return <Contact />
  if (path === '/about') return <About />
  if (path === '/services') return <Service />
  return <Home />
}


