import { useState } from "react"
import { Menu, X } from "lucide-react"
import userImage from "../assets/images/profile.jpg"
import "../App.css"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-90/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Profile */}
          <div className="flex items-center space-x-3">
            <img
              src={userImage}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
            />
            <div>
              <h1 className="text-white font-semibold text-lg">Viraj Dilshan</h1>
              <p className="text-zinc-500 text-sm">Full Stack Software Engineer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                item.name === "Contact" ? (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="bg-green-500 text-white hover:text-black hover:bg-green-400 px-4 cursor-pointer py-2 rounded-3xl text-sm font-bold transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-white hover:bg-gray-700 px-4 cursor-pointer py-2 rounded-3xl text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-md"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
