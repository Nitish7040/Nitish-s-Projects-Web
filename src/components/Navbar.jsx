import { useState, useEffect } from 'react'

const navLinks = [
  { label: '01 / HOME', href: '#home', id: 'home' },
  { label: '02 / ABOUT', href: '#about', id: 'about' },
  { label: '03 / SKILLS', href: '#skills', id: 'skills' },
  { label: '04 / EXP', href: '#experience', id: 'experience' },
  { label: '05 / WORK', href: '#projects', id: 'projects' },
  { label: '06 / CLOUD', href: '#aws-devops', id: 'aws-devops' },
  { label: '07 / SERVICES', href: '#services', id: 'services' },
  { label: '08 / CONTACT', href: '#contact', id: 'contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map((l) => l.id)
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section)
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsOpen(false)
    const targetId = href.replace('#', '')
    const el = document.getElementById(targetId)
    if (el) {
      const yOffset = -70
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-bg/95 backdrop-blur-md border-b border-brand-border py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="group flex items-center gap-3"
          >
            <img
              src="/Nitish_Portrait.png"
              alt="Nitish Pandey"
              className="w-8 h-8 rounded border border-brand-border object-cover object-top group-hover:border-accent/50 transition-colors duration-200"
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold font-display text-text-primary tracking-tight leading-none">
                NITISH PANDEY
              </span>
              <span className="text-[10px] font-mono text-text-muted leading-none mt-1">
                MERN &amp; AWS
              </span>
            </div>
          </a>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`px-3 py-1.5 rounded text-xs font-mono tracking-wide transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-accent bg-accent/10 border border-accent/20 font-semibold'
                    : 'text-text-muted hover:text-text-primary hover:bg-brand-surface'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-primary"
            >
              Resume ↓
            </a>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-8 h-8 rounded bg-brand-surface border border-brand-border flex items-center justify-center text-text-muted hover:text-text-primary"
              aria-label="Toggle menu"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-brand-border bg-brand-surface rounded p-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`block px-3 py-2 rounded text-xs font-mono tracking-wide ${
                  activeSection === link.id
                    ? 'text-accent bg-accent/10 font-semibold'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center btn-primary mt-2"
            >
              Download Resume ↓
            </a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
