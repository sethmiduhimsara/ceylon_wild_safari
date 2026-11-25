export default function SafariPreview({ dialogRef, item, onEnquire }) {
  return (
    <dialog ref={dialogRef} aria-labelledby="preview-title" onClick={event => {
      if (event.target === dialogRef.current) dialogRef.current.close()
    }}>
      {item && <article>
        <button className="dialog-close" aria-label="Close preview" onClick={() => dialogRef.current.close()}>×</button>
        <img src={item.photo.src} alt={item.photo.alt} />
        <div>
          <span className="eyebrow">{item.subtitle}</span>
          <h2 id="preview-title">{item.title}</h2>
          <p>{item.detail}</p>
          {item.park && (onEnquire
            ? <button className="pill" onClick={() => onEnquire(item.park)}>Enquire about this safari</button>
            : <a className="pill" href={'/contact?park=' + encodeURIComponent(item.park) + '#enquiry'}>Enquire about this safari</a>)}
        </div>
      </article>}
    </dialog>
  )
}
