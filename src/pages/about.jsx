import { Award, GraduationCap, Briefcase, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="text-base sm:text-lg font-sans px-4 min-h-screen py-16">
      <main className="mx-auto flex flex-col gap-16 sm:gap-20 max-w-5xl">
        
        {/* About Section */}
        <section className="about-intro">
          <div className="section-header text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Passionate developer crafting digital experiences
            </p>
            <div className="w-16 h-1 bg-linear-to-r from-red-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="about-card bg-linear-to-br from-base-100 to-base-200 border border-base-300 p-8 sm:p-10 rounded-2xl shadow-xl hover:shadow-2xl hover:border-red-500/50 transition-all">
            <p className="text-gray-300 leading-relaxed text-lg">
              Hi, I'm <span className="font-bold text-red-400">Abhijeet Nagar</span>, a passionate <span className="font-bold">B.Tech CSE student</span> with a strong interest in <span className="font-bold">full-stack web development</span> and <span className="font-bold">AI/ML</span>. 
              <br /><br />
              I love building <span className="font-semibold">interactive web applications</span> using the <span className="font-semibold">MERN stack</span> and exploring intelligent systems that blend hardware with smart UI. I'm always eager to learn, collaborate, and take on challenging projects that push my skills forward. Whether it's frontend design, backend architecture, or AI integration, I'm passionate about creating solutions that make a real impact.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="quick-facts">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-red-400" />
            Quick Facts
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="fact-card bg-base-100/50 backdrop-blur border border-base-300 p-6 rounded-xl hover:border-red-500/50 transition-all">
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-2">Expertise</p>
              <p className="text-white font-bold">Full-Stack Development</p>
              <p className="text-gray-400 text-sm mt-2">React, Node.js, MongoDB, JavaScript</p>
            </div>
            <div className="fact-card bg-base-100/50 backdrop-blur border border-base-300 p-6 rounded-xl hover:border-red-500/50 transition-all">
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-2">Currently</p>
              <p className="text-white font-bold">B.Tech CSE Student</p>
              <p className="text-gray-400 text-sm mt-2">IIIT Dharwad | Class of 2028</p>
            </div>
            <div className="fact-card bg-base-100/50 backdrop-blur border border-base-300 p-6 rounded-xl hover:border-red-500/50 transition-all">
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-2">Interests</p>
              <p className="text-white font-bold">AI/ML & Web Technologies</p>
              <p className="text-gray-400 text-sm mt-2">Exploring smart solutions</p>
            </div>
            <div className="fact-card bg-base-100/50 backdrop-blur border border-base-300 p-6 rounded-xl hover:border-red-500/50 transition-all">
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-2">Passion</p>
              <p className="text-white font-bold">Problem Solving</p>
              <p className="text-gray-400 text-sm mt-2">Building impactful projects</p>
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="education-section">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-red-400" />
            Education Timeline
          </h2>
          <ul className="timeline timeline-vertical space-y-6">
            <li>
              <div className="timeline-start timeline-box bg-base-100 border border-base-300 shadow-lg hover:shadow-xl hover:border-red-500/50 transition-all">
                <h3 className="font-bold text-red-400">10th Grade</h3>
                <p className="text-sm text-gray-400">SJVN School</p>
              </div>
              <div className="timeline-middle">
                <div className="w-4 h-4 bg-red-400 rounded-full ring-2 ring-base-300 ring-offset-4 ring-offset-base-100"></div>
              </div>
              <hr className="bg-red-400/50" />
            </li>

            <li>
              <hr className="bg-red-400/50" />
              <div className="timeline-middle">
                <div className="w-4 h-4 bg-red-400 rounded-full ring-2 ring-base-300 ring-offset-4 ring-offset-base-100"></div>
              </div>
              <div className="timeline-end timeline-box bg-base-100 border border-base-300 shadow-lg hover:shadow-xl hover:border-red-500/50 transition-all">
                <h3 className="font-bold text-red-400">12th Grade</h3>
                <p className="text-sm text-gray-400">SJVN School</p>
              </div>
              <hr className="bg-red-400/50" />
            </li>

            <li>
              <hr className="bg-red-400/50" />
              <div className="timeline-start timeline-box bg-base-100 border border-base-300 shadow-lg hover:shadow-xl hover:border-red-500/50 transition-all">
                <h3 className="font-bold text-red-400">B.Tech in CSE</h3>
                <p className="text-sm text-gray-400">IIIT Dharwad | 2028</p>
              </div>
              <div className="timeline-middle">
                <div className="w-4 h-4 bg-red-400 rounded-full ring-2 ring-base-300 ring-offset-4 ring-offset-base-100"></div>
              </div>
              <hr />
            </li>

            <li>
              <hr />
              <div className="timeline-middle">
                <div className="w-4 h-4 bg-gray-600 rounded-full ring-2 ring-base-300 ring-offset-4 ring-offset-base-100"></div>
              </div>
              <div className="timeline-end timeline-box text-gray-500 italic">Future Milestones...</div>
            </li>
          </ul>
        </section>

        {/* Achievements Section */}
        <section className="achievements-section">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-red-400" />
            Achievements & Certifications
          </h2>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "50 Days Badge",
                issuer: "LeetCode",
                icon: "⭐",
                link: "https://leetcode.com/u/gzfBDDBp1L/"
              },
              {
                title: "100 Days Badge",
                issuer: "LeetCode",
                icon: "🔥",
                link: "https://leetcode.com/u/gzfBDDBp1L/"
              },
              {
                title: "December Badge",
                issuer: "LeetCode",
                icon: "❄️",
                link: "https://leetcode.com/u/gzfBDDBp1L/"
              },
              {
                title: "Data Analytics Job Simulation",
                issuer: "Forage",
                icon: "📊",
                link: "#"
              },
              {
                title: "Python Basics",
                issuer: "HackerRank",
                icon: "🐍",
                link: "https://www.hackerrank.com/certificates/7c1cdacf2f43"
              },
              {
                title: "Coding Competition",
                issuer: "NST",
                icon: "🏆",
                link: "#"
              }
            ].map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-card group bg-linear-to-br from-base-100 to-base-200 border border-base-300 p-6 rounded-xl shadow-lg hover:shadow-xl hover:border-red-500/50 transition-all cursor-pointer"
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h3 className="font-bold text-white group-hover:text-red-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2">By {cert.issuer}</p>
                <div className="mt-4 flex items-center gap-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">
                  View <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills & Specializations */}
        <section className="skills-specialization">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
            <Star className="w-8 h-8 text-red-400" />
            Specializations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="specialization-card bg-base-100/50 backdrop-blur border border-base-300 p-8 rounded-xl hover:border-red-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4 text-red-400">Frontend Development</h3>
              <ul className="space-y-3">
                {["React.js", "Tailwind CSS", "JavaScript ES6+", "Responsive Design"].map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="specialization-card bg-base-100/50 backdrop-blur border border-base-300 p-8 rounded-xl hover:border-red-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4 text-red-400">Backend Development</h3>
              <ul className="space-y-3">
                {["Node.js", "Express.js", "MongoDB", "REST APIs"].map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section text-center py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let's Connect!</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, collaborations, and opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:abhijeetnagar0@gmail.com" className="btn btn-primary gap-2">
              Send Me an Email
            </a>
            <a href="/project" className="btn btn-outline btn-primary">
              View My Projects
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default About;
