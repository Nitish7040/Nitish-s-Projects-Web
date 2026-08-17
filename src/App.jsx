import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import AwsDevops from './components/AwsDevops'
import Services from './components/Services'
import GithubSection from './components/GithubSection'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-brand-bg select-none sm:select-auto">
      <CustomCursor />
      <div className="mesh-gradient fixed inset-0 pointer-events-none" />
      <div className="dot-pattern fixed inset-0 opacity-30 pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <AwsDevops />
          <Services />
          <GithubSection />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
