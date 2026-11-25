import { useEffect, useRef, useState } from 'react'

export default function SiteHeader({ currentPage = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggle = useRef(null)

  useEffect(() => {
    if (!menuOpen) return
    const header = menuToggle.current.closest('header')
    const mobile = window.matchMedia('(max-width: 620px)')
    function dismissOutside(event) {
      if (!header.contains(event.target)) setMenuOpen(false)
    }
    function dismissOnEscape(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuToggle.current.focus()
      }
    }
    function resetMenu() { setMenuOpen(false) }
    document.addEventListener('pointerdown', dismissOutside)
    document.addEventListener('focusin', dismissOutside)
    document.addEventListener('keydown', dismissOnEscape)
    mobile.addEventListener('change', resetMenu)
    return () => {
      document.removeEventListener('pointerdown', dismissOutside)
      document.removeEventListener('focusin', dismissOutside)
      document.removeEventListener('keydown', dismissOnEscape)
      mobile.removeEventListener('change', resetMenu)
    }
  }, [menuOpen])

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="mast wrap" id="home">
        <a className="brand" href="/#home" onClick={() => setMenuOpen(false)}>Wild Ceylon Safari</a>
        <button ref={menuToggle} className="menu-toggle" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="menu-icon" aria-hidden="true" />{menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav id="navigation" className={menuOpen ? 'open' : ''} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
          <a href="/#home" aria-current={currentPage === 'home' ? 'page' : undefined}>Home</a>
          <a href="/services" aria-current={currentPage === 'services' ? 'page' : undefined}>Services</a>
          <a href="/about" aria-current={currentPage === 'about' ? 'page' : undefined}>About us</a>
          <a href="/contact" aria-current={currentPage === 'contact' ? 'page' : undefined}>Contact</a>
          <a className="pill" href="/explore" aria-current={currentPage === 'explore' ? 'page' : undefined}>Explore</a>
        </nav>
      </header>
    </>
  )
}


