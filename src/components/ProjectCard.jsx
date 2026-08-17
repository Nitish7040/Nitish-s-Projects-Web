function ProjectCard({ project, onCaseStudy, variant = 'medium' }) {
  const isCyan = project.category === 'aws' || project.category === 'devops'

  // ── 1. FEATURED HERO CARD (Full Width Horizontal) ──
  if (variant === 'featured') {
    return (
      <div className="editorial-card p-6 sm:p-8 md:p-10 border-accent/30 relative overflow-hidden group">
        <div className="flex items-center justify-between border-b border-brand-border pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-[11px] font-mono font-semibold uppercase rounded bg-accent/10 text-accent border border-accent/20">
              01 / FEATURED PROJECT
            </span>
            <span className="text-xs font-mono text-text-muted">MERN + AWS S3</span>
          </div>
          <span className="text-xs font-mono text-text-dim">2026</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-text-primary group-hover:text-accent transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {project.description}
            </p>
            {project.caseStudy && (
              <div className="p-4 rounded bg-brand-bg border border-brand-border text-xs text-text-muted space-y-1 font-mono">
                <span className="text-accent block font-semibold">ARCHITECTURE NOTE:</span>
                <p>{project.caseStudy.architecture}</p>
              </div>
            )}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-pill font-mono text-[11px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between space-y-6">
            <div className="w-full editorial-card p-4 bg-brand-bg space-y-2 font-mono text-xs text-text-muted">
              <div className="flex justify-between border-b border-brand-border pb-2">
                <span>AUTH:</span>
                <span className="text-text-primary">JWT Token</span>
              </div>
              <div className="flex justify-between border-b border-brand-border pb-2">
                <span>STORAGE:</span>
                <span className="text-accent">AWS S3 Pre-signed URLs</span>
              </div>
              <div className="flex justify-between">
                <span>DATABASE:</span>
                <span className="text-text-primary">PostgreSQL</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project.caseStudy && (
                <button onClick={onCaseStudy} className="btn-primary">
                  View Case Study →
                </button>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── 2. MEDIUM EDITORIAL CARD (2-Column Grid) ──
  if (variant === 'medium') {
    return (
      <div className={`editorial-card p-6 flex flex-col justify-between h-full group ${isCyan ? 'editorial-card-cyan' : ''}`}>
        <div>
          <div className="flex items-center justify-between border-b border-brand-border pb-3 mb-4">
            <span className={`text-[10px] font-mono font-semibold uppercase tracking-wider ${isCyan ? 'text-cyan' : 'text-accent'}`}>
              {project.category.toUpperCase()}
            </span>
            {project.isDemo && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-surface-2 text-text-muted border border-brand-border">
                CONCEPT DEMO
              </span>
            )}
          </div>

          <h3 className="text-lg font-bold font-display text-text-primary mb-2 group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-pill text-[10px]">
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-3 border-t border-brand-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-text-muted hover:text-text-primary">
                  GitHub ↗
                </a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-accent hover:underline">
                  Live Demo ↗
                </a>
              )}
            </div>
            {project.caseStudy && (
              <button onClick={onCaseStudy} className="text-xs font-mono text-accent hover:underline">
                Case Study →
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  // ── 3. MICRO TECHNICAL CARD (3-Column Grid) ──
  return (
    <div className="editorial-card p-5 flex flex-col justify-between h-full group">
      <div>
        <div className="flex items-center justify-between mb-3 text-[10px] font-mono">
          <span className="text-cyan">{project.category.toUpperCase()}</span>
          {project.isDemo && <span className="text-text-dim">DEMO</span>}
        </div>
        <h4 className="text-sm font-bold font-display text-text-primary mb-2 group-hover:text-cyan transition-colors duration-200">
          {project.title}
        </h4>
        <p className="text-xs text-text-secondary leading-relaxed mb-3 line-clamp-3">
          {project.description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-pill text-[9px] px-2 py-0.5">
              {tech}
            </span>
          ))}
        </div>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-text-muted hover:text-text-primary block pt-2 border-t border-brand-border">
            GitHub Code ↗
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
