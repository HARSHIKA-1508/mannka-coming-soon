import React from 'react'
import './home.css'
import Contact from '../components/Contact'
const Home = () => {
  return (
   <>
 
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
     <Contact/>
    </div>
  </section>
</>

  )
}

export default Home
