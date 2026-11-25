import Home from './pages/Home/Home'
import Service from './pages/Services/Service'

export default function App() {
  return /^\/services\/?$/.test(window.location.pathname) ? <Service /> : <Home />
}
