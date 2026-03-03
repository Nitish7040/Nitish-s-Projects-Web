import { useEffect, useState } from 'react'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCTA = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const techStack = ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Git']

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="hero-glow top-1/4 -left-48 animate-float" />
      <div className="hero-glow bottom-1/4 -right-48 animate-float" style={{ animationDelay: '3s' }} />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-700/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>
        </div>

        <h1
          className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-white">Hi, I&apos;m </span>
          <span className="gradient-text">Nitish Pandey</span>
        </h1>

        <p
          className={`text-xl sm:text-2xl md:text-3xl font-display font-semibold text-surface-200/80 mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Frontend Developer &amp; React Specialist
        </p>

        <p
          className={`text-base sm:text-lg text-surface-200/50 max-w-2xl mx-auto mb-10 leading-relaxed text-balance transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          I craft elegant, high-performance web experiences with modern technologies.
          Passionate about clean code, intuitive design, and building products
          that make a real impact.
        </p>

        <div
          className={`flex flex-wrap items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button id="cta-view-projects" onClick={handleCTA} className="btn-primary">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            View My Projects
          </button>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-outline">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Get In Touch
          </a>
        </div>

        <div
          className={`flex flex-wrap items-center justify-center gap-3 transition-all duration-1000 delay-[900ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-lg glass-card text-sm text-primary-300/80 font-medium hover:text-primary-200 hover:border-primary-400/30 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-surface-200/40 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-surface-200/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero
