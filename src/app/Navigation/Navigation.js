import React from "react";

export const Navigation = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">Playground</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#" className="cta-button">
            Start Free Trial
          </a>
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
        <a href="#" className="cta-button">
          Start Free Trial
        </a>
      </div>
    </nav>
  );
}
