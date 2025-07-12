import React from 'react'

const Home = () => {
  return (
   <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mannka</title>
  <link rel="stylesheet" href="style.css" />
  <section className="coming-soon">
    <div className="hero-content">
      <h1 className="hero-title">Coming Soon</h1>
      <p className="hero-subtitle">Jaldi hi aap ki Sewa karne ke liye</p>
    </div>
    <div className="scroll-indicator">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <polyline points="6,9 12,15 18,9" />
      </svg>
    </div>
  </section>
  <section className="contact-section">
    <div className="contact-container">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Want to be the first to know when we launch? Drop us a message and we'll
        keep you in the loop.
      </p>
      <form className="contact-form" id="contactForm">
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required=""
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required=""
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="mobile-number">
            Mobile Number
          </label>
          <input
            type="number"
            className="form-input"
            id="mobile-number"
            name="mobile-number"
            placeholder="Your Contact Number"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-textarea"
            id="message"
            name="message"
            placeholder="Tell us what you're excited about or any questions you have..."
            required=""
            defaultValue={""}
          />
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  </section>
</>

  )
}

export default Home
