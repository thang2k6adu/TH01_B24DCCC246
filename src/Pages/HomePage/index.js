// HomePage.js
import React from 'react';
import Counter from '../../components/Counter/Counter';
import TodoApp from '../../components/Todo/Todo';
import ColorBoxApp from '../../components/ColorBox/ColorBoxApp';
import StudentList from '../../components/StudentList/StudentList';
import Clock from '../../components/Clock/Clock';
import '../../styles/css/homePage.css'

export default function HomePage() {
  return (
    <>
      {/* Floating shapes */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="logo">Playground</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#" className="cta-button">Start Free Trial</a>
          </div>
          <button className="mobile-menu-toggle" id="mobileMenuToggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="mobile-nav" id="mobileNav">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#" className="cta-button">Start Free Trial</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-backgrounds">
          <div className="hero-bg"></div>
          <div className="hero-bg"></div>
          <div className="hero-bg"></div>
        </div>
        <div className="hero-content">
          <Counter/>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="features-container">
        <TodoApp/>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing" id="pricing">
        <ColorBoxApp/>
      </section>
    <StudentList/>

      {/* About Section */}
      <section className="about" id="about">
        <Clock/>
      </section>

      {/* Footer */}
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
    </>
  )
}


