import { Github } from "lucide-react"

const projects = [
  {
    title: "PingMe Chat App",
    description:
      "A real-time chat application with user authentication.",
    image: "/pingme.jpg",
    technologies: ["ReactNative", "TypeScript", "Expo", "Firebase"],
    githubUrl: "https://github.com/virajdilshan2002/PingMe.git"
  },
  {
    title: "PingMe Chat App",
    description:
      "A real-time chat application with user authentication.",
    image: "/pingme.jpg",
    technologies: ["ReactNative", "TypeScript", "Expo", "Firebase"],
    githubUrl: "https://github.com/virajdilshan2002/PingMe.git"
  },{
    title: "PingMe Chat App",
    description:
      "A real-time chat application with user authentication.",
    image: "/pingme.jpg",
    technologies: ["ReactNative", "TypeScript", "Expo", "Firebase"],
    githubUrl: "https://github.com/virajdilshan2002/PingMe.git"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, UI/UX design, and
            problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-5 cursor-default">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={18} />
                    Code
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
