import { useEffect } from 'react'
import SiteHeader from '../../components/layout/SiteHeader'
import SiteFooter from '../../components/layout/SiteFooter'
import AboutGallery from './AboutGallery'

import './About.css'

export default function About() {
  useEffect(() => { document.title = 'About Us | Wild Ceylon Safari' }, [])

  return (
    <div className="about-page">
      <SiteHeader currentPage="about" />
      <main id="main">
        <section className="about-story wrap" aria-labelledby="about-title">
          <div className="about-introduction">
            <div>
              <span className="eyebrow">About Wild Ceylon Safari</span>
              <h1 id="about-title">A little closer<br />to what matters.</h1>
            </div>
            <div className="about-prose">
              <p>Wild places. Quiet moments.<br />And journeys you’ll remember.</p>
              <p>We help travellers explore Sri Lanka’s national parks through thoughtful safari experiences.</p>
            </div>
          </div>
          <AboutGallery />
          <div className="about-approach">
            <div><span className="eyebrow">Our approach</span><h2>Make room for wonder.</h2></div>
            <div className="about-prose">
              <p>A safari is more than a destination on a map. It’s time to pause, watch and discover the extraordinary details of the natural world.</p>
              <p>From Yala to Udawalawe and Wilpattu, we help you understand your options and shape a journey around the way you want to travel.</p>
            </div>
          </div>
        </section>
        <section className="about-values">
          <div className="wrap">
            <h2>The way we travel</h2>
            <div className="about-values-grid">
              <article><h3>Personal by nature</h3><p>Start with your interests, your group and the places you want to explore.</p></article>
              <article><h3>Respect for the wild</h3><p>Take time to observe wildlife and appreciate the places it calls home.</p></article>
              <article><h3>Clear from the start</h3><p>Talk through your plans, availability and final quotation with our team.</p></article>
            </div>
          </div>
        </section>
        <section className="about-next wrap">
          <h2>Your next wild story starts here.</h2>
          <a className="pill" href="/explore">Explore parks <span aria-hidden="true">→</span></a>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}


