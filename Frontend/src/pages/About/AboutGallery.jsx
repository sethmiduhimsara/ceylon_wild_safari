import { useEffect, useRef, useState } from 'react'
import leopard from '../../assets/photos/about.jpg'
import peacock from '../../assets/photos/peacock.jpg'
import elephants from '../../assets/photos/elephant-guide.jpg'
import canopy from '../../assets/photos/hero1.png'

const photos = [
  { src: leopard, alt: 'A leopard standing at the edge of the trees', caption: 'At the forest’s edge' },
  { src: peacock, alt: 'A peacock displaying its tail feathers', caption: 'A fan of blue and green' },
  { src: elephants, alt: 'An elephant and calf standing together in the water', caption: 'A pause at the water’s edge' },
  { src: canopy, alt: 'A leopard resting against a tree trunk', caption: 'Among the branches' },
]

export default function AboutGallery() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const gallery = useRef(null)
  const next = (index + 1) % photos.length

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setPaused(motion.matches)
    motion.addEventListener('change', update)
    return () => motion.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(() => {
      const bounds = gallery.current.getBoundingClientRect()
      if (!document.hidden && bounds.bottom > 0 && bounds.top < window.innerHeight &&
          !gallery.current.querySelector('.about-photo-stage:hover')) {
        setIndex(current => (current + 1) % photos.length)
      }
    }, 5000)
    return () => window.clearInterval(timer)
  }, [paused, index])

  return (
    <section className="about-gallery" ref={gallery} aria-label="Wildlife photo gallery">
      <div className="about-photo-stage">
        {[index, next].map(photoIndex => {
          const photo = photos[photoIndex]
          const featured = photoIndex === index
          return (
            <figure key={photo.src} className={featured ? 'featured' : 'upcoming'}>
              <img src={photo.src} alt={photo.alt} />
              {featured && <figcaption>{photo.caption}</figcaption>}
            </figure>
          )
        })}
      </div>
      <div className="gallery-controls">
        <button aria-label="Previous wildlife photo" onClick={() => setIndex((index + photos.length - 1) % photos.length)}>←</button>
        <button aria-label={paused ? 'Play wildlife slideshow' : 'Pause wildlife slideshow'} onClick={() => setPaused(!paused)}>{paused ? '▶' : 'Ⅱ'}</button>
        <button aria-label="Next wildlife photo" onClick={() => setIndex(next)}>→</button>
      </div>
    </section>
  )
}
