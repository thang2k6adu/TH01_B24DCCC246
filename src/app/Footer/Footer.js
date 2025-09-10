import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">Playground</div>
          <p>Secure cloud storage and collaboration platform for teams of all sizes.</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Press</a>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <a href="#contact">Contact</a>
            <a href="#">Help Center</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 CloudSync. All rights reserved.</p>
        <div className="social-links">
          <a href="#">🐦</a>
          <a href="#">🔗</a>
          <a href="#">📘</a>
        </div>
      </div>
    </div>
  </footer>
  )
}
