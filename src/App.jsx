import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  CalendarCheck,
  ChevronRight,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'
import {
  differentiators,
  footerColumns,
  homeHeroCards,
  homeHeroStats,
  homepageServices,
  metrics,
  navItems,
  problems,
  resources,
  servicePages,
} from './content'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <>
      <ScrollToTop />
      <SiteShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/freight-audit-payment" element={<ServicePage page={servicePages.freight} />} />
          <Route path="/parcel-spend-management" element={<ServicePage page={servicePages.parcel} />} />
          <Route path="/honeybee-tms" element={<ServicePage page={servicePages.honeybee} />} />
        </Routes>
      </SiteShell>
    </>
  )
}

function ScrollToTop() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [hash, pathname])

  return null
}

function SiteShell({ children }) {
  return (
    <div className="site-shell">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="CTSI-Global homepage">
        <span className="brand-mark" aria-hidden="true">
          <span className="brand-monogram">CT</span>
          <span className="brand-vector brand-vector-one"></span>
          <span className="brand-vector brand-vector-two"></span>
        </span>
        <span className="brand-copy">
          <span className="brand-text">CTSI Global</span>
          <span className="brand-subline">Logistics Intelligence</span>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          item.path.includes('#') ? (
            <Link key={item.label} to={item.path}>
              {item.label}
            </Link>
          ) : (
            <NavLink key={item.label} to={item.path}>
              {item.label}
            </NavLink>
          )
        ))}
      </nav>

      <div className="header-actions">
        <Link className="button button-primary" to="/#contact">
          <CalendarCheck size={18} />
          Book a Demo
        </Link>
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-panel ${open ? 'is-open' : ''}`}>
        {navItems.map((item) => (
          item.path.includes('#') ? (
            <Link key={item.label} to={item.path} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ) : (
            <NavLink key={item.label} to={item.path} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          )
        ))}
        <Link className="button button-primary" to="/#contact" onClick={() => setOpen(false)}>
          Book a Demo
        </Link>
      </div>
    </header>
  )
}

function HomePage() {
  useGsapReveal()

  return (
    <main>
      <section className="home-hero">
        <div className="hero-media" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=2200&q=84"
            alt=""
          />
        </div>
        <div className="container hero-layout">
          <div className="hero-copy reveal">
            <span className="eyebrow">Global logistics intelligence partner</span>
            <h1>One intelligence layer for global logistics.</h1>
            <p>
              Unify freight audit, parcel spend management, transportation execution, and strategic logistics consulting with one global partner built for complex supply chains.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/#contact">
                Talk to a Logistics Expert
                <ArrowRight size={18} />
              </Link>
              <Link className="button button-secondary" to="/#benchmark">
                Benchmark My Spend
              </Link>
            </div>
          </div>

          <div className="hero-system reveal">
            <div className="system-orbit">
              <span>Audit</span>
              <span>Parcel</span>
              <span>TMS</span>
              <span>Data</span>
            </div>
            <div className="hero-card-grid">
              {homeHeroCards.map(({ label, value, icon: Icon }) => (
                <div className="hero-mini-card" key={label}>
                  <Icon size={20} />
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-stat-strip">
          {homeHeroStats.map(([title, text]) => (
            <div key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section service-overview" id="benchmark">
        <div className="container">
          <div className="ecosystem-board reveal">
            <div className="ecosystem-copy">
              <span className="eyebrow">One ecosystem</span>
              <h2>Smarter logistics performance, connected end to end.</h2>
              <p>
                CTSI-Global brings spend control, execution technology, and expert logistics intelligence into one operating model.
              </p>
            </div>
            <div className="ecosystem-pulse" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="service-lanes">
            {homepageServices.map(({ title, text, cta, path, icon: Icon }, index) => (
              <Link className="service-lane reveal" to={path} key={title}>
                <span className="card-index">0{index + 1}</span>
                <span className="lane-icon"><Icon size={24} /></span>
                <span className="lane-content">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </span>
                <span className="text-link">
                  {cta}
                  <ChevronRight size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="container split-layout">
          <div className="sticky-media reveal">
            <img
              src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1400&q=84"
              alt="Warehouse aisle with pallets and logistics operations"
            />
            <span>Operational clarity at global scale</span>
          </div>
          <div className="stacked-content">
            <SectionHeader
              eyebrow="Problems we solve"
              title="Remove the friction that keeps supply chains reactive."
              text="The design keeps each problem commercially specific while making it easy for visitors to find the route that matches their responsibility."
              align="left"
            />
            <div className="problem-list">
              {problems.map(({ title, text, icon: Icon }) => (
                <article className="problem-item reveal" key={title}>
                  <Icon size={24} />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <div className="why-editorial reveal">
            <span className="eyebrow">Why CTSI-Global</span>
            <h2>Enterprise-proven, modern by design.</h2>
            <p>
              A flexible logistics partner for teams that need technology, data, and human expertise to move together.
            </p>
          </div>
          <div className="why-grid">
            {differentiators.map(({ title, text, icon: Icon }, index) => (
              <article className="why-card reveal" key={title}>
                <div className="why-card-top">
                  <span>0{index + 1}</span>
                  <Icon size={24} />
                </div>
                <div className="why-card-body">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                {index === 0 && (
                  <div className="why-card-signals" aria-label="Global complexity signals">
                    <span>Global controls</span>
                    <span>Regional flexibility</span>
                    <span>Connected data</span>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <MetricsSection />
      <ResourcesSection />
      <ContactCta />
    </main>
  )
}

function ServicePage({ page }) {
  useGsapReveal()

  return (
    <main>
      <section className="service-hero">
        <div className="container service-hero-grid">
          <div className="service-hero-copy reveal">
            <span className="eyebrow">{page.eyebrow}</span>
            <h1>{page.displayTitle || page.title}</h1>
            <p>{page.subtitle}</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/#contact">
                {page.primaryCta}
                <ArrowRight size={18} />
              </Link>
              <Link className="button button-secondary" to="/#benchmark">
                {page.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="service-hero-media reveal">
            <img src={page.heroImage} alt="" />
            <div className="service-media-panel">
              <span>CTSI-Global ecosystem</span>
              <strong>{page.eyebrow}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section statement-section">
        <div className="container statement-grid">
          <div className="statement-visual reveal">
            <div className="statement-label">
              <Sparkles size={24} />
              <span>Value proposition</span>
            </div>
            <div className="statement-graphic" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="statement-signals">
              {page.proof.slice(0, 3).map((item, index) => (
                <span key={item}>
                  <small>0{index + 1}</small>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="statement-copy reveal">
            <h2>{page.statement}</h2>
            <p>{page.body}</p>
          </div>
        </div>
      </section>

      <section className="section capability-section">
        <div className="container capability-layout">
          <div className="capability-intro reveal">
            <span className="eyebrow">Core capabilities</span>
            <h2>Built around the work your teams do every day.</h2>
            <p>
              Each capability connects operational execution with cleaner data, stronger controls, and faster decisions.
            </p>
          </div>
          <div className="capability-flow">
            {page.capabilities.map(([title, text, Icon], index) => (
              <article className="capability-card reveal" key={title}>
                <div className="capability-card-meta">
                  <span>0{index + 1}</span>
                  <Icon size={24} />
                </div>
                <div className="capability-card-copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section insight-section">
        <div className="container insight-layout">
          <div className="insight-copy reveal">
            <span className="eyebrow">Strategic advantage</span>
            <h2>{page.differentiatorTitle}</h2>
            <p>{page.differentiatorText}</p>
            {page.note && <div className="editor-note">{page.note}</div>}
          </div>
          <div className="proof-panel reveal">
            <span>{page.proofTitle}</span>
            {page.proof.map((item) => (
              <div className="proof-row" key={item}>
                <CheckIcon />
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta primary={page.closingPrimary} secondary={page.closingSecondary} />
    </main>
  )
}

function MetricsSection() {
  return (
    <section className="section metrics-section">
      <div className="container metrics-layout">
        <div>
          <span className="eyebrow">Global scale. Practical impact.</span>
          <h2>Built for complex networks with real operational consequences.</h2>
        </div>
        <div className="metric-list">
          {metrics.map((metric) => (
            <div className="metric-row reveal" key={metric}>
              <CheckIcon />
              <span>{metric}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="validation-note">Validate latest commercial metrics before publishing.</p>
    </section>
  )
}

function ResourcesSection() {
  return (
    <section className="section resources-section" id="resources">
      <div className="container">
        <SectionHeader
          eyebrow="Resources"
          title="Insight for the teams modernizing logistics performance."
          text="Resource cards give the future CMS or blog section a consistent visual language without making the homepage feel like a landing page template."
        />
        <div className="resource-grid">
          {resources.map((resource) => (
            <article className="resource-card reveal" key={resource.title}>
              <span>{resource.type}</span>
              <h3>{resource.title}</h3>
              <p>{resource.text}</p>
              <a className="text-link" href="#contact">
                Read more
                <ChevronRight size={18} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactCta({ primary = 'Book a Demo', secondary = 'Benchmark My Spend' }) {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-panel reveal">
        <div>
          <span className="eyebrow">Start with the first benchmark</span>
          <h2>Turn logistics complexity into a clear next move.</h2>
          <p>
            Give prospects one confident action: talk with CTSI-Global about current freight, parcel, and transportation execution opportunities.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:sales@ctsi-global.com">
            {primary}
            <ArrowRight size={18} />
          </a>
          <a className="button button-secondary light" href="mailto:sales@ctsi-global.com">
            {secondary}
          </a>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={`section-header ${align === 'left' ? 'align-left' : ''} reveal`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div>
          <Link className="brand footer-brand" to="/">
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-monogram">CT</span>
              <span className="brand-vector brand-vector-one"></span>
              <span className="brand-vector brand-vector-two"></span>
            </span>
            <span className="brand-copy">
              <span className="brand-text">CTSI Global</span>
              <span className="brand-subline">Logistics Intelligence</span>
            </span>
          </Link>
          <p>
            One global logistics intelligence partner combining freight audit, parcel spend management, TMS technology, strategic data, and expert consulting.
          </p>
        </div>
        <div className="footer-columns">
          {footerColumns.map(([heading, links]) => (
            <div key={heading}>
              <strong>{heading}</strong>
              {links.map((link) => (
                <a href="#contact" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Copyright 1996-2026 CTSI-Global. All rights reserved.</span>
        <span>Confirm exact legal footer before launch.</span>
      </div>
    </footer>
  )
}

function CheckIcon() {
  return (
    <span className="check-icon" aria-hidden="true">
      <ArrowRight size={15} />
    </span>
  )
}

function useGsapReveal() {
  const location = useLocation()
  const hasAnimated = useRef(false)

  useEffect(() => {
    hasAnimated.current = true
    const context = gsap.context(() => {
      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 28 },
          {
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 86%',
              once: true,
            },
          },
        )
      })
    })

    return () => context.revert()
  }, [location.pathname])

  return hasAnimated
}

export default App
