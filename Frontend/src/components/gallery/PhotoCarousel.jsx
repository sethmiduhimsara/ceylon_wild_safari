import { useEffect, useRef, useState } from 'react'

function scrollCard(row, direction) {
  if (row.children.length < 2) return
  const step = row.children[1].offsetLeft - row.children[0].offsetLeft
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  row.scrollBy({ left: direction * step, behavior: reducedMotion ? 'instant' : 'smooth' })
}

export default function PhotoCarousel({ label, items, action, onSelect }) {
  const track = useRef(null)

  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [interacting, setInteracting] = useState(false)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setPaused(preference.matches)
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (paused || interacting || items.length < 2) return
    const row = track.current
    const timer = window.setInterval(() => {
      const bounds = row.getBoundingClientRect()
      if (document.hidden || bounds.bottom <= 0 || bounds.top >= window.innerHeight ||
          row.matches(':focus-within') || document.querySelector('dialog[open]')) return

      if (row.scrollLeft >= row.scrollWidth - row.clientWidth - 1) {
        row.scrollTo({ left: 0, behavior: 'instant' })
      } else {
        scrollCard(row, 1)
      }
    }, 5000)
    return () => window.clearInterval(timer)
  }, [paused, interacting, items.length])

  function move(direction) {
    scrollCard(track.current, direction)
  }

  return (
    <div className="gallery"
      onPointerEnter={event => { if (event.pointerType === 'mouse') setInteracting(true) }}
      onPointerLeave={() => setInteracting(false)}
      onTouchStart={() => setInteracting(true)}
      onTouchEnd={() => setInteracting(false)}
      onTouchCancel={() => setInteracting(false)}>
      <div className="photo-track" ref={track} role="region" aria-label={label} tabIndex={0}
        onKeyDown={event => {
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault()
            move(event.key === 'ArrowRight' ? 1 : -1)
          }
        }}>
        {items.map(item => (
          <article className="photo-card" key={item.title}>
            <img src={item.photo.src} alt={item.photo.alt} loading="lazy" />
            <div className="card-copy">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <button className="pill light" aria-label={action + ' · ' + item.title} onClick={() => onSelect(item)}>{action}<span aria-hidden="true">↗</span></button>
            </div>
          </article>
        ))}
      </div>
      <div className="gallery-controls" aria-label={label + ' controls'}>
        <button aria-label={'Previous ' + label} onClick={() => move(-1)}>←</button>
        {items.length > 1 && (
          <button aria-label={(paused ? 'Play ' : 'Pause ') + label + ' auto-scroll'}
            onClick={() => setPaused(value => !value)}>
            <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span>
          </button>
        )}
        <button aria-label={'Next ' + label} onClick={() => move(1)}>→</button>
      </div>
    </div>
  )
}

