import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('projects')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      const sections = ['projects', 'contact']
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 140) {
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
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-xl shadow-black/30 py-2.5'
          : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); handleNavClick('#projects') }}
            className="group flex items-center gap-2.5"
          >
            <img
              src="/Nitish_final.jpg"
              alt="Nitish Pandey"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-accent/20 bg-dark-800 object-cover object-top group-hover:border-accent/40 group-hover:shadow-[0_0_18px_rgba(0,255,65,0.1)] transition-all duration-300"
            />
            <span className="text-lg sm:text-xl font-bold font-display text-white tracking-tight">
              Nitish <span className="gradient-text">Pandey</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`relative px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent bg-accent/[0.07]'
                    : 'text-surface-300/50 hover:text-accent/70 hover:bg-accent/[0.04]'
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gradient-to-r from-accent/80 to-primary-400/60 rounded-full" />
                )}
              </a>
            ))}
          </div>

          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-9 h-9 rounded-lg bg-dark-800 border border-accent/10 hover:bg-dark-750 hover:border-accent/20 flex items-center justify-center transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-[18px] h-3.5 relative flex flex-col justify-between">
              <span className={`block h-[2px] bg-accent/80 rounded-full transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block h-[2px] bg-accent/80 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`block h-[2px] bg-accent/80 rounded-full transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </div>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-48 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass-card-elevated rounded-xl p-2 space-y-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent bg-accent/[0.07]'
                    : 'text-surface-300/40 hover:text-accent/70 hover:bg-accent/[0.04]'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${activeSection === link.href.slice(1) ? 'bg-accent' : 'bg-surface-300/15'}`} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
