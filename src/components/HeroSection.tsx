import { Download} from "lucide-react"
import userImage from "../assets/images/profile.jpg"
import github from "../assets/icons/github.svg"
import linkedin from "../assets/icons/linkedin.svg"
import email from "../assets/icons/email.svg"

export function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/viraj_dilshan_cv.pdf"
    link.download = "Viraj_Dilshan_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="min-h-screen bg-zinc-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-blue-400">Viraj Dilshan</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-zinc-400">Full Stack Software Engineer</h2>
            </div>

            <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
              Passionate software engineer with expertise in full-stack development, modern web technologies, and
              creating innovative solutions. I love building applications that make a difference and solving complex
              problems with clean, efficient code.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-blue-600/50 blur-xl opacity-100 animate-pulse"></div>
                 <button
                    onClick={handleDownloadCV}
                    className="inline-flex cursor-pointer items-center gap-2 px-6 py-3 rounded-3xl font-medium
                              text-white border border-white/30 
                              bg-white/10 backdrop-blur-md 
                              shadow-lg hover:shadow-xl
                              transition-all duration-300 ease-in-out hover:bg-blue-400/90"
                  >
                    <Download size={20} className="animate-bounce-slow" />
                    Get My Resume
                  </button>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://github.com/virajdilshan2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors duration-200"
                >
                  <img src={github} alt="GitHub" className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors duration-200"
                >
                  <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
                </a>
                <a
                  href="mailto:virajdilshan2019@gmail.com"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors duration-200"
                >
                  <img src={email} alt="Email" className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4 cursor-default">
              <h3 className="text-xl font-semibold">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {["React", "ReactNative", "TypeScript", "JavaScript", "Node.js", "Java", "Python", "SpringBoot", "MySQL", "MongoDB", "Firebase", "Git"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-rotate-border bg-conic/[from_var(--border-angle)] from-black via-blue-500 to-black p-px rounded-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-black to-blue-600 blur-3xl opacity-70 animate-spin-slow"></div>


              <div className="w-80 h-80 rounded-full overflow-hidden  border-blue-400/90 shadow-2xl relative z-10">
                <img
                  src={userImage}
                  alt="Viraj Dilshan"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>  
        </div>
      </div>
    </section>
  )
}
