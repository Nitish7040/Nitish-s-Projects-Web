import { useScrollReveal } from '../hooks/useScrollReveal'

function Resume() {
  const [sectionRef, isVisible] = useScrollReveal()

  return (
    <section
      id="resume"
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-brand-border"
      ref={sectionRef}
    >
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="editorial-card p-8 sm:p-10 text-center space-y-5">
          <div className="inline-block px-3 py-1 rounded bg-accent/10 border border-accent/20 font-mono text-xs text-accent uppercase tracking-wider">
            CURRICULUM VITAE
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-display text-text-primary">
            Review Professional Experience &amp; Qualifications
          </h3>

          <p className="text-xs sm:text-sm text-text-secondary max-w-lg mx-auto leading-relaxed">
            Download the official PDF resume detailing project engineering, internship responsibilities, and technical stack proficiency.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Download Resume ↓
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              View Resume PDF ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
