import { useEffect, useState } from 'react'
import SiteHeader from '../../components/layout/SiteHeader'
import SiteFooter from '../../components/layout/SiteFooter'
import { parks } from '../../data/home'
import { serviceEnquiryMessage } from '../../data/enquiry'
import horton from '../../assets/photos/horton.jpeg'
import safariVideo from '../../assets/photos/video.mp4'
import './Contact.css'

export default function Contact() {
  const [draft, setDraft] = useState('')
  useEffect(() => { document.title = 'Contact | Wild Ceylon Safari' }, [])

  function prepareEnquiry(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setDraft([
      'Safari enquiry from ' + data.get('name'),
      'WhatsApp: ' + data.get('phone'),
      data.get('email') && 'Email: ' + data.get('email'),
      'Park: ' + (data.get('park') || 'Help me choose'),
      'Preferred date: ' + (data.get('date') || 'Flexible'),
      data.get('message'),
    ].filter(Boolean).join('\n'))
  }

  return (
    <div className="contact-page">
      <SiteHeader currentPage="contact" />
      <main id="main">
        <section className="contact-intro">
          <video className="contact-intro-video" autoPlay muted loop playsInline aria-hidden="true">
            <source src={safariVideo} type="video/mp4" media="(prefers-reduced-motion: no-preference)" />
          </video>
          <div className="wrap">
            <div><span className="eyebrow">Let’s talk safari</span><h1>Your journey<br />starts with a hello.</h1>
            <p>Have a park in mind, or just a sense of adventure? Share your plans and we’ll help with the next steps.</p>
            </div>
            
          </div>
        </section>
        <div className="contact-layout wrap">
          <aside>
            <figure className="contact-photo">
              <img src={horton} alt="An antlered deer looking out from the forest in Horton Plains" />
              <figcaption>
                <strong>The wild is calling</strong>
                <p>Every great adventure begins with a conversation. Tell us about your journey, and let us help you discover the wild beauty of Sri Lanka.</p>
              </figcaption>
            </figure>
            <h2>A conversation, then an adventure.</h2>
            <p>Tell us your preferred date and group size. Our team can help you choose a park and confirm availability and pricing.</p>
            <div className="contact-business"><h3>Business contact</h3><p>Our booking number and email address will be available here soon.</p></div>
          </aside>
          <section id="enquiry" aria-labelledby="enquiry-title">
            <h2 id="enquiry-title">Tell us about your safari</h2>
            <p>A few details help us plan a better experience for you.</p>
            <form className="contact-form" onSubmit={prepareEnquiry} onChange={() => setDraft('')}>
              <label>Full name<input name="name" required autoComplete="name" placeholder="Your name" /></label>
              <label>WhatsApp number<input name="phone" type="tel" required autoComplete="tel" placeholder="Country code + number" /></label>
              <label className="full">Email address (optional)<input name="email" type="email" autoComplete="email" placeholder="Your email address" /></label>
              <label>National park<select name="park" defaultValue={new URLSearchParams(window.location.search).get('park') || ''}><option value="">Help me choose</option>{parks.map(({ park }) => <option key={park}>{park}</option>)}</select></label>
              <label>Preferred date<input name="date" type="date" /></label>
              <label className="full">What would you like to plan?<textarea name="message" rows="6" defaultValue={serviceEnquiryMessage(window.location.search)} placeholder="Your group size, photography interests or anything else you’d like us to know…" /></label>
              <div className="full"><p className="contact-status">Online enquiries are opening soon. Prepare a draft to copy for later.</p><button className="pill">Prepare enquiry <span aria-hidden="true">→</span></button></div>
              {draft && <label className="full" role="status">Your enquiry draft is ready to copy<textarea value={draft} rows="6" readOnly onFocus={event => event.target.select()} /></label>}
            </form>
            <p className="contact-chat">Prefer to chat?</p>
            <button className="pill contact-whatsapp" type="button" disabled>Chat on WhatsApp</button>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

