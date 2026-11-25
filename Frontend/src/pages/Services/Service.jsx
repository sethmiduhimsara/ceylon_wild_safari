import { useEffect } from 'react'
import PhotoCarousel from '../../components/gallery/PhotoCarousel'
import SiteHeader from '../../components/layout/SiteHeader'
import SectionIntro from '../../components/layout/SectionIntro'
import SiteFooter from '../../components/layout/SiteFooter'
import leopard from '../../assets/photos/hero1.png'
import photography from '../../assets/photos/service.jpg'
import elephants from '../../assets/photos/elephant-guide.jpg'
import './Service.css'
import './ServiceBanner.css'

const services = [
  {
    name: 'Safari photography', label: 'Your safari tour captured',
    image: leopard, alt: 'A leopard resting against the trunk of a tree',
    lead: 'We photograph your safari from start to finish.',
    text: 'From wildlife encounters to quiet moments in the jeep, you can stay present while we capture the journey.',
    action: 'Ask about photography', enquiry: 'photography',
  },
  {
    name: 'Safari guide service', label: 'Nature, more understanding',
    image: elephants, alt: 'An elephant and calf standing together in the water',
    lead: 'Explore the park with a safari guide.',
    text: 'Follow tracks, ask about the wildlife you see and get to know the landscapes around you along the way.',
    action: 'Plan a guided safari', enquiry: 'guiding',
  },
]

export default function Service() {
  useEffect(() => { document.title = 'Safari Photography & Guiding | Wild Ceylon Safari' }, [])

  return (
    <div className="service-page">
      <SiteHeader services />
      <main id="main" className="service-content wrap">
        <section className="service-hero">
          <div>
            <span className="eyebrow">Safari photography &amp; guiding</span>
            <SectionIntro heading="h1" title={<>Be in the moment.<br />We’ll capture<br />the story.</>} lead="Photography throughout your safari, with a guide alongside your journey.">
              Experience the wild and bring home the moments that matter.
            </SectionIntro>
            <a className="pill" href="/#contact">Plan your safari <span aria-hidden="true">→</span></a>
          </div>
          <div className="service-collage">
            <img src={leopard} alt="" />
            <img src={photography} alt="Safari photography equipment in the field" fetchPriority="high" />
          </div>
        </section>
        <section className="feature journal service-options" aria-labelledby="service-options">
          <div className="intro">
            <SectionIntro id="service-options" title="Two services. One memorable journey." lead="Enjoy your safari with support on the trail and someone behind the lens.">
              Your guide helps you spot the details you might pass by: a print in the dust, a bird on a distant branch, or a shape moving through the grass. While you watch, we photograph the encounters and the people sharing them with you. Tell us what you’re curious about when you plan your safari.
            </SectionIntro>
          </div>
          <PhotoCarousel label="services">{services.map(item => (
            <article className="service-card photo-card" key={item.name}>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <div className="card-copy">
                <span className="eyebrow">{item.label}</span>
                <SectionIntro heading="h3" title={item.name} lead={item.lead}>{item.text}</SectionIntro>
                <a className="pill light" href={'/?service=' + item.enquiry + '#contact'}>{item.action}<span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}</PhotoCarousel>
        </section>
        <section className="service-planning">
          <span className="eyebrow">Made around your journey</span>
          <h2>Tell us what matters to you.</h2>
          <div className="service-steps">
            <article><h3>Choose your experience</h3><p>Tell us your park, travel date and group size.</p></article>
            <article><h3>Shape the day together</h3><p>Discuss your guiding and photography needs.</p></article>
            <article><h3>Enjoy your time in the wild</h3><p>We’ll confirm the plan and the final quotation.</p></article>
          </div>
          <div className="service-enquiry">
            <div><h2>Your safari. Your story.</h2><p>Let’s talk about the experience you have in mind. We’ll help you plan the guiding and photography.</p></div>
            <a className="pill light" href="/#contact">Book now <span aria-hidden="true">→</span></a>
          </div>
          <p className="service-note">Photography coverage, photo delivery and service pricing are agreed with our team when you enquire.</p>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}




