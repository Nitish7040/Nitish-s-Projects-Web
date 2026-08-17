import { useScrollReveal } from '../hooks/useScrollReveal'
import { education } from '../data/experience'

function About() {
  const [sectionRef, isVisible] = useScrollReveal()

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-brand-border"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="section-tag">02 / ABOUT ME</span>
          </div>
          <h2 className="section-title">
            ENGINEERING &amp; <span className="text-accent">DEVELOPMENT FOCUS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mt-12 items-start">
          {/* Left Column — Portrait + Education Card */}
          <div
            className={`lg:col-span-5 space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Framed Photo */}
            <div className="editorial-card p-2 max-w-sm">
              <div className="relative aspect-square overflow-hidden rounded bg-brand-surface border border-brand-border">
                <img
                  src="/Nitish_Portrait.png"
                  alt="Nitish Pandey"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Education Card */}
            {education.map((edu) => (
              <div key={edu.id} className="editorial-card p-5 max-w-sm">
                <div className="flex items-center justify-between border-b border-brand-border pb-3 mb-3">
                  <span className="text-xs font-mono text-accent uppercase tracking-wider">EDUCATION</span>
                  <span className="text-xs font-mono text-text-muted">{edu.period}</span>
                </div>
                <h3 className="text-base font-bold font-display text-text-primary">{edu.degree}</h3>
                <p className="text-xs font-mono text-text-secondary mt-0.5">{edu.field}</p>
                <p className="text-xs text-text-muted mt-2">{edu.institution}</p>
                <div className="mt-3 pt-3 border-t border-brand-border flex items-center justify-between text-xs font-mono">
                  <span className="text-text-muted">LOCATION: {edu.location}</span>
                  <span className="text-accent font-semibold">CGPA: {edu.cgpa}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column — Narrative & Technical Philosophy */}
          <div
            className={`lg:col-span-7 space-y-6 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="editorial-card p-6 sm:p-8 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-text-primary">
                Full-Stack Architecture Meets Cloud Deployment
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed">
                <p>
                  I am a Computer Science &amp; Engineering student focusing on building scalable full-stack applications. My core expertise centers on the <strong className="text-text-primary font-medium">MERN stack (MongoDB, Express, React, Node.js)</strong> alongside relational databases like <strong className="text-text-primary font-medium">PostgreSQL</strong>.
                </p>
                <p>
                  Rather than viewing development in isolation, my work incorporates practical <strong className="text-cyan font-medium">AWS and DevOps practices</strong>. From automating CI/CD release pipelines with GitHub Actions to hosting on AWS S3 and CloudFront CDN, I understand how applications transition from local development into reliable, production-ready systems.
                </p>
                <p>
                  I prioritize clean architecture, strict component scoping, RESTful API design, and accessible interfaces over decorative trends.
                </p>
              </div>

              {/* Quick Highlight Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-brand-border font-mono text-center">
                <div>
                  <span className="block text-2xl font-bold text-accent">10+</span>
                  <span className="text-[10px] text-text-muted uppercase">Projects</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-cyan">6 MO</span>
                  <span className="text-[10px] text-text-muted uppercase">Internship</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-text-primary">MERN</span>
                  <span className="text-[10px] text-text-muted uppercase">Primary Stack</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-accent">AWS</span>
                  <span className="text-[10px] text-text-muted uppercase">Cloud Platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
