import { useEffect, useState } from 'react'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleScrollTo = (targetId) => {
    const el = document.getElementById(targetId)
    if (el) {
      const yOffset = -70
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-brand-border grid-pattern"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Header Metadata Rule */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-brand-border mb-10 text-xs font-mono text-text-muted uppercase tracking-widest">
            <span className="text-accent flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              01 / INTRODUCTION
            </span>
            <span>BASED IN INDIA</span>
            <span>AVAILABLE FOR FULL-STACK &amp; CLOUD ROLES</span>
          </div>

          {/* Editorial Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column — Big Display Heading */}
            <div className="lg:col-span-8 space-y-4">
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-text-primary tracking-tight leading-[1.05]">
                MERN STACK <br />
                <span className="text-accent">DEVELOPER</span>
              </h1>
              <p className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-text-secondary/80 tracking-tight">
                Building scalable web applications &amp; cloud-ready systems.
              </p>
            </div>

            {/* Right Column — Narrative & Primary CTA */}
            <div className="lg:col-span-4 space-y-6 lg:pt-2">
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                I design and implement full-stack products using <strong className="text-text-primary font-medium">React, Node.js, Express, MongoDB, and PostgreSQL</strong>, while leveraging <strong className="text-cyan font-medium">AWS &amp; DevOps practices</strong> for automated build, deployment, and cloud infrastructure.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id="cta-view-projects"
                  onClick={() => handleScrollTo('projects')}
                  className="btn-primary"
                >
                  View Work →
                </button>
                <button
                  onClick={() => handleScrollTo('contact')}
                  className="btn-secondary"
                >
                  Contact →
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bar of Hero — Tech Badges */}
          <div className="mt-14 pt-8 border-t border-brand-border flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Core Technologies:</span>
            <div className="flex flex-wrap items-center gap-2">
              {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'AWS S3', 'Docker', 'CI/CD'].map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
