import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    num: '01',
    title: 'FULL-STACK APPLICATION DEVELOPMENT',
    description: 'Building complete web products using React, Node.js, Express, MongoDB, and PostgreSQL with RESTful API architecture.',
  },
  {
    num: '02',
    title: 'REST API & BACKEND ARCHITECTURE',
    description: 'Designing scalable backend APIs with JWT authentication, role authorization, database schemas, and input validation.',
  },
  {
    num: '03',
    title: 'AWS CLOUD DEPLOYMENT',
    description: 'Configuring cloud hosting using Amazon S3 static hosting, CloudFront CDN edge distribution, and EC2 instances.',
  },
  {
    num: '04',
    title: 'CI/CD PIPELINE AUTOMATION',
    description: 'Automating build, test, and release workflows with GitHub Actions for reliable deployment automation.',
  },
  {
    num: '05',
    title: 'RESPONSIVE WEB ENGINEERING',
    description: 'Designing accessible, high-performance web interfaces engineered for desktop, tablet, and mobile displays.',
  },
]

function Services() {
  const [sectionRef, isVisible] = useScrollReveal()

  return (
    <section
      id="services"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-brand-border"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="section-tag">07 / SERVICES</span>
          </div>
          <h2 className="section-title">
            TECHNICAL <span className="text-accent">SERVICES</span>
          </h2>
          <p className="section-desc">
            Direct development capabilities and technical contributions I offer.
          </p>
        </div>

        {/* Services Editorial List */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.num}
              className={`editorial-card p-6 sm:p-8 space-y-3 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${(index + 1) * 80}ms` : '0ms' }}
            >
              <div className="flex items-center justify-between border-b border-brand-border pb-3">
                <span className="font-mono text-xs font-bold text-accent">{service.num} /</span>
                <span className="text-[10px] font-mono text-text-muted">DEVELOPMENT OFFERING</span>
              </div>
              <h3 className="text-base font-bold font-display text-text-primary tracking-tight">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
