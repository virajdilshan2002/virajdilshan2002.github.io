import { Navigation } from "./components/Navigation"
import { HeroSection } from "./components/HeroSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { ContactSection } from "./components/ContactSection"
import "./index.css"

function App() {
  return (
    <div className="relative pt-20">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default App
