import { useScrollReveal } from '../hooks/useScrollReveal'
import { experience } from '../data/experience'

function Experience() {
  const [sectionRef, isVisible] = useScrollReveal()

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-brand-border"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="section-tag">04 / CAREER HISTORY</span>
          </div>
          <h2 className="section-title">
            WORK <span className="text-accent">EXPERIENCE</span>
          </h2>
          <p className="section-desc">
            Professional internship contribution delivering cloud pipelines and API infrastructure.
          </p>
        </div>

        {/* Editorial Resume Timeline */}
        <div className="mt-12 space-y-8">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className={`editorial-card p-6 sm:p-8 space-y-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${(index + 1) * 100}ms` : '0ms' }}
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-brand-border font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded bg-accent/10 text-accent font-semibold">
                    {exp.period}
                  </span>
                  <span className="text-text-muted">LOCATION: {exp.location}</span>
                </div>
                <span className="text-cyan font-semibold">FULL-STACK &amp; CLOUD DEPLOYMENT</span>
              </div>

              {/* Title & Company */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-text-primary">
                  {exp.role}
                </h3>
                <p className="text-sm font-mono text-accent mt-1">@ {exp.company}</p>
              </div>

              {/* Summary narrative */}
              <p className="text-sm text-text-secondary leading-relaxed">
                {exp.description}
              </p>

              {/* Key Contributions */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-semibold uppercase text-text-muted tracking-wider">
                  Key Responsibilities &amp; Contributions:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-text-secondary leading-relaxed">
                      <span className="text-accent font-mono text-[10px] mt-0.5">—</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="pt-4 border-t border-brand-border flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-text-muted mr-2">TECH:</span>
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
