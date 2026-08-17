function Footer() {
  const currentYear = new Date().getFullYear()

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'WORK', href: '#projects' },
    { label: 'CLOUD', href: '#aws-devops' },
    { label: 'CONTACT', href: '#contact' },
  ]

  const handleNavClick = (href) => {
    const targetId = href.replace('#', '')
    const el = document.getElementById(targetId)
    if (el) {
      const yOffset = -70
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-brand-border bg-brand-bg font-mono text-xs text-text-muted">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-brand-border">
          {/* Brand Info */}
          <div>
            <span className="text-sm font-bold font-display text-text-primary tracking-tight block">
              NITISH PANDEY
            </span>
            <span className="text-[11px] text-text-muted mt-1 block">
              MERN Stack Developer | AWS &amp; DevOps
            </span>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-4" aria-label="Footer Navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                className="hover:text-accent transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-text-dim">
          <span>&copy; {currentYear} Nitish Pandey. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Nitish7040" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/nitish-pandey62" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary">
              LinkedIn ↗
            </a>
            <a href="mailto:704nitishpandey@gmail.com" className="hover:text-text-primary">
              704nitishpandey@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
