import { ExternalLink, Github, Code2, Zap, Database, Plane, FileText, Gamepad2} from 'lucide-react';

const projects = [
  {
    title: "University Accomodation system",
    description:
      "A university accommodation management system that allows students to apply for hostel rooms, view their application status, and manage their profiles. Admins can review applications and assign rooms.",
    tech: ["Node.js", "Express", "React", "MySql"],
    github: "https://github.com/AbhijeetNagar56/University-Database-Management-System",
    live: "https://university-database.onrender.com",
    status: "Live",
    icon: <Database />,
  },
  {
    title: "Travel Decision Engine",
    description:
      "A multi-factor decision intelligence system that ranks countries using environmental indicators, healthcare infrastructure, advisories, and personalized risk tolerance scoring.",
    tech: ["Node.js", "Express", "APIs", "TypeScript"],
    github: "https://github.com/AbhijeetNagar56/Travel-Decision-Engine",
    live: "https://travel-decision-engine.onrender.com/",
    status: "Live",
    icon: <Plane />,
  },
  {
    title: "Pdf-merge",
    description:
      "A pdf-merging web application.",
    tech: ["Node.js", "Express", "multer"],
    github: "https://github.com/AbhijeetNagar56/merge-pdf",
    live: "https://merge-pdf-34qj.onrender.com/",
    status: "Live",
    icon: <FileText />,
  },
  {
    title: "Wumpus 2D game",
    description:
      "A 2D game where the agent will find gold from the cave with wumpus.",
    tech: ["html","css", "javascript"],
    github: "https://github.com/AbhijeetNagar56/wumpus-game",
    live: "https://htmlpreview.github.io/?https://github.com/AbhijeetNagar56/wumpus-game/blob/main/index.html",
    status: "Live",
    icon: <Gamepad2 />,
  }
];

const Project = () => {
  return (
    <div className="min-h-[calc(100vh-3.75rem)] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="section-header text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Projects</h1>
          <div className="w-50 h-1 bg-linear-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Project Stats */}
        <div className="stats-container grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="stat-box bg-base-100/50 backdrop-blur border border-base-300 rounded-xl p-4 text-center hover:border-red-500/50 transition-all">
            <div className="text-2xl font-bold text-red-400">{projects.length}</div>
            <p className="text-sm text-gray-400 mt-2">Total Projects</p>
          </div>
          <div className="stat-box bg-base-100/50 backdrop-blur border border-base-300 rounded-xl p-4 text-center hover:border-red-500/50 transition-all">
            <div className="text-2xl font-bold text-green-400">{projects.length}</div>
            <p className="text-sm text-gray-400 mt-2">Live Projects</p>
          </div>
          <div className="stat-box bg-base-100/50 backdrop-blur border border-base-300 rounded-xl p-4 text-center hover:border-red-500/50 transition-all">
            <div className="text-2xl font-bold text-yellow-400">0</div>
            <p className="text-sm text-gray-400 mt-2">In Progress</p>
          </div>
          <div className="stat-box bg-base-100/50 backdrop-blur border border-base-300 rounded-xl p-4 text-center hover:border-red-500/50 transition-all">
            <div className="text-2xl font-bold text-blue-400">10+</div>
            <p className="text-sm text-gray-400 mt-2">Technologies</p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative bg-linear-to-br from-base-100 to-base-200 border border-base-300 rounded-2xl shadow-xl hover:shadow-2xl hover:border-red-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Project Icon Badge */}
              <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                {project.icon}
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-sm border ${
                    project.status === "Live"
                      ? "bg-green-500/20 text-green-400 border-green-500/50"
                      : "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl md:text-xl font-bold mb-3 mt-6 group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="tech-stack mb-8">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 hover:border-red-500/50 hover:text-red-400 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="action-buttons flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn btn-outline btn-sm gap-2 border-red-500/50 text-red-400 hover:bg-red-500/20 hover:border-red-500"
                  >
                    <Github size={16} />
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn btn-primary btn-sm gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-linear-to-t from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="cta-section mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
          <p className="text-gray-400 mb-6">
            Check out my GitHub profile for more projects and contributions
          </p>
          <a
            href="https://github.com/AbhijeetNagar56"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary gap-2"
          >
            <Github size={20} />
            Visit My GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
