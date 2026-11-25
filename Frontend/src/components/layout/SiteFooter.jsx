import './SiteFooter.css'

export default function SiteFooter({ children }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <a className="footer-brand" href="/">Wild Ceylon Safari</a>
          <p className="footer-description">Explore Sri Lanka’s national parks with a guide. We photograph your safari along the way, so you can spend more time watching the wildlife.</p>
        </div>
        <div className="footer-links">
          <a href="/#safaris">Explore safaris</a><a href="/services">Services</a>
          <a href="/#about">About us</a><a href="/#contact">Contact</a>
        </div>
        <div className="footer-bottom"><small>© Wild Ceylon Safari</small>{children}</div>
      </div>
    </footer>
  )
}
