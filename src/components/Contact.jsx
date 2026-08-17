import { useScrollReveal } from '../hooks/useScrollReveal'

const contactItems = [
  {
    label: 'EMAIL',
    value: '704nitishpandey@gmail.com',
    href: 'mailto:704nitishpandey@gmail.com',
    detail: 'Direct mail response',
  },
  {
    label: 'PHONE',
    value: '+91 6260866295',
    href: 'tel:+916260866295',
    detail: 'Voice call / WhatsApp',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/nitish-pandey62',
    href: 'https://www.linkedin.com/in/nitish-pandey62',
    detail: 'Professional network',
  },
  {
    label: 'GITHUB',
    value: 'github.com/Nitish7040',
    href: 'https://github.com/Nitish7040',
    detail: 'Repositories & activity',
  },
]

function Contact() {
  const [sectionRef, isVisible] = useScrollReveal()

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-brand-border"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="section-tag">08 / GET IN TOUCH</span>
          </div>
          <h2 className="section-title">
            CONTACT &amp; <span className="text-accent">COMMUNICATION</span>
          </h2>
          <p className="section-desc">
            Open to software engineering roles, full-stack development projects, and technical discussions.
          </p>
        </div>

        {/* Direct Communication Grid */}
        <div className={`mt-12 space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label !== 'EMAIL' && item.label !== 'PHONE' ? '_blank' : undefined}
                rel={item.label !== 'EMAIL' && item.label !== 'PHONE' ? 'noopener noreferrer' : undefined}
                className="editorial-card-interactive p-6 flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-accent mb-2">
                    <span>{item.label}</span>
                    <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-text-primary group-hover:text-accent transition-colors duration-200 block break-all">
                    {item.value}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-text-muted border-t border-brand-border pt-3 block">
                  {item.detail}
                </span>
              </a>
            ))}
          </div>

          {/* Action CTAs Banner */}
          <div className="editorial-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold font-display text-text-primary">
                Let&apos;s Connect &amp; Build Together
              </h3>
              <p className="text-xs font-mono text-text-muted mt-1">
                Reach out via email or phone for immediate response.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a href="mailto:704nitishpandey@gmail.com" className="btn-primary w-full sm:w-auto text-center">
                Send Email →
              </a>
              <a href="tel:+916260866295" className="btn-secondary w-full sm:w-auto text-center">
                Call Me →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
