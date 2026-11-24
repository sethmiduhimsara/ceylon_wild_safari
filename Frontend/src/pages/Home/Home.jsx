import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import PhotoCarousel from '../../components/gallery/PhotoCarousel'
import { parks, photos, stories } from '../../data/home'
import heroPhoto from '../../assets/photos/hero1.png'
import './Home.css'

const compactLayout = window.matchMedia('(max-width: 620px)')
function subscribeToLayout(listener) {
  compactLayout.addEventListener('change', listener)
  return () => compactLayout.removeEventListener('change', listener)
}
const isCompact = () => compactLayout.matches

function SectionIntro({ title, lead, children }) {
  const mobile = useSyncExternalStore(subscribeToLayout, isCompact)
  if (!mobile) return <><h2>{title}</h2><p>{lead} {children}</p></>

  return (
    <details className="section-disclosure">
      <summary>
        <h2>{title}</h2>
        <span className="section-preview">{lead}</span>
      </summary>
      <p>{children}</p>
    </details>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [park, setPark] = useState('')
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState('2')
  const [preview, setPreview] = useState(null)
  const [draft, setDraft] = useState('')
  const dialog = useRef(null)
  const caption = useRef(null)
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

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
        observer.disconnect()
      }
    }, { threshold: 0.75 })
    observer.observe(caption.current)
    return () => observer.disconnect()
  }, [])

  function showPreview(item) {
    setPreview(item)
    dialog.current.showModal()
  }

  function planSafari(selectedPark) {
    if (selectedPark) setPark(selectedPark)
    dialog.current.close()
    document.getElementById('contact').scrollIntoView()
    document.getElementById('guest-name').focus({ preventScroll: true })
  }

  function prepareEnquiry(event) {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    setDraft([
      'Safari enquiry for ' + (park || 'a Sri Lankan national park'),
      'Name: ' + fields.get('name'), 'Email: ' + fields.get('email'),
      'Travel date: ' + (date || 'Flexible'), 'Guests: ' + guests,
      fields.get('message'),
    ].filter(Boolean).join('\n'))
  }

  const parkOptions = parks.map(item => <option key={item.park}>{item.park}</option>)

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="mast wrap" id="home">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>Wild Ceylon Safari</a>
        <button ref={menuToggle} className="menu-toggle" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="menu-icon" aria-hidden="true" />{menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav id="navigation" className={menuOpen ? 'open' : ''} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
          <a href="#home">Home</a><a href="#services">Services</a><a  href="#contact">Enquire</a><a href="#about">About us</a><a className="pill"  href="#safaris">Explore</a>
        </nav>
      </header>
      <main id="main">
        <section className="hero wrap">
          <img className="hero-photo" src={heroPhoto} alt="" fetchPriority="high" />
          <div className="hero-copy">
            <span className="eyebrow">Sri Lankan wildlife experiences</span>
            <h1>Your next great<br />wildlife story.</h1>
            <p>Guided safaris and wildlife photography in the national parks of Sri Lanka.</p>
            <a className="pill light" href="#safaris">Explore our safaris <span aria-hidden="true">↗</span></a>
          </div>
        </section>
        <form className="planner" aria-label="Plan a safari" onSubmit={event => { event.preventDefault(); planSafari(park) }}>
          <label>Destination<select value={park} onChange={e => setPark(e.target.value)}><option value="">Choose a national park</option>{parkOptions}</select></label>
          <label>Travel date<input type="date" value={date} onChange={e => setDate(e.target.value)} /></label>
          <label>Guests<input type="number" required min="1" value={guests} onChange={e => setGuests(e.target.value)} /></label>
          <button className="pill">Plan my safari</button>
        </form>
        <section className="feature wrap" id="safaris">
          <div className="intro"><span className="eyebrow">Our safaris</span><SectionIntro title={<>A safari for <br />every kind of explorer.</>} lead="Every journey into the wild tells a different story.">Discover Sri Lanka's breathtaking national parks, encounter extraordinary wildlife, and explore some of the island's most beautiful natural landscapes. Your next unforgettable safari adventure begins here.</SectionIntro><a className="pill" href="#contact">Plan a safari</a></div>
          <PhotoCarousel label="safaris" items={parks} action="Explore safari" onSelect={showPreview} />
        </section>
        <section className="about wrap" id="about">
          <figure className="about-photo">
            <img src={photos.look.src} alt="A leopard looking out from tall grass" loading="lazy" />
            <figcaption className="card-copy" ref={caption}>
              <span>A glimpse through the grass</span>
              <p>For a moment, the leopard lifts its head above the grass, its whiskers catching the light.</p>
            </figcaption>
            
          </figure>
          <div><span className="eyebrow">Wild Ceylon Safari</span><SectionIntro title={<>Slow down. Look closer.<br />Feel the wild.</>} lead="Explore Sri Lanka’s national parks with an experienced safari guide, discovering breathtaking landscapes and extraordinary 
            wildlife along the way.">From unforgettable animal encounters to the quiet beauty of nature, we capture the wildlife, the little details, and the special moments in between - creating memories of your journey that last a lifetime.</SectionIntro><a className="pill" href="#services">Our services</a></div>
        </section>
        <section className="care wrap" id="services">
          <h2>Good journeys begin with care.</h2>
          <div className="care-grid">
            <article><h3>Your own safari</h3><p>Choose your national park and tell us what you hope to see.</p></article>
            <article><h3>People who know the wild</h3><p>Explore with a guide throughout your time in the park.</p></article>
            <article><h3>Room for wonder</h3><p>Enjoy the moment while we photograph your safari from beginning to end.</p></article>
          </div>
        </section>
        <section className="feature journal wrap">
          <div className="intro"><span className="eyebrow">From the journal</span><SectionIntro title={<>A little inspiration for your journey.</>} lead="Every journey into the wild begins with a little curiosity.">Discover inspiring wildlife encounters, breathtaking natural landscapes, and unforgettable moments from across Sri Lanka. Let these glimpses of the wild spark your imagination and inspire your next extraordinary safari adventure.</SectionIntro>
          <button className="pill" onClick={() => showPreview(stories[0])}>Read a story</button>
          
          
          </div>
          <PhotoCarousel label="stories" items={stories} action="Read story" onSelect={showPreview} />
        </section>
        <section className="contact" id="contact"><div className="contact-inner wrap">
          <form onSubmit={prepareEnquiry} onChange={() => setDraft('')}>
            <h2>Contact us by<br />sending a message</h2>
            <label>Your name<input id="guest-name" name="name" autoComplete="name" required /></label>
            <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
            <label>National park<select value={park} onChange={e => setPark(e.target.value)}><option value="">Help me choose</option>{parkOptions}</select></label>
            <label>Travel date<input type="date" value={date} onChange={e => setDate(e.target.value)} /></label>
            <label>Number of guests<input required type="number" min="1" value={guests} onChange={e => setGuests(e.target.value)} /></label>
            <label>Your message<textarea name="message" rows="2" /></label>
            <p className="draft-note">Prepare a draft to save. Online booking enquiries will open soon.</p>
            <button className="pill light">Prepare enquiry</button>
            {draft && <label role="status">Your enquiry draft is ready to copy<textarea rows="6" readOnly value={draft} onFocus={e => e.target.select()} /></label>}
          </form>
          <div><h2>Let’s plan your<br />next adventure.</h2><p>Tell us where you’d like to go and what you’d love to photograph on your safari.</p><h3>Guided wildlife safaris</h3><p>Yala · Udawalawe · Wilpattu</p><h3>Safari photography</h3><p>Photography throughout your tour</p></div>
        </div></section>
      </main>
      <footer><div className="wrap"><a className="footer-brand" href="#home">Wild Ceylon Safari</a><details><summary>Photo credits</summary><ul>{Object.values(photos).map(photo => <li key={photo.file}><a href={'https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(photo.file)}>{photo.file}</a> — {photo.author}</li>)}</ul><p>Images resized and cropped for display. <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a></p></details><a href="#contact">Contact us</a></div></footer>
      <dialog ref={dialog} aria-labelledby="preview-title" onClick={event => { if (event.target === dialog.current) dialog.current.close() }}>
        {preview && <article><button className="dialog-close" aria-label="Close preview" onClick={() => dialog.current.close()}>×</button><img src={preview.photo.src} alt={preview.photo.alt} /><div><span className="eyebrow">{preview.subtitle}</span><h2 id="preview-title">{preview.title}</h2><p>{preview.detail}</p>{preview.park && <button className="pill" onClick={() => planSafari(preview.park)}>Enquire about this safari</button>}</div></article>}
      </dialog>
    </>
  )
}

