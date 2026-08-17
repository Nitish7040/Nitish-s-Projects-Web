import { useScrollReveal } from '../hooks/useScrollReveal'
import skillsData from '../data/skills'

const categoryNumbers = {
  frontend: '01 /',
  backend: '02 /',
  databases: '03 /',
  cloud: '04 /',
  devops: '05 /',
}

function Skills() {
  const [sectionRef, isVisible] = useScrollReveal()

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-brand-border"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="section-tag">03 / TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="section-title">
            SKILLS &amp; <span className="text-accent">TECHNOLOGY SYSTEM</span>
          </h2>
          <p className="section-desc">
            Core stack and working knowledge categorized across software architecture layers.
          </p>
        </div>

        {/* Technical Matrix List */}
        <div className="mt-12 space-y-6">
          {Object.entries(skillsData).map(([key, category], index) => {
            const isCloudOrDevops = key === 'cloud' || key === 'devops'

            return (
              <div
                key={key}
                className={`editorial-card p-6 sm:p-8 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: isVisible ? `${(index + 1) * 80}ms` : '0ms' }}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Category Identifier & Name */}
                  <div className="md:col-span-4 flex items-center gap-3">
                    <span className={`font-mono text-sm font-bold ${isCloudOrDevops ? 'text-cyan' : 'text-accent'}`}>
                      {categoryNumbers[key]}
                    </span>
                    <h3 className="text-lg font-bold font-display text-text-primary uppercase tracking-wide">
                      {category.label}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="md:col-span-8 flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-brand-bg border border-brand-border"
                      >
                        <span className="text-xs font-medium text-text-primary">{skill.name}</span>
                        <span className="text-[10px] font-mono text-text-muted">
                          [{skill.level}]
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
