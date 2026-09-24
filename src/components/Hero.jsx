import { useEffect, useState, useRef, useCallback } from 'react'
import gsap from 'gsap'

const ROLES = [
  { line1: 'MERN STACK', line2: 'DEVELOPER', accentClass: 'text-accent' },
  { line1: 'CLOUD & DEVOPS', line2: 'ENGINEER', accentClass: 'text-cyan' },
]

const CYCLE_DURATION = 3.5 // seconds between transitions

function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const timelineRef = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const animateSwap = useCallback((nextIndex) => {
    if (timelineRef.current) timelineRef.current.kill()

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveIndex(nextIndex)
      },
    })
    timelineRef.current = tl

    // Slide out current text
    tl.to(line1Ref.current, {
      y: -40,
      opacity: 0,
      duration: 0.4,
      ease: 'power3.in',
    })
    tl.to(
      line2Ref.current,
      {
        y: -40,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.in',
      },
      '<0.05'
    )

    // Swap text content mid-animation
    tl.call(() => {
      if (line1Ref.current) line1Ref.current.textContent = ROLES[nextIndex].line1
      if (line2Ref.current) {
        line2Ref.current.textContent = ROLES[nextIndex].line2
        // Swap accent color
        ROLES.forEach((r) => line2Ref.current.classList.remove(r.accentClass))
        line2Ref.current.classList.add(ROLES[nextIndex].accentClass)
      }
    })

    // Reset position below and slide in
    tl.set(line1Ref.current, { y: 40 })
    tl.set(line2Ref.current, { y: 40 })

    tl.to(line1Ref.current, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out',
    })
    tl.to(
      line2Ref.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
      },
      '<0.08'
    )
  }, [])

  useEffect(() => {
    // Start the cycling interval after a brief initial delay
    const startDelay = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => {
          const next = (prev + 1) % ROLES.length
          animateSwap(next)
          return prev // actual update happens in onComplete
        })
      }, CYCLE_DURATION * 1000)
    }, 2000) // wait 2s after page load before first swap

    return () => {
      clearTimeout(startDelay)
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (timelineRef.current) timelineRef.current.kill()
    }
  }, [animateSwap])

  const handleScrollTo = (targetId) => {
    const el = document.getElementById(targetId)
    if (el) {
      const yOffset = -70
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-brand-border grid-pattern"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Header Metadata Rule */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-brand-border mb-10 text-xs font-mono text-text-muted uppercase tracking-widest">
            <span className="text-accent flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              01 / INTRODUCTION
            </span>
            <span>BASED IN INDIA</span>
            <span>AVAILABLE FOR FULL-STACK &amp; CLOUD ROLES</span>
          </div>

          {/* Editorial Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column — Big Display Heading with animated role swap */}
            <div className="lg:col-span-8 space-y-4">
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-text-primary tracking-tight leading-[1.05] overflow-hidden">
                <span ref={line1Ref} className="block will-change-transform">
                  {ROLES[activeIndex].line1}
                </span>
                <span
                  ref={line2Ref}
                  className={`block will-change-transform ${ROLES[activeIndex].accentClass}`}
                >
                  {ROLES[activeIndex].line2}
                </span>
              </h1>
              <p className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-text-secondary/80 tracking-tight">
                Building scalable web applications &amp; cloud-ready systems.
              </p>
            </div>

            {/* Right Column — Narrative & Primary CTA */}
            <div className="lg:col-span-4 space-y-6 lg:pt-2">
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                I design and implement full-stack products using <strong className="text-text-primary font-medium">React, Node.js, Express, MongoDB, and PostgreSQL</strong>, while leveraging <strong className="text-cyan font-medium">AWS &amp; DevOps practices</strong> for automated build, deployment, and cloud infrastructure.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id="cta-view-projects"
                  onClick={() => handleScrollTo('projects')}
                  className="btn-primary"
                >
                  View Work →
                </button>
                <button
                  onClick={() => handleScrollTo('contact')}
                  className="btn-secondary"
                >
                  Contact →
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bar of Hero — Tech Badges */}
          <div className="mt-14 pt-8 border-t border-brand-border flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Core Technologies:</span>
            <div className="flex flex-wrap items-center gap-2">
              {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'AWS S3', 'Docker', 'CI/CD'].map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
