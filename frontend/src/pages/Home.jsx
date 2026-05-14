import { useEffect } from "react";

import api from "../api/axios";
import { initializeHomeDom } from "../home/homeDom";

export default function Home() {
  useEffect(() => {
    const cleanup = initializeHomeDom({ api });
    return cleanup;
  }, []);

  return (
    <>
{/* TOP BAR */}
    <div className="topbar">
      <div className="topbar-inner">
        <div>
          <i className="fa-solid fa-location-dot" aria-hidden="true"></i> House-04,
          Road-11, Sector-01, Uttara, Dhaka-1230, Bangladesh
        </div>
        <div className="topbar-links">
          <a href="tel:+8801729447129"><i className="fa-solid fa-phone" aria-hidden="true"></i> +880
            1729-447129</a>
          <span>|</span>
          <a href="mailto:info@smartaircargo.net"><i className="fa-solid fa-envelope" aria-hidden="true"></i>
            info@smartaircargo.net</a>
          <span>|</span>
          <a href="http://smartaircargo.net" target="_blank"><i className="fa-solid fa-globe" aria-hidden="true"></i>
            smartaircargo.net</a>
        </div>
      </div>
    </div>

    {/* NAVBAR */}
    <nav className="navbar" id="navbar">
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <img id="nav-logo-img" src="" alt="SACS Logo" />
          <div className="nav-logo-text">
            <div className="brand">Smart Air Cargo Services</div>
            <div className="sub">SACS · Bangladesh</div>
          </div>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#network">Airport Network</a>
          <a href="#dac-cgp">Origin Hubs</a>
          <a href="#tracking">Track</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#contact-us" className="nav-cta">Get a Quote</a>
        </div>
        <button className="nav-ham" id="ham-btn" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    {/* MOBILE MENU */}
    <div id="mobile-menu">
      <button className="close-btn" id="close-menu" aria-label="Close menu">
        <i className="fa-solid fa-xmark" aria-hidden="true"></i>
      </button>
      <a href="#about" onClick={() => window.closeMobileMenu?.()}>About</a>
      <a href="#services" onClick={() => window.closeMobileMenu?.()}>Services</a>
      <a href="#network" onClick={() => window.closeMobileMenu?.()}>Airport Network</a>
      <a href="#dac-cgp" onClick={() => window.closeMobileMenu?.()}>Origin Hubs</a>
      <a href="#tracking" onClick={() => window.closeMobileMenu?.()}>Track</a>
      <a href="#contact-us" onClick={() => window.closeMobileMenu?.()}>Contact Us</a>
      <a
        href="#contact-us"
        onClick={() => window.closeMobileMenu?.()}
        style={{color: "var(--crimson)"}}
        >Get a Quote</a>
    </div>

    {/* HERO */}
    <section className="hero" id="hero">
      <div className="hero-bg-pattern"></div>
      <div className="hero-gradient"></div>
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-dot"></div>
            <span>Bangladesh's Best Freight Forwarder</span>
          </div>
          <h1 className="hero-title">
            MOVING<br />
            <span className="accent">THE</span><br />
            <span className="ghost">WORLD</span>
          </h1>
          <div className="hero-subtitle">Air · Sea · Land</div>
          <p className="hero-desc">
            Smart Air Cargo Services connects Bangladesh to 80+ global airports.
            Precision logistics from Dhaka (DAC) and Chattogram (CGP) —
            tailored, transparent, trusted.
          </p>
          <div className="hero-actions">
            <a href="#contact-us" className="btn-primary"><i className="fa-solid fa-plane" aria-hidden="true"></i> Request a
              Quote</a>
            <a href="#network" className="btn-ghost">View Airport Network
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-logo-wrap">
            <img
              id="hero-logo-img"
              src="assets/images/hero-logo.png"
              alt="Smart Air Cargo Services Logo"
            />
          </div>
          <div className="hero-modes">
            <div className="hmode">
              <div className="hmode-icon">
                <i className="fa-solid fa-plane" aria-hidden="true"></i>
              </div>
              <div className="hmode-label">Air</div>
            </div>
            <div className="hmode">
              <div className="hmode-icon">
                <i className="fa-solid fa-ship" aria-hidden="true"></i>
              </div>
              <div className="hmode-label">Sea</div>
            </div>
            <div className="hmode">
              <div className="hmode-icon">
                <i className="fa-solid fa-truck" aria-hidden="true"></i>
              </div>
              <div className="hmode-label">Land</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-stats">
        <div className="hero-stats-inner">
          <div className="hstat">
            <div className="hstat-num">80<sup>+</sup></div>
            <div className="hstat-label">Global Airports</div>
          </div>
          <div className="hstat">
            <div className="hstat-num">24<sup>/7</sup></div>
            <div className="hstat-label">Operations</div>
          </div>
          <div className="hstat">
            <div className="hstat-num">6</div>
            <div className="hstat-label">Core Services</div>
          </div>
          <div className="hstat">
            <div className="hstat-num">100<sup>%</sup></div>
            <div className="hstat-label">Compliance</div>
          </div>
          <div className="hstat">
            <div className="hstat-num">
              5<sup><i className="fa-solid fa-star" aria-hidden="true"></i></sup>
            </div>
            <div className="hstat-label">Client Rating</div>
          </div>
        </div>
      </div>
    </section>

    {/* TICKER */}
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        <span className="ticker-item">Air Freight<span className="ticker-sep"><i className="fa-solid fa-diamond" aria-hidden="true"></i></span></span>
        <span className="ticker-item">Sea Freight<span className="ticker-sep"><i className="fa-solid fa-diamond" aria-hidden="true"></i></span></span>
        <span className="ticker-item">Customs Brokerage<span className="ticker-sep"><i className="fa-solid fa-diamond" aria-hidden="true"></i></span></span>
        <span className="ticker-item">Freight Forwarding<span className="ticker-sep"><i className="fa-solid fa-diamond" aria-hidden="true"></i></span></span>
        <span className="ticker-item">Warehousing<span className="ticker-sep"><i className="fa-solid fa-diamond" aria-hidden="true"></i></span></span>
        <span className="ticker-item">Door-to-Door Delivery<span className="ticker-sep"><i className="fa-solid fa-diamond" aria-hidden="true"></i></span></span>
        <span className="ticker-item">Real-Time Tracking<span className="ticker-sep"><i className="fa-solid fa-diamond" aria-hidden="true"></i></span></span>
        <span className="ticker-item">Supply Chain Solutions<span className="ticker-sep"><i className="fa-solid fa-diamond" aria-hidden="true"></i></span></span>
        <span className="ticker-item">Air Freight<span className="ticker-sep"><i className="fa-solid fa-diamond" aria-hidden="true"></i></span></span>
        <span className="ticker-item">Sea Freight<span className="ticker-sep"><i className="fa-solid fa-diamond" aria-hidden="true"></i></span></span>
        <span className="ticker-item">Customs Brokerage<span className="ticker-sep"><i className="fa-solid fa-diamond" aria-hidden="true"></i></span></span>
        <span className="ticker-item">Freight Forwarding<span className="ticker-sep"><i className="fa-solid fa-diamond" aria-hidden="true"></i></span></span>
        <span className="ticker-item">Warehousing<span className="ticker-sep"><i className="fa-solid fa-diamond" aria-hidden="true"></i></span></span>
        <span className="ticker-item">Door-to-Door Delivery<span className="ticker-sep"><i className="fa-solid fa-diamond" aria-hidden="true"></i></span></span>
        <span className="ticker-item">Real-Time Tracking<span className="ticker-sep"><i className="fa-solid fa-diamond" aria-hidden="true"></i></span></span>
        <span className="ticker-item">Supply Chain Solutions<span className="ticker-sep"><i className="fa-solid fa-diamond" aria-hidden="true"></i></span></span>
      </div>
    </div>

    {/* ABOUT */}
    <section className="about section-pad" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text reveal-l">
            <div className="sec-label">About SACS</div>
            <h2 className="sec-title">
              Built for <span className="crimson">Global Trade</span>
            </h2>
            <p className="sec-desc">
              Smart Air Cargo Services (SACS) is a dynamic international freight
              forwarding company headquartered in Dhaka, Bangladesh. Established
              to support private freight forwarders and logistics players, we
              specialize in delivering efficient, customized shipping solutions
              across air, sea, and land.
            </p>
            <p className="sec-desc" style={{marginTop: "14px"}}>
              Our leadership team brings decades of combined experience in
              international logistics, customs compliance, and supply chain
              management — ensuring your cargo moves with precision and care.
            </p>
            <div className="about-points">
              <div className="apoint">
                <div className="apoint-num">01</div>
                <div>
                  <h4>Global Network Reach</h4>
                  <p>
                    International carrier partnerships spanning Asia, Europe,
                    Middle East, the Americas and beyond — optimized routing on
                    every lane.
                  </p>
                </div>
              </div>
              <div className="apoint">
                <div className="apoint-num">02</div>
                <div>
                  <h4>Precision-Tailored Solutions</h4>
                  <p>
                    No template logistics. Every shipment receives a custom
                    plan, pricing model, and dedicated point of contact.
                  </p>
                </div>
              </div>
              <div className="apoint">
                <div className="apoint-num">03</div>
                <div>
                  <h4>Real-Time Cargo Visibility</h4>
                  <p>
                    Modern tracking systems deliver complete transparency — know
                    where your shipment is, at every checkpoint, at any hour.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-visual reveal-r">
            <div className="about-card">
              <svg
                className="about-world"
                viewBox="0 0 800 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                {/* Globe grid lines */}
                <ellipse
                  cx="400"
                  cy="210"
                  rx="370"
                  ry="190"
                  stroke="rgba(26,86,219,.15)"
                  strokeWidth="1"
                />
                <ellipse
                  cx="400"
                  cy="210"
                  rx="250"
                  ry="190"
                  stroke="rgba(26,86,219,.1)"
                  strokeWidth="1"
                />
                <ellipse
                  cx="400"
                  cy="210"
                  rx="130"
                  ry="190"
                  stroke="rgba(26,86,219,.07)"
                  strokeWidth="1"
                />
                <line
                  x1="30"
                  y1="210"
                  x2="770"
                  y2="210"
                  stroke="rgba(26,86,219,.12)"
                  strokeWidth="1"
                />
                <line
                  x1="400"
                  y1="20"
                  x2="400"
                  y2="400"
                  stroke="rgba(26,86,219,.08)"
                  strokeWidth="1"
                />
                <ellipse
                  cx="400"
                  cy="210"
                  rx="370"
                  ry="80"
                  stroke="rgba(26,86,219,.07)"
                  strokeWidth="1"
                />
                <ellipse
                  cx="400"
                  cy="210"
                  rx="370"
                  ry="150"
                  stroke="rgba(26,86,219,.05)"
                  strokeWidth="1"
                />
                {/* Simplified continents */}
                {/* Europe */}
                <path
                  d="M370 100 C390 88 430 92 445 108 C460 124 455 148 440 158 C425 168 395 165 382 150 C368 135 355 112 370 100Z"
                  fill="rgba(30,77,183,.22)"
                />
                {/* Asia (large) */}
                <path
                  d="M450 90 C510 72 600 78 650 100 C700 122 710 160 690 180 C670 200 630 212 590 208 C550 204 510 190 490 175 C470 160 450 140 445 120 C440 100 442 95 450 90Z"
                  fill="rgba(30,77,183,.22)"
                />
                {/* S Asia / Bangladesh area */}
                <path
                  d="M560 155 C575 148 595 152 600 162 C605 172 598 185 585 190 C572 195 558 188 554 178 C550 168 548 162 560 155Z"
                  fill="rgba(123,28,46,.6)"
                />
                {/* Africa */}
                <path
                  d="M355 165 C372 155 400 160 410 175 C420 190 418 220 408 240 C398 260 375 272 360 265 C345 258 335 235 333 212 C331 188 340 175 355 165Z"
                  fill="rgba(30,77,183,.18)"
                />
                {/* N America */}
                <path
                  d="M120 110 C155 95 210 100 235 120 C260 140 265 175 248 198 C231 221 195 232 165 225 C135 218 108 195 100 168 C92 141 90 125 120 110Z"
                  fill="rgba(30,77,183,.2)"
                />
                {/* S America */}
                <path
                  d="M175 250 C198 238 225 242 238 260 C251 278 248 308 235 325 C222 342 198 348 180 340 C162 332 150 308 152 285 C154 262 155 262 175 250Z"
                  fill="rgba(30,77,183,.16)"
                />
                {/* Australia */}
                <path
                  d="M640 245 C670 232 705 238 718 255 C731 272 724 295 706 305 C688 315 662 310 650 295 C638 280 613 258 640 245Z"
                  fill="rgba(30,77,183,.18)"
                />
                {/* Route lines from Bangladesh */}
                <path
                  d="M582 168 Q520 100 440 115"
                  stroke="rgba(123,28,46,.5)"
                  strokeWidth="1.2"
                  strokeDasharray="5,4"
                  fill="none"
                />
                <path
                  d="M582 168 Q640 120 690 155"
                  stroke="rgba(123,28,46,.4)"
                  strokeWidth="1.2"
                  strokeDasharray="5,4"
                  fill="none"
                />
                <path
                  d="M582 168 Q480 200 415 220"
                  stroke="rgba(123,28,46,.35)"
                  strokeWidth="1.2"
                  strokeDasharray="5,4"
                  fill="none"
                />
                <path
                  d="M582 168 Q400 200 220 180"
                  stroke="rgba(123,28,46,.3)"
                  strokeWidth="1"
                  strokeDasharray="5,4"
                  fill="none"
                />
                <path
                  d="M582 168 Q550 240 700 272"
                  stroke="rgba(123,28,46,.3)"
                  strokeWidth="1"
                  strokeDasharray="5,4"
                  fill="none"
                />
                {/* Airport dots */}
                <circle cx="582" cy="168" r="8" fill="#c0394f" />
                <circle
                  cx="582"
                  cy="168"
                  r="14"
                  fill="none"
                  stroke="#c0394f"
                  strokeWidth="1.5"
                  opacity=".4"
                />
                <circle cx="440" cy="115" r="4" fill="#1e4db7" />
                <circle cx="690" cy="155" r="4" fill="#1e4db7" />
                <circle cx="415" cy="220" r="4" fill="#1e4db7" />
                <circle cx="220" cy="180" r="4" fill="#1e4db7" />
                <circle cx="700" cy="272" r="4" fill="#1e4db7" />
                <circle cx="160" cy="145" r="4" fill="#1e4db7" />
                <text
                  x="576"
                  y="158"
                  fontSize="9"
                  fill="rgba(255,255,255,.8)"
                  fontFamily="DM Mono,monospace">
                  DAC
                </text>
              </svg>
            </div>
            <div className="about-stats">
              <div className="astat">
                <div className="astat-num">80+</div>
                <div className="astat-lbl">Airports</div>
              </div>
              <div className="astat">
                <div className="astat-num">24/7</div>
                <div className="astat-lbl">Support</div>
              </div>
              <div className="astat">
                <div className="astat-num">
                  5<i className="fa-solid fa-star" aria-hidden="true"></i>
                </div>
                <div className="astat-lbl">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* SERVICES */}
    <section className="services section-pad" id="services">
      <div className="container">
        <div className="services-header reveal">
          <div>
            <div className="sec-label">What We Do</div>
            <h2 className="sec-title">
              Core <span className="crimson">Services</span>
            </h2>
          </div>
          <p className="sec-desc">
            Comprehensive logistics built for the pace and complexity of modern
            global trade.
          </p>
        </div>
        <div className="services-grid">
          <div className="srv featured reveal d1">
            <div className="srv-pct">50%</div>
            <div className="srv-icon">
              <i className="fa-solid fa-plane" aria-hidden="true"></i>
            </div>
            <h3>Air Freight</h3>
            <p>
              Our flagship service — time-critical, high-value, and perishable
              goods transported internationally via priority carrier
              partnerships with the fastest transit times available.
            </p>
            <div className="srv-bar">
              <div className="srv-bar-fill" data-w="50"></div>
            </div>
            <span className="srv-tag">50% of Operations · Priority</span>
          </div>
          <div className="srv reveal d2">
            <div className="srv-pct">25%</div>
            <div className="srv-icon">
              <i className="fa-solid fa-box" aria-hidden="true"></i>
            </div>
            <h3>Freight Forwarding</h3>
            <p>
              End-to-end coordination of complex international movements —
              carrier booking, routing optimization, documentation, and
              compliance all handled under one roof.
            </p>
            <div className="srv-bar">
              <div className="srv-bar-fill" data-w="25"></div>
            </div>
            <span className="srv-tag">25% · Full-Service</span>
          </div>
          <div className="srv reveal d3">
            <div className="srv-pct">15%</div>
            <div className="srv-icon">
              <i className="fa-solid fa-ship" aria-hidden="true"></i>
            </div>
            <h3>Sea Freight</h3>
            <p>
              FCL and LCL services for cost-effective bulk cargo to global
              ports. Ideal for non-urgent, heavy, or oversized shipments
              requiring sea transport.
            </p>
            <div className="srv-bar">
              <div className="srv-bar-fill" data-w="15"></div>
            </div>
            <span className="srv-tag">FCL · LCL · Breakbulk</span>
          </div>
          <div className="srv reveal d2">
            <div className="srv-pct">5%</div>
            <div className="srv-icon">
              <i className="fa-solid fa-clipboard-list" aria-hidden="true"></i>
            </div>
            <h3>Customs Brokerage</h3>
            <p>
              Expert handling of import/export documentation, tariff
              classification, and regulatory compliance — ensuring swift,
              penalty-free customs clearance every time.
            </p>
            <div className="srv-bar">
              <div className="srv-bar-fill" data-w="5"></div>
            </div>
            <span className="srv-tag">Import · Export · Compliance</span>
          </div>
          <div className="srv reveal d3">
            <div className="srv-icon">
              <i className="fa-solid fa-warehouse" aria-hidden="true"></i>
            </div>
            <h3>Warehousing</h3>
            <p>
              Secure, climate-controlled storage in Dhaka with comprehensive
              inventory management — short and long-term solutions designed to
              fit your supply chain requirements.
            </p>
            <div className="srv-bar">
              <div className="srv-bar-fill" data-w="100"></div>
            </div>
            <span className="srv-tag">Secure · Managed · Flexible</span>
          </div>
          <div className="srv reveal d4">
            <div className="srv-icon">
              <i className="fa-solid fa-truck" aria-hidden="true"></i>
            </div>
            <h3>Trucking & Last-Mile</h3>
            <p>
              Reliable domestic road transportation from port or warehouse to
              any final destination in Bangladesh — on time, handled with care,
              fully tracked.
            </p>
            <div className="srv-bar">
              <div className="srv-bar-fill" data-w="100"></div>
            </div>
            <span className="srv-tag">Last-Mile · Door-to-Door</span>
          </div>
        </div>
      </div>
    </section>

    {/* WORLD MAP / AIRPORT NETWORK */}
    <section className="map-section" id="network">
      <div className="map-section-bg"></div>
      <div className="container">
        <div className="map-header reveal">
          <div className="sec-label">Global Airport Network</div>
          <h2 className="sec-title" style={{color: "#fff"}}>
            Worldwide <span style={{color: "#c0394f"}}>Airport Coverage</span>
          </h2>
          <p className="sec-desc">
            We handle shipments to and from 80+ international airports across 6
            continents — with dedicated services originating from Dhaka (DAC)
            and Chattogram (CGP).
          </p>
        </div>

        {/* Filters */}
        <div className="map-filters reveal d1">
          <input
            type="text"
            className="filter-input"
            id="search-input"
            placeholder="Search airport code, city or country…"
            aria-label="Search airports"
          />
          <select
            className="filter-select"
            id="region-select"
            aria-label="Filter by region">
            <option value="all">All Regions</option>
            <option value="South Asia">South Asia</option>
            <option value="Southeast Asia">Southeast Asia</option>
            <option value="East Asia">East Asia</option>
            <option value="Middle East">Middle East</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="Central Asia">Central Asia</option>
          </select>
          <select
            className="filter-select"
            id="type-select"
            aria-label="Filter by type">
            <option value="all">All Types</option>
            <option value="air">Air Freight</option>
            <option value="sea">Sea Freight</option>
            <option value="both">Air + Sea</option>
          </select>
          <button className="filter-btn" onClick={() => window.applyFilters?.()}>Filter</button>
          <button className="filter-clear" onClick={() => window.clearFilters?.()}>Clear</button>
        </div>

        {/* SVG World Map */}
        <div className="map-container reveal d2">
          <div id="map-tooltip">
            <div className="tt-code" id="tt-code"></div>
            <div className="tt-city" id="tt-city"></div>
            <div className="tt-country" id="tt-country"></div>
            <div className="tt-region" id="tt-region"></div>
            <div className="tt-home" id="tt-home" style={{display: "none"}}>
              <i className="fa-solid fa-plane" aria-hidden="true"></i> Hub Origin
              Airport
            </div>
          </div>
          <svg
            id="world-svg"
            viewBox="0 0 1000 520"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="World map showing SACS airport network">
            <defs>
              <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(30,77,183,0.06)" />
                <stop offset="100%" stopColor="rgba(13,27,62,0)" />
              </radialGradient>
            </defs>

            {/* Ocean background */}
            <rect width="1000" height="520" fill="rgba(13,27,62,0.5)" rx="4" />

            {/* Lat/Lon grid */}
            <g stroke="rgba(255,255,255,0.04)" strokeWidth="0.5">
              <line x1="0" y1="130" x2="1000" y2="130" />
              <line x1="0" y1="260" x2="1000" y2="260" />
              <line x1="0" y1="390" x2="1000" y2="390" />
              <line x1="167" y1="0" x2="167" y2="520" />
              <line x1="334" y1="0" x2="334" y2="520" />
              <line x1="500" y1="0" x2="500" y2="520" />
              <line x1="667" y1="0" x2="667" y2="520" />
              <line x1="834" y1="0" x2="834" y2="520" />
            </g>

            {/* Equator */}
            <line
              x1="0"
              y1="268"
              x2="1000"
              y2="268"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
              strokeDasharray="8,6"
            />

            {/* =========== CONTINENTS (simplified polygons) =========== */}
            {/* Europe */}
            <path
              d="M440 100 C460 88 500 90 520 100 C535 110 540 125 535 140 C530 155 515 162 498 160 C481 158 460 150 450 138 C440 126 425 112 440 100Z"
              fill="rgba(30,77,183,0.18)"
              stroke="rgba(30,77,183,0.2)"
              strokeWidth="0.5"
            />
            {/* UK/Ireland */}
            <path
              d="M425 95 C432 88 440 90 442 98 C444 106 438 114 430 116 C422 118 416 110 415 103 C414 96 420 100 425 95Z"
              fill="rgba(30,77,183,0.15)"
              stroke="rgba(30,77,183,0.15)"
              strokeWidth="0.5"
            />
            {/* Scandinavia */}
            <path
              d="M470 68 C482 58 500 60 508 72 C516 84 512 98 500 102 C488 106 472 100 466 88 C460 76 460 76 470 68Z"
              fill="rgba(30,77,183,0.15)"
              stroke="rgba(30,77,183,0.12)"
              strokeWidth="0.5"
            />

            {/* Africa */}
            <path
              d="M455 165 C478 152 510 155 525 172 C540 189 542 218 535 242 C528 266 512 282 490 290 C468 298 445 288 434 268 C423 248 420 218 424 196 C428 174 435 178 455 165Z"
              fill="rgba(30,77,183,0.16)"
              stroke="rgba(30,77,183,0.18)"
              strokeWidth="0.5"
            />
            {/* Madagascar */}
            <path
              d="M545 260 C550 252 558 255 560 264 C562 273 557 282 550 284 C543 286 537 278 537 270 C537 262 542 267 545 260Z"
              fill="rgba(30,77,183,0.1)"
              strokeWidth="0.5"
            />

            {/* Middle East / Arabian Peninsula */}
            <path
              d="M542 142 C562 130 590 135 602 148 C614 161 610 182 596 192 C582 202 558 198 546 184 C534 170 525 154 542 142Z"
              fill="rgba(30,77,183,0.14)"
              stroke="rgba(30,77,183,0.16)"
              strokeWidth="0.5"
            />

            {/* South Asia (Bangladesh highlighted) */}
            <path
              d="M610 148 C640 135 680 140 698 158 C716 176 714 200 698 215 C682 230 652 232 630 220 C608 208 595 185 600 168 C605 151 606 155 610 148Z"
              fill="rgba(30,77,183,0.18)"
              stroke="rgba(30,77,183,0.2)"
              strokeWidth="0.5"
            />
            {/* Bangladesh region highlight */}
            <path
              d="M664 175 C672 168 684 170 688 180 C692 190 685 200 675 202 C665 204 656 196 655 186 C654 176 658 180 664 175Z"
              fill="rgba(123,28,46,0.5)"
            />

            {/* Southeast Asia */}
            <path
              d="M695 175 C720 162 758 165 775 180 C792 195 788 218 770 228 C752 238 722 235 705 220 C688 205 672 188 695 175Z"
              fill="rgba(30,77,183,0.16)"
              stroke="rgba(30,77,183,0.18)"
              strokeWidth="0.5"
            />
            {/* Indonesian archipelago (simplified) */}
            <path
              d="M710 235 C730 228 755 232 762 242 C769 252 762 265 748 268 C734 271 715 264 708 252 C701 240 694 242 710 235Z"
              fill="rgba(30,77,183,0.12)"
              strokeWidth="0.5"
            />

            {/* East Asia / China / Japan */}
            <path
              d="M730 100 C775 82 840 85 870 108 C900 131 895 162 870 178 C845 194 800 194 768 178 C736 162 715 140 718 122 C721 104 720 110 730 100Z"
              fill="rgba(30,77,183,0.18)"
              stroke="rgba(30,77,183,0.2)"
              strokeWidth="0.5"
            />
            {/* Japan */}
            <path
              d="M870 108 C882 98 896 102 900 114 C904 126 895 138 882 140 C869 142 858 132 856 120 C854 108 862 116 870 108Z"
              fill="rgba(30,77,183,0.18)"
              stroke="rgba(30,77,183,0.2)"
              strokeWidth="0.5"
            />
            {/* South Korea */}
            <path
              d="M844 128 C854 122 864 126 866 136 C868 146 860 154 850 154 C840 154 832 146 832 136 C832 126 836 133 844 128Z"
              fill="rgba(30,77,183,0.16)"
            />

            {/* Central Asia */}
            <path
              d="M560 105 C596 92 650 95 670 112 C690 129 682 148 660 156 C638 164 600 158 578 142 C556 126 527 118 560 105Z"
              fill="rgba(30,77,183,0.13)"
              stroke="rgba(30,77,183,0.15)"
              strokeWidth="0.5"
            />

            {/* Russia (simplified top) */}
            <path
              d="M470 55 C540 38 680 38 780 55 C820 64 840 78 830 90 C810 88 760 80 700 78 C640 76 570 78 520 88 C500 88 460 80 440 70 C430 62 440 62 470 55Z"
              fill="rgba(30,77,183,0.12)"
              stroke="rgba(30,77,183,0.12)"
              strokeWidth="0.5"
            />

            {/* North America */}
            <path
              d="M120 85 C175 65 250 68 285 92 C320 116 325 158 305 185 C285 212 240 224 200 218 C160 212 128 188 110 160 C92 132 72 105 120 85Z"
              fill="rgba(30,77,183,0.18)"
              stroke="rgba(30,77,183,0.2)"
              strokeWidth="0.5"
            />
            {/* Central America / Caribbean */}
            <path
              d="M210 218 C228 210 248 215 255 228 C262 241 252 255 238 258 C224 261 208 250 205 237 C202 224 195 225 210 218Z"
              fill="rgba(30,77,183,0.12)"
            />
            {/* Greenland */}
            <path
              d="M258 35 C278 22 308 25 318 40 C328 55 318 72 300 76 C282 80 260 68 254 53 C248 38 244 46 258 35Z"
              fill="rgba(30,77,183,0.10)"
            />

            {/* South America */}
            <path
              d="M215 268 C248 252 288 255 308 272 C328 289 328 328 310 352 C292 376 256 386 228 376 C200 366 180 338 178 308 C176 278 185 284 215 268Z"
              fill="rgba(30,77,183,0.16)"
              stroke="rgba(30,77,183,0.18)"
              strokeWidth="0.5"
            />

            {/* Australia */}
            <path
              d="M795 290 C838 272 888 278 912 302 C936 326 928 362 904 378 C880 394 840 390 815 370 C790 350 758 308 795 290Z"
              fill="rgba(30,77,183,0.18)"
              stroke="rgba(30,77,183,0.2)"
              strokeWidth="0.5"
            />
            {/* New Zealand */}
            <path
              d="M925 355 C935 345 948 348 952 360 C956 372 948 382 936 384 C924 386 914 376 914 364 C914 352 918 363 925 355Z"
              fill="rgba(30,77,183,0.14)"
            />

            {/* =========== ROUTE LINES from DAC (678, 184) =========== */}
            <g id="route-lines">
              {/* DAC to DXB */}
              <path className="route-line" d="M678,184 Q620,140 588,168" />
              {/* DAC to SIN */}
              <path className="route-line" d="M678,184 Q720,200 748,208" />
              {/* DAC to BKK */}
              <path className="route-line" d="M678,184 Q720,188 730,194" />
              {/* DAC to KUL */}
              <path className="route-line" d="M678,184 Q730,208 742,220" />
              {/* DAC to HKG */}
              <path className="route-line" d="M678,184 Q740,155 796,162" />
              {/* DAC to PVG */}
              <path className="route-line" d="M678,184 Q745,140 820,135" />
              {/* DAC to NRT */}
              <path className="route-line" d="M678,184 Q770,120 882,125" />
              {/* DAC to ICN */}
              <path className="route-line" d="M678,184 Q766,130 852,140" />
              {/* DAC to DOH */}
              <path className="route-line" d="M678,184 Q630,155 600,162" />
              {/* DAC to AUH */}
              <path className="route-line" d="M678,184 Q615,152 592,158" />
              {/* DAC to FRA */}
              <path className="route-line" d="M678,184 Q570,110 486,116" />
              {/* DAC to LHR */}
              <path className="route-line" d="M678,184 Q550,102 432,105" />
              {/* DAC to CDG */}
              <path className="route-line" d="M678,184 Q560,106 462,112" />
              {/* DAC to JFK */}
              <path className="route-line" d="M678,184 Q520,120 240,145" />
              {/* DAC to ORD */}
              <path className="route-line" d="M678,184 Q500,130 200,148" />
              {/* DAC to LAX */}
              <path className="route-line" d="M678,184 Q600,100 145,132" />
              {/* DAC to SYD */}
              <path className="route-line" d="M678,184 Q760,280 862,340" />
              {/* DAC to MEL */}
              <path className="route-line" d="M678,184 Q750,290 848,358" />
              {/* DAC to NBO */}
              <path className="route-line" d="M678,184 Q600,230 530,268" />
              {/* DAC to JNB */}
              <path className="route-line" d="M678,184 Q580,260 504,298" />
              {/* DAC to DEL */}
              <path className="route-line" d="M678,184 Q655,168 635,162" />
              {/* DAC to BOM */}
              <path className="route-line" d="M678,184 Q648,188 624,196" />
            </g>

            {/* =========== AIRPORT DOTS =========== */}
            <g id="airport-dots">
              {/* All airports will be rendered by JS */}
            </g>
          </svg>
        </div>

        <div className="map-result-info" id="result-info">
          Showing <span id="result-count">80</span> airports across 6 continents
        </div>

        {/* Airport List Grid */}
        <div className="airport-list reveal d3">
          <div className="al-header">
            <div className="al-title">All Covered Airports</div>
            <div className="al-count" id="al-count">80 airports</div>
          </div>
          <div className="al-grid" id="al-grid">
            {/* Populated by JS */}
          </div>
        </div>
      </div>
    </section>

    {/* DAC / CGP SECTION */}
    <section className="dac-sec section-pad" id="dac-cgp">
      <div className="container">
        <div className="reveal" style={{textAlign: "center", marginBottom: 0}}>
          <div className="sec-label" style={{justifyContent: "center"}}>
            Origin Hubs
          </div>
          <h2 className="sec-title">
            Shipments from <span className="crimson">Bangladesh</span>
          </h2>
          <p className="sec-desc" style={{maxWidth: "580px", margin: "0 auto"}}>
            We operate dedicated cargo services from both of Bangladesh's major
            international airports — covering air, sea, and land freight to the
            world.
          </p>
        </div>
        <div className="dac-grid reveal">
          {/* DAC */}
          <div className="dac-card dac">
            <div className="dac-card-code">DAC</div>
            <div className="dac-badge">
              <div className="dac-badge-dot"></div>
              <span>Primary Hub · Active</span>
            </div>
            <h3>Dhaka — DAC</h3>
            <div className="airport-full">
              Hazrat Shahjalal International Airport
            </div>
            <p>
              Bangladesh's busiest international airport and our primary cargo
              hub. DAC offers the widest range of direct carrier connections for
              air freight, with daily flights to major hubs in the Middle East,
              South/Southeast Asia, Europe, and beyond.
            </p>
            <div className="dac-routes">
              <div className="dac-route">
                <span>DAC</span><span className="dac-route-arrow"><i
                    className="fa-solid fa-arrow-right"
                    aria-hidden="true"></i></span><span className="dac-route-code">DXB · DOH · AUH</span>
              </div>
              <div className="dac-route">
                <span>DAC</span><span className="dac-route-arrow"><i
                    className="fa-solid fa-arrow-right"
                    aria-hidden="true"></i></span><span className="dac-route-code">SIN · BKK · KUL</span>
              </div>
              <div className="dac-route">
                <span>DAC</span><span className="dac-route-arrow"><i
                    className="fa-solid fa-arrow-right"
                    aria-hidden="true"></i></span><span className="dac-route-code">HKG · PVG · NRT</span>
              </div>
              <div className="dac-route">
                <span>DAC</span><span className="dac-route-arrow"><i
                    className="fa-solid fa-arrow-right"
                    aria-hidden="true"></i></span><span className="dac-route-code">LHR · FRA · CDG</span>
              </div>
              <div className="dac-route">
                <span>DAC</span><span className="dac-route-arrow"><i
                    className="fa-solid fa-arrow-right"
                    aria-hidden="true"></i></span><span className="dac-route-code">JFK · ORD · LAX</span>
              </div>
            </div>
          </div>
          {/* CGP */}
          <div className="dac-card cgp">
            <div className="dac-card-code">CGP</div>
            <div className="dac-badge">
              <div className="dac-badge-dot"></div>
              <span>Secondary Hub · Active</span>
            </div>
            <h3>Chattogram — CGP</h3>
            <div className="airport-full">Shah Amanat International Airport</div>
            <p>
              Bangladesh's second international gateway and a critical port city
              for sea freight. CGP provides direct air connections to regional
              hubs, while Chattogram Port handles the majority of Bangladesh's
              sea freight volumes — making it ideal for FCL/LCL shipments.
            </p>
            <div className="dac-routes">
              <div className="dac-route">
                <span>CGP</span><span className="dac-route-arrow"><i
                    className="fa-solid fa-arrow-right"
                    aria-hidden="true"></i></span><span className="dac-route-code">DXB · MCT · RUH</span>
              </div>
              <div className="dac-route">
                <span>CGP</span><span className="dac-route-arrow"><i
                    className="fa-solid fa-arrow-right"
                    aria-hidden="true"></i></span><span className="dac-route-code">DEL · BOM · CMB</span>
              </div>
              <div className="dac-route">
                <span>CGP</span><span className="dac-route-arrow"><i
                    className="fa-solid fa-arrow-right"
                    aria-hidden="true"></i></span><span className="dac-route-code">SIN · BKK (via hub)</span>
              </div>
              <div className="dac-route">
                <span>CGP</span><span className="dac-route-arrow"><i
                    className="fa-solid fa-arrow-right"
                    aria-hidden="true"></i></span><span className="dac-route-code">CTGP (Seaport)
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                  Global</span>
              </div>
              <div className="dac-route">
                <span>CGP</span><span className="dac-route-arrow"><i
                    className="fa-solid fa-arrow-right"
                    aria-hidden="true"></i></span><span className="dac-route-code">LHR · FRA (via hub)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* AIR CARGO TRACKING */}
    <section className="tracking-section section-pad" id="tracking">
      <div className="container">
        <div className="tracking-header reveal">
          <div className="sec-label">Air Cargo Tracking</div>
          <h2 className="sec-title">
            Track your <span className="crimson">shipment</span>
          </h2>
          <p className="sec-desc">
            Enter your Air Waybill (AWB) number and jump directly to the carrier tracking portal.
          </p>
        </div>

        <div className="tracking-grid">
          <div className="tracker-wrap reveal">
            <div className="bg-grid"></div>
            <div className="bg-glow"></div>

            <svg className="plane-icon" width="180" height="180" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path>
            </svg>

            <p className="header-label">Air Cargo Network</p>
            <h3 className="main-title">
              Track your shipment<br />
              across <span>200+ airlines</span>
            </h3>

            <div className="stat-row">
              <div className="stat-item">
                <span className="stat-num">200+</span>
                <span className="stat-lbl">Carriers</span>
              </div>
              <div className="divider-v"></div>
              <div className="stat-item">
                <span className="stat-num">24/7</span>
                <span className="stat-lbl">Availability</span>
              </div>
              <div className="divider-v"></div>
              <div className="stat-item">
                <span className="stat-num">Global</span>
                <span className="stat-lbl">Coverage</span>
              </div>
            </div>

            <div className="search-row">
              <input className="track-input" type="text" id="awb-input" placeholder="Enter AWB number, e.g. 180-12345678" aria-label="Air waybill number" />
              <button className="btn-primary" onClick={() => window.trackDirect?.()}>
                <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                Track direct
              </button>
              <button className="btn-secondary" onClick={() => window.trackOptions?.()}>Options</button>
            </div>

            <div className="track-message" id="track-message" role="status" aria-live="polite"></div>

            <p className="hint">
              Enter your Air Waybill (AWB) number with or without dashes — e.g.
              <strong>180-12345678</strong> or <strong>18012345678</strong>
            </p>

            <div className="airlines-row">
              <span className="airline-label">Popular:</span>
              <div className="airline-pill">Lufthansa Cargo</div>
              <div className="airline-pill">Emirates SkyCargo</div>
              <div className="airline-pill">Qatar Airways Cargo</div>
              <div className="airline-pill">Singapore Airlines</div>
              <div className="airline-pill">FedEx</div>
              <div className="airline-pill">DHL Aviation</div>
              <div className="airline-pill">Cathay Cargo</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* TEAM SECTION */}
    <section className="team-section section-pad" id="team">
      <div className="container">
        <div className="team-header reveal">
          <div className="sec-label" style={{justifyContent: "center"}}>
            Our People
          </div>
          <h2 className="sec-title">
            The <span className="crimson">Experts</span> Behind Every Shipment
          </h2>
          <p className="sec-desc">
            Our dedicated team ensures reliable and efficient air cargo services
            worldwide - experienced professionals committed to moving your
            business forward.
          </p>
        </div>

        <div className="leadership-row">
          <div
            className="team-card leadership reveal-card"
            style={{transitionDelay: "0.05s"}}
          >
            <div className="card-accent"></div>
            <div className="leadership-badge">Leadership</div>
            <div className="card-body">
              <div className="avatar-wrap">
                <div className="avatar">MA</div>
                <div className="avatar-dot"></div>
              </div>
              <div className="card-name">Mohammad Ali</div>
              <div className="card-role">
                <span className="role-dot"></span>Managing Director
              </div>
              <div className="card-divider"></div>
              <div className="card-contact">
                <a
                  href="mailto:alikhokon@smartaircargo.net"
                  className="team-contact-link">
                  <div className="team-contact-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  alikhokon@smartaircargo.net
                </a>
                <a
                  href="http://smartaircargo.net"
                  target="_blank"
                  className="team-contact-link">
                  <div className="team-contact-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path
                        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                      />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  smartaircargo.net
                </a>
              </div>
            </div>
          </div>

          <div
            className="team-card leadership reveal-card"
            style={{transitionDelay: "0.12s"}}
          >
            <div className="card-accent"></div>
            <div className="leadership-badge">Management</div>
            <div className="card-body">
              <div className="avatar-wrap">
                <div className="avatar">KH</div>
                <div className="avatar-dot"></div>
              </div>
              <div className="card-name">Khaled Hossain</div>
              <div className="card-role">
                <span className="role-dot"></span>Air Export-Import Manager
              </div>
              <div className="card-divider"></div>
              <div className="card-contact">
                <a
                  href="mailto:khaled@smartaircargo.net"
                  className="team-contact-link">
                  <div className="team-contact-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  khaled@smartaircargo.net
                </a>
                <a href="tel:+8801729447129" className="team-contact-link">
                  <div className="team-contact-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.47 2 2 0 0 1 3.55 1.25H6.6a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.4A16 16 0 0 0 15.6 16.09l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      />
                    </svg>
                  </div>
                  +880 1729-447129
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="tier-divider reveal">
          <span>Operations & Customer Team</span>
        </div>

        <div className="team-grid">
          <div className="team-card reveal-card" style={{transitionDelay: "0.08s"}}>
            <div className="card-accent"></div>
            <div className="card-body">
              <div className="avatar-wrap">
                <div className="avatar">SI</div>
                <div className="avatar-dot"></div>
              </div>
              <div className="card-name">Saiful Islam</div>
              <div className="card-role">
                <span className="role-dot"></span>Air-Sea Export-Import Ops
              </div>
              <div className="card-divider"></div>
              <div className="card-contact">
                <a
                  href="mailto:saiful@smartaircargo.net"
                  className="team-contact-link">
                  <div className="team-contact-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  saiful@smartaircargo.net
                </a>
              </div>
            </div>
          </div>

          <div className="team-card reveal-card" style={{transitionDelay: "0.16s"}}>
            <div className="card-accent"></div>
            <div className="card-body">
              <div className="avatar-wrap">
                <div className="avatar">BM</div>
                <div className="avatar-dot amber"></div>
              </div>
              <div className="card-name">Babul Mia</div>
              <div className="card-role">
                <span className="role-dot amber"></span>HSIA Supervisor
              </div>
              <div className="card-divider"></div>
              <div className="card-contact">
                <span className="no-contact">Contact via main office</span>
                <a
                  href="mailto:info@smartaircargo.net"
                  className="team-contact-link">
                  <div className="team-contact-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  info@smartaircargo.net
                </a>
              </div>
            </div>
          </div>

          <div className="team-card reveal-card" style={{transitionDelay: "0.24s"}}>
            <div className="card-accent"></div>
            <div className="card-body">
              <div className="avatar-wrap">
                <div className="avatar">SH</div>
                <div className="avatar-dot"></div>
              </div>
              <div className="card-name">Shakil</div>
              <div className="card-role">
                <span className="role-dot"></span>Customer Care, Jr. Executive
              </div>
              <div className="card-divider"></div>
              <div className="card-contact">
                <a
                  href="mailto:info@smartaircargo.net"
                  className="team-contact-link">
                  <div className="team-contact-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  info@smartaircargo.net
                </a>
                <a href="https://wa.me/8801729447129" className="team-contact-link">
                  <div className="team-contact-icon whatsapp">
                    <svg viewBox="0 0 24 24" fill="#16a34a" stroke="none">
                      <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                      />
                    </svg>
                  </div>
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>

          <div className="team-card reveal-card" style={{transitionDelay: "0.32s"}}>
            <div className="card-accent"></div>
            <div className="card-body">
              <div className="avatar-wrap">
                <div className="avatar">ON</div>
                <div className="avatar-dot"></div>
              </div>
              <div className="card-name">Onik</div>
              <div className="card-role">
                <span className="role-dot"></span>Customer Care, Sr. Executive
              </div>
              <div className="card-divider"></div>
              <div className="card-contact">
                <a
                  href="mailto:info@smartaircargo.net"
                  className="team-contact-link">
                  <div className="team-contact-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  info@smartaircargo.net
                </a>
                <a href="https://wa.me/8801729447129" className="team-contact-link">
                  <div className="team-contact-icon whatsapp">
                    <svg viewBox="0 0 24 24" fill="#16a34a" stroke="none">
                      <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                      />
                    </svg>
                  </div>
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CONTACT */}
    <section className="contact-sec section-pad" id="contact-us">
      <div className="container">
        <div className="contact-grid">
          <div className="reveal-l">
            <div className="sec-label">Get In Touch</div>
            <h2 className="sec-title">
              Let's Move <span className="crimson">Your Cargo</span>
            </h2>
            <p className="sec-desc">
              Ready to ship? Get a tailored quote within 2 hours. Our team is
              available 24/7 for urgent enquiries.
            </p>
            <div className="contact-info">
              <div className="ci">
                <div className="ci-icon">
                  <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                </div>
                <div>
                  <h5>Head Office</h5>
                  <p>
                    House-04, Road-11, Sector-01<br />Uttara, Dhaka-1230,
                    Bangladesh
                  </p>
                </div>
              </div>
              <div className="ci">
                <div className="ci-icon">
                  <i className="fa-solid fa-phone" aria-hidden="true"></i>
                </div>
                <div>
                  <h5>Phone — Khaled Hossain</h5>
                  <a href="tel:+8801729447129">+880 1729-447129</a><br /><small
                    style={{color: "var(--muted)", fontSize: "12px"}}
                    >Air Export-Import Manager</small>
                </div>
              </div>
              <div className="ci">
                <div className="ci-icon">
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                </div>
                <div>
                  <h5>Managing Director</h5>
                  <a href="mailto:alikhokon@smartaircargo.net">alikhokon@smartaircargo.net</a><br /><small style={{color: "var(--muted)", fontSize: "12px"}}
                    >Mohammad Ali</small>
                </div>
              </div>
              <div className="ci">
                <div className="ci-icon">
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                </div>
                <div>
                  <h5>General Enquiries</h5>
                  <a href="mailto:info@smartaircargo.net">info@smartaircargo.net</a>
                </div>
              </div>
              <div className="ci">
                <div className="ci-icon">
                  <i className="fa-solid fa-globe" aria-hidden="true"></i>
                </div>
                <div>
                  <h5>Website</h5>
                  <a href="http://smartaircargo.net" target="_blank">smartaircargo.net</a>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/8801729447129?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20your%20freight%20services."
              className="whatsapp-btn"
              style={{marginTop: "28px", display: "inline-flex"}}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
              WhatsApp Us Now
            </a>
          </div>
          <div className="reveal-r">
            <div className="contact-form">
              <div className="form-title">Request a Quote</div>
              <div className="form-sub">
                We'll respond within 2 hours during business hours.
              </div>
              <div className="form-grid">
                <div className="fg">
                  <label>Full Name</label><input
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                <div className="fg">
                  <label>Company</label><input type="text" placeholder="Company name" />
                </div>
              </div>
              <div className="form-grid">
                <div className="fg">
                  <label>Email</label><input
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                  />
                </div>
                <div className="fg">
                  <label>Phone / WhatsApp</label><input type="tel" placeholder="+880 …" autoComplete="tel" />
                </div>
              </div>
              <div className="fg">
                <label>Service Required</label>
                <select>
                  <option value="">Select a service</option>
                  <option>Air Freight (Import)</option>
                  <option>Air Freight (Export)</option>
                  <option>Sea Freight – FCL</option>
                  <option>Sea Freight – LCL</option>
                  <option>Freight Forwarding</option>
                  <option>Customs Brokerage</option>
                  <option>Warehousing</option>
                  <option>Trucking / Last-Mile</option>
                </select>
              </div>
              <div className="form-grid">
                <div className="fg">
                  <label>Origin Airport / Port</label><input type="text" placeholder="e.g. DAC, CGP" />
                </div>
                <div className="fg">
                  <label>Destination Airport / Port</label><input type="text" placeholder="e.g. DXB, LHR" />
                </div>
              </div>
              <div className="fg">
                <label>Cargo Details</label><textarea
                  rows="3"
                  placeholder="Commodity, weight (kg), dimensions, special requirements…"></textarea>
              </div>
              <button className="form-submit" onClick={(e) => window.submitQuote?.(e.currentTarget)}>
                Send Enquiry
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FOOTER */}
    <footer>
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#" className="nav-logo" style={{display: "inline-flex"}}>
              <img
                id="footer-logo-img"
                src=""
                alt="SACS"
                style={{width: "48px", height: "48px", objectFit: "contain", borderRadius: "50%", background: "#fff", padding: "2px", border: "1px solid rgba(255, 255, 255, 0.1)"}}
              />
              <div className="nav-logo-text">
                <div className="brand" style={{fontSize: "15px", color: "#fff"}}>
                  Smart Air Cargo Services
                </div>
                <div className="sub" style={{color: "rgba(123, 28, 46, 0.8)"}}></div>
              </div>
            </a>
            <p>
              Bangladesh's best international freight forwarder - connecting
              businesses in Dhaka and Chattogram to 140+ airports worldwide
              through air, sea, land, and customs expertise.
            </p>
            <div className="social-row">
              <a href="#" className="soc" aria-label="LinkedIn" style={{background: "#0A66C2", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
              <a href="#" className="soc" aria-label="Facebook" style={{background: "#1877F2", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="https://wa.me/8801729447129" className="soc" aria-label="WhatsApp" style={{background: "#25D366", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
            </div>
          </div>
          <div className="fc">
            <h5>Services</h5>
            <ul>
              <li><a href="#services">Air Freight</a></li>
              <li><a href="#services">Freight Forwarding</a></li>
              <li><a href="#services">Sea Freight</a></li>
              <li><a href="#services">Customs Brokerage</a></li>
              <li><a href="#services">Warehousing</a></li>
            </ul>
          </div>
          <div className="fc">
            <h5>Company</h5>
            <ul>
              <li><a href="#about">About SACS</a></li>
              <li><a href="#network">Airport Network</a></li>
              <li><a href="#dac-cgp">DAC / CGP Hubs</a></li>
              </ul>
          </div>
          <div className="fc">
            <h5>Contacts</h5>
            <ul>
              <li><a href="tel:+8801729447129"><i className="fa-solid fa-phone" aria-hidden="true"></i> +880 1729-447129</a></li>
              <li><a href="mailto:info@smartaircargo.net"><i className="fa-solid fa-envelope" aria-hidden="true"></i> info@smartaircargo.net</a></li>
              <li><a href="#"><i className="fa-solid fa-location-dot" aria-hidden="true"></i> House-04, Road-11, Sector-01, Uttara, Dhaka-1230, Bangladesh</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Smart Air Cargo Services (SACS). All rights reserved. | Powered by <a href="https://apktechbd.com" target="_blank">APK TECH BD</a></p>
          <div className="cert-row">
            <span className="cert">IATA</span>
            <span className="cert">ISO CERTIFIED</span>
            <span className="cert">BAFFA</span>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
