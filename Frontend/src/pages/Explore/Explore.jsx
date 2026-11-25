import { useEffect, useRef, useState } from 'react'
import SiteHeader from '../../components/layout/SiteHeader'
import SiteFooter from '../../components/layout/SiteFooter'
import SafariPreview from '../../components/safari/SafariPreview'
import { parks, photos } from '../../data/home'
import leopard from '../../assets/photos/hero1.png'
import elephants from '../../assets/photos/elephant-guide.jpg'
import './Explore.css'

const gallery = [
  { src: leopard, alt: 'A leopard resting against a tree trunk' },
  { src: elephants, alt: 'Elephants standing together in the water' },
  photos.peacock, photos.hero, photos.yala,
]

export default function Explore() {
  const [featured, setFeatured] = useState(0)
  const [preview, setPreview] = useState(null)
  const dialog = useRef(null)
  useEffect(() => { document.title = 'Explore National Parks | Wild Ceylon Safari' }, [])

  function movePhoto(step) {
    setFeatured(index => (index + step + gallery.length) % gallery.length)
  }

  return (
    <div className="explore-page">
      <SiteHeader currentPage="explore" />
      <main id="main" className="wrap">
        <section className="explore-intro">
          <span className="eyebrow">Explore Sri Lanka</span>
          <h1>Find your kind of wild.</h1>
          <p>Discover Sri Lanka’s national parks and find the safari that speaks to you.</p>
          <a className="pill" href="#parks">Find your safari</a>
        </section>
        <section className="explore-gallery" aria-label="Wildlife photo gallery" onKeyDown={event => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault()
            movePhoto(event.key === 'ArrowLeft' ? -1 : 1)
          }
        }}>
          <div className="explore-gallery-stage">
            {gallery.map((photo, index) => {
              const position = (index - featured + gallery.length + 2) % gallery.length - 2
              return <img key={photo.src} src={photo.src} alt={position === 0 ? photo.alt : ''} data-position={position} />
            })}
          </div>
          <div className="gallery-controls">
            <button aria-label="Previous wildlife photo" onClick={() => movePhoto(-1)}>←</button>
            <button aria-label="Next wildlife photo" onClick={() => movePhoto(1)}>→</button>
          </div>
        </section>
        <section id="parks" className="explore-parks">
          <h2>Our national parks</h2>
          <ul className="explore-list">{parks.map(item => (
            <li key={item.park} className="photo-card">
              <img src={item.photo.src} alt={item.photo.alt} loading="lazy" />
              <div className="card-copy">
                <h3>{item.park}</h3>
                <p>{item.detail.split('. ')[0].replace(/\.$/, '')}.</p>
                <button className="pill light" aria-label={'View safari at ' + item.park} onClick={() => {
                  setPreview(item)
                  dialog.current.showModal()
                }}>View safari <span aria-hidden="true">→</span></button>
              </div>
            </li>
          ))}</ul>
        </section>
        <section className="explore-enquiry">
          <div><h2>Not sure where to begin?</h2><p>Tell us what you’d love to see. We’ll help you choose a park and plan a safari around your interests.</p></div>
          <a className="pill light" href="/contact">Talk to us <span aria-hidden="true">→</span></a>
        </section>
      </main>
      <SiteFooter />
      <SafariPreview dialogRef={dialog} item={preview} />
    </div>
  )
}
