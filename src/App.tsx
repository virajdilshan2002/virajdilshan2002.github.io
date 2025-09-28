import { Navigation } from "./components/Navigation"
import { HeroSection } from "./components/HeroSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { ContactSection } from "./components/ContactSection"
import "./App.css"

function App() {
  return (
    <div className="relative">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default App
