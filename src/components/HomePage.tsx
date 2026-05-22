// src/components/HomePage.tsx

import React from "react";
import "./HomePage.css";
import { BsCart3 } from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GrDeliver } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa6";
import GovernmentSchemes from "./GovernmentSchemes";
import KnowledgeHub from "./KnowledgeHub";
import AppDownload from "./AppDownload";
import Navbar from "./Navbar";

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <div className="content">
        <section className="hero">
          <h1>Empowering farmers with technology!</h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter your location for personalized insights"
            />
            <button>Search</button>
          </div>
        </section>

        <section className="features">
          <div className="feature">
            <TiWeatherPartlySunny className="feature-icon" />
            <h3>Enhancing crop</h3>
            <p>Real-time weather updates</p>
          </div>
          <div className="feature">
            <BsCart3 className="feature-icon" />
            <h3>Market</h3>
            <p>Efficiency guaranteed</p>
          </div>
          <div className="feature">
            <GrDeliver className="feature-icon" />
            <h3>Timely deliveries</h3>
            <p>Fast and reliable</p>
          </div>
          <div className="feature">
            <FaRegClock className="feature-icon" />
            <h3>Live updates</h3>
            <p>Stay updated on orders</p>
          </div>
        </section>

        <GovernmentSchemes />
        <KnowledgeHub />
        <AppDownload />
      </div>

      {/* PREMIUM FOOTER */}
<footer className="footer">

  {/* TOP WAVE */}
  <div className="footer-wave"></div>

  <div className="footer-container">

    {/* FOOTER TOP */}
    <div className="footer-top">

      {/* BRAND */}
      <div className="footer-brand">

        <div className="brand-logo">
          🌱
        </div>

        <h2>KRISHI MITRA</h2>

        <p className="footer-tagline">
          FARM FRIEND • SMART AGRICULTURE PLATFORM
        </p>

        <p className="footer-description">
          Empowering farmers with modern technology,
          smart bidding, live weather updates,
          crop analysis, and digital farming solutions
          across India.
        </p>

      </div>

      {/* QUICK LINKS */}
      <div className="footer-column">

        <h3>Quick Links</h3>

        <a href="/">🏠 Home</a>
        <a href="/soilhealth">🌾 Soil Health</a>
        <a href="/biddingprocess">📈 Bidding Process</a>
        <a href="/profile">👤 Profile</a>
        <a href="/login">🔐 Login</a>

      </div>

      {/* SERVICES */}
      <div className="footer-column">

        <h3>Our Services</h3>

        <a href="/">☁ Weather Forecast</a>
        <a href="/">🌱 Crop Analysis</a>
        <a href="/">🏛 Government Schemes</a>
        <a href="/">🚜 Smart Farming</a>
        <a href="/">📊 Market Price Updates</a>

      </div>

      {/* CONTACT */}
      <div className="footer-column">

        <h3>Contact Us</h3>

        <p>📧 support@krishimitra.com</p>

        <p>📞 +91 9302743273</p>

        <p>
          📍 Prempur, Amrol,
          Madhya Pradesh, India
        </p>

        <div className="newsletter">
          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>
        </div>

      </div>

    </div>

    {/* FOOTER STATS */}
    <div className="footer-middle">

      <div className="footer-card">
        <h4>10K+</h4>
        <p>Farmers Connected</p>
      </div>

      <div className="footer-card">
        <h4>24/7</h4>
        <p>Customer Support</p>
      </div>

      <div className="footer-card">
        <h4>100%</h4>
        <p>Secure Platform</p>
      </div>

      <div className="footer-card">
        <h4>Live</h4>
        <p>Weather Updates</p>
      </div>

    </div>

    {/* FOOTER BOTTOM */}
    <div className="footer-bottom">

      <p>
        © 2026 KRISHI MITRA.
        All rights reserved.
      </p>

      <div className="footer-bottom-links">

        <a href="/">Privacy Policy</a>

        <a href="/">Terms & Conditions</a>

        <a href="/">Help Center</a>

      </div>

    </div>

  </div>

</footer>
    </div>
  );
}

export default HomePage;