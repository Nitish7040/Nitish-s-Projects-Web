import { useEffect } from 'react'

function ProjectModal({ project, onClose }) {
  const cs = project.caseStudy

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!cs) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Case study for ${project.title}`}
    >
      {/* Dark backdrop */}
      <div className="absolute inset-0 bg-[#070A0F]/85 backdrop-blur-sm" />

      {/* Modal dialog container */}
      <div
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto editorial-card p-6 sm:p-8 md:p-10 border-brand-border-light shadow-2xl z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded bg-brand-surface border border-brand-border flex items-center justify-center text-text-muted hover:text-text-primary hover:border-accent/40 transition-colors duration-200"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="border-b border-brand-border pb-6 mb-6">
          <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-2">
            <span>05 / CASE STUDY</span>
            {project.isDemo && <span className="text-text-muted">— CONCEPT DEMO</span>}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-text-primary mb-3">
            {project.title}
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-pill text-[11px]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Content Sections */}
        <div className="space-y-6 font-sans">
          {/* Problem */}
          {cs.problem && (
            <div className="space-y-1.5">
              <h3 className="text-xs font-mono font-bold uppercase text-accent tracking-wider">
                01 / THE PROBLEM
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">{cs.problem}</p>
            </div>
          )}

          {/* Solution */}
          {cs.solution && (
            <div className="space-y-1.5">
              <h3 className="text-xs font-mono font-bold uppercase text-accent tracking-wider">
                02 / THE SOLUTION
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">{cs.solution}</p>
            </div>
          )}

          {/* Architecture */}
          {cs.architecture && (
            <div className="space-y-1.5">
              <h3 className="text-xs font-mono font-bold uppercase text-cyan tracking-wider">
                03 / SYSTEM ARCHITECTURE
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed font-mono text-xs p-3 rounded bg-brand-bg border border-brand-border">
                {cs.architecture}
              </p>
            </div>
          )}

          {/* Key Features */}
          {project.features && (
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase text-text-primary tracking-wider">
                04 / KEY FEATURES
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-secondary">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent font-mono">—</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges */}
          {cs.challenges && (
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase text-secondary tracking-wider">
                05 / ENGINEERING CHALLENGES
              </h3>
              <ul className="space-y-1.5 text-xs text-text-secondary">
                {cs.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-secondary font-mono text-[10px]">{String(i + 1).padStart(2, '0')}.</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Deployment */}
          {cs.deployment && (
            <div className="space-y-1.5">
              <h3 className="text-xs font-mono font-bold uppercase text-cyan tracking-wider">
                06 / DEPLOYMENT PIPELINE
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">{cs.deployment}</p>
            </div>
          )}

          {/* What I Learned */}
          {cs.learned && (
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase text-text-primary tracking-wider">
                07 / KEY TAKEAWAYS
              </h3>
              <ul className="space-y-1 text-xs text-text-secondary">
                {cs.learned.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent font-mono">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-brand-border flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                GitHub Repository ↗
              </a>
            )}
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Live Demo ↗
              </a>
            )}
          </div>
          <button onClick={onClose} className="btn-ghost text-xs">
            Close [Esc]
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
