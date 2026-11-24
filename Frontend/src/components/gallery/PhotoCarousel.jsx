import { useRef } from 'react'

export default function PhotoCarousel({ label, items, action, onSelect }) {
  const track = useRef(null)

  function move(direction) {
    const row = track.current
    const step = row.children[1].offsetLeft - row.children[0].offsetLeft
    row.scrollBy({ left: direction * step, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
  }

  return (
    <div className="gallery">
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
        <button aria-label={'Next ' + label} onClick={() => move(1)}>→</button>
      </div>
    </div>
  )
}
