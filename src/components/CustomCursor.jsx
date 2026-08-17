import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

function CustomCursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(hover: none)').matches) return

    const cursor = cursorRef.current
    const dot = dotRef.current
    if (!cursor || !dot) return

    // Quick setters for performance
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.25, ease: 'power3.out' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.25, ease: 'power3.out' })
    const dotXTo = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power2.out' })
    const dotYTo = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power2.out' })

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true)
      xTo(e.clientX)
      yTo(e.clientY)
      dotXTo(e.clientX)
      dotYTo(e.clientY)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      const isInteractive = target.closest('a, button, input, textarea, .editorial-card-interactive, [role="button"], label')
      setIsHovered(!!isInteractive)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [isVisible])

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null
  }

  return (
    <div className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Outer Spring Ring */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ease-out ${
          isHovered
            ? 'w-12 h-12 border-accent bg-accent/10 scale-125 shadow-[0_0_20px_rgba(245,197,66,0.3)]'
            : 'w-8 h-8 border-accent/40 bg-transparent scale-100'
        }`}
      />

      {/* Inner Fast Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent transition-transform duration-200 ${
          isHovered ? 'w-1.5 h-1.5 scale-75' : 'w-2 h-2 scale-100'
        }`}
      />
    </div>
  )
}

export default CustomCursor
