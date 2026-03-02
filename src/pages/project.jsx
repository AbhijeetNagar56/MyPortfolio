const projects = [
  {
    title: "Travel Decision Engine",
    description:
      "A multi-factor decision intelligence system that ranks countries using environmental indicators, healthcare infrastructure, advisories, and personalized risk tolerance scoring.",
    tech: ["Node.js", "Express", "APIs", "TypeScript"],
    github: "https://github.com/AbhijeetNagar56/Travel-Decision-Engine",
    live: "https://travel-decision-engine.onrender.com/",
    status: "Live",
  },
  {
    title: "MediRaksha",
    description:
      "Healthcare platform enabling seamless interaction between patients and doctors with fast, reliable service delivery.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/AbhijeetNagar56/Mediraksha.git",
    live: "https://medi-raksha-2-0.vercel.app/",
    status: "Live",
  },
  {
    title: "Chat-if-y",
    description:
      "Real-time chat application built using Socket.io with live messaging architecture. Currently under active development.",
    tech: ["React", "Socket.io", "Node.js"],
    github: "https://github.com/AbhijeetNagar56/Chat-if-y.git",
    live: "",
    status: "In Progress",
  },
  {
    title: "QuizOps",
    description:
      "Online quiz platform with AI-powered proctoring and tab-switch detection to ensure fairness and integrity in evaluation.",
    tech: ["React", "AI Integration", "Node.js"],
    github: "https://github.com/AbhijeetNagar56/Chat-if-y.git",
    live: "",
    status: "In Progress",
  },
];

const Project = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto font-sans">

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-base-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">{project.title}</h3>

              <span
                className={`text-sm px-3 py-1 rounded-full ${
                  project.status === "Live"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs border px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;