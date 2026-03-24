import './index.css'
import useReveal from './hooks/useReveal'
import Cursor from './components/Cursor'
import ParticleCanvas from './components/ParticleCanvas'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/next"

function App() {
  useReveal()

  return (
    <div>
      <Cursor />
      <ParticleCanvas />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  )
}

export default App