import { useEffect, useRef, useState } from 'react'

const contactLinks = [
  {
    label: 'Call',
    value: '+91 6260866295',
    href: 'tel:+916260866295',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'nitish.pandey0005@gmail.com',
    href: 'mailto:nitish.pandey0005@gmail.com',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nitish-pandey',
    href: 'https://www.linkedin.com/in/nitish-pandey-9a6b60230/',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/Nitish7040',
    href: 'https://github.com/Nitish7040',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
]

function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="divider-line absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] md:w-[700px]" />

      <div className="max-w-5xl mx-auto relative">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-accent/30" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-accent/50 font-mono">
              Connect
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-accent/30" />
          </div>

          <h2 className="section-heading">
            <span className="text-white">Get In </span>
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading">
            Open to discussing cloud architecture, DevOps solutions, infrastructure
            automation, or opportunities to scale your systems.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              id={`contact-${link.label.toLowerCase()}`}
              href={link.href}
              target={link.label !== 'Email' && link.label !== 'Call' ? '_blank' : undefined}
              rel={link.label !== 'Email' && link.label !== 'Call' ? 'noopener noreferrer' : undefined}
              className={`group glass-card rounded-xl p-4 sm:p-5 lg:p-6 text-center hover:border-accent/15 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(0,255,65,0.06),0_2px_10px_rgba(0,0,0,0.3)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${(index + 1) * 100}ms` : '0ms' }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl mx-auto mb-4 bg-dark-800 border border-accent/8 flex items-center justify-center group-hover:bg-dark-750 group-hover:border-accent/18 group-hover:scale-110 transition-all duration-500">
                <div className="text-accent/60 group-hover:text-accent/90 transition-colors duration-300">
                  {link.icon}
                </div>
              </div>
              <h3 className="text-sm sm:text-base font-bold font-display text-white/85 mb-0.5 sm:mb-1">
                {link.label}
              </h3>
              <p className="text-[10px] sm:text-xs text-surface-300/25 group-hover:text-accent/40 transition-colors duration-300 break-all leading-relaxed font-mono">
                {link.value}
              </p>
            </a>
          ))}
        </div>

        <div
          className={`mt-12 sm:mt-16 md:mt-20 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="glass-card-elevated rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.015] to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-dark-800 border border-accent/15 flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-[0_0_25px_rgba(0,255,65,0.08)]">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-accent/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-white mb-3 sm:mb-4 tracking-tight">
                Let&apos;s Scale Your Infrastructure
              </h3>
              <p className="text-xs sm:text-sm text-surface-300/30 mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
                Whether you need cloud migration, CI/CD pipelines, or just want to chat about DevOps, I&apos;d love to connect.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="mailto:nitish.pandey0005@gmail.com" className="btn-primary w-full sm:w-auto">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Send Email
                </a>
                <a href="tel:+916260866295" className="btn-outline w-full sm:w-auto">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call Me
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer
          className={`mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-accent/[0.05] text-center transition-all duration-700 delay-[900ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[10px] sm:text-xs text-surface-300/18 tracking-wide font-mono">
            &copy; {new Date().getFullYear()} Nitish Pandey &mdash;  All rights reserved.

          </p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
