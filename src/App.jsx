import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-dark-950">
      <div className="mesh-gradient fixed inset-0 pointer-events-none" />
      <div className="dot-pattern fixed inset-0 opacity-30 pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App
