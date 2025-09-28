import { Download, Github, Linkedin, Mail } from "lucide-react"
import userImage from "../assets/images/profile.jpg"

export function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv-document.jpg"
    link.download = "Viraj_Dilshan_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-blue-400">Viraj Dilshan</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-300">Software Engineer</h2>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Passionate software engineer with expertise in full-stack development, modern web technologies, and
              creating innovative solutions. I love building applications that make a difference and solving complex
              problems with clean, efficient code.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <Download size={20} />
                Download CV
              </button>

              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:viraj@example.com"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Technologies I work with:</h3>
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Docker", "Git"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
                <img src={userImage} alt="Viraj Dilshan" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
