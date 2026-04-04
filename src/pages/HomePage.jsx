import useReveal from '../hooks/useReveal'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import GitHubCommitGraph from '../components/GitHubCommitGraph'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  useReveal()

  return (
    <div className="app-shell">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <GitHubCommitGraph />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
