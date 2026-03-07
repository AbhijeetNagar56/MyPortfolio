import { useState, useEffect } from 'react';
import techy from '../assets/techy.png';
import { ArrowRight, Code2, Palette, Briefcase } from 'lucide-react';

const texts = ["Developer", "Designer", "Freelancer"];

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const fullWord = texts[wordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        const updated = fullWord.substring(0, currentText.length + 1);
        setCurrentText(updated);
        if (updated === fullWord) {
          setIsDeleting(true);
          setTypingSpeed(1000);
        } else {
          setTypingSpeed(150);
        }
      } else {
        const updated = fullWord.substring(0, currentText.length - 1);
        setCurrentText(updated);
        if (updated === "") {
          setIsDeleting(false);
          setWordIndex(prev => (prev + 1) % texts.length);
          setTypingSpeed(500);
        } else {
          setTypingSpeed(75);
        }
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, wordIndex, typingSpeed]);

  return (
    <div className="text-lg md:text-xl font-sans min-h-screen">
      <main className="flex flex-col items-center p-4">

        {/* Hero Section */}
        <section className="hero-wrapper w-full max-w-5xl mb-12">
          <div className="hero-gradient bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50">
            <div className="hero-content text-white text-center p-8 sm:p-12 md:p-16">
              <div className="max-w-2xl mx-auto">
                {/* Profile Image */}
                <div className="profile-image-container mb-8">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                    <img
                      src={techy}
                      alt="Profile"
                      className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-red-500 shadow-2xl"
                    />
                  </div>
                </div>

                {/* Main Heading */}
                <div className="hero-text px-4 sm:px-0 mb-8">
                  <p className="text-red-400 font-semibold text-sm sm:text-base mb-3 tracking-widest uppercase">
                    Welcome to my portfolio
                  </p>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                    I'm a{' '}<br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500 animate-pulse">
                      {currentText}
                      <span className="cursor-blink ml-1">|</span>
                    </span>
                  </h1>
                  <p className="text-sm sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto">
                    I craft responsive and modern web applications that combine stunning design with powerful functionality. Let's build something amazing together.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center mt-10">
                  <a href="/project" className="btn btn-primary gap-2 flex-1 sm:flex-none hover:gap-3 transition-all">
                    View My Work <ArrowRight size={20} />
                  </a>
                  <a href="/about" className="btn btn-outline btn-primary flex-1 sm:flex-none">
                    Learn About Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="quick-stats w-full max-w-5xl mb-16 grid grid-cols-3 gap-4 sm:gap-6">
          <div className="stat-card bg-base-100 p-4 sm:p-6 rounded-xl shadow-lg border border-base-300 text-center hover:shadow-xl transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-2">10+</div>
            <p className="text-xs sm:text-sm text-gray-400">Projects Completed</p>
          </div>
          <div className="stat-card bg-base-100 p-4 sm:p-6 rounded-xl shadow-lg border border-base-300 text-center hover:shadow-xl transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-2">5+</div>
            <p className="text-xs sm:text-sm text-gray-400">Tech Skills</p>
          </div>
          <div className="stat-card bg-base-100 p-4 sm:p-6 rounded-xl shadow-lg border border-base-300 text-center hover:shadow-xl transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-2">2+</div>
            <p className="text-xs sm:text-sm text-gray-400">Years Experience</p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-container my-16 sm:my-24 w-full max-w-5xl">
          <div className="section-header text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Skills & Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I specialize in modern web technologies and frameworks to create exceptional digital experiences
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="skills-grid flex flex-wrap justify-center gap-6 sm:gap-8">
            {[
              { label: 'HTML', url: 'html.png', category: 'Frontend' },
              { label: 'CSS', url: 'css.png', category: 'Frontend' },
              { label: 'JavaScript', url: 'js.png', category: 'Frontend' },
              { label: 'Node.js', url: 'node.png', category: 'Backend' },
              { label: 'React', url: 'react.png', category: 'Frontend' }
            ].map(({ label, url, category }, itemIndex) => (
              <div
                key={itemIndex}
                className="skill-card group text-center w-24 sm:w-28 md:w-32 p-4 rounded-xl bg-base-100 border border-base-300 shadow-lg hover:shadow-2xl hover:border-red-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="skill-image-wrapper relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                  <img
                    src={url}
                    alt={label}
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto object-contain transition-transform duration-300 group-hover:scale-110 shadow-lg p-2 bg-white dark:bg-gray-800"
                  />
                </div>
                <p className="skill-name text-base sm:text-lg font-bold mb-1">{label}</p>
                <p className="skill-category text-xs text-gray-400 group-hover:text-red-400 transition-colors">{category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="why-section my-16 sm:my-24 w-full max-w-5xl">
          <div className="section-header text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Me?</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="why-grid grid md:grid-cols-3 gap-6">
            <div className="why-card card bg-base-100 border border-base-300 shadow-lg hover:shadow-xl hover:border-red-500/50 transition-all duration-300">
              <div className="card-body">
                <Code2 className="w-10 h-10 text-red-400 mb-3" />
                <h3 className="card-title text-lg">Clean Code</h3>
                <p className="text-gray-400 text-sm">
                  I write maintainable, efficient code following best practices and design patterns
                </p>
              </div>
            </div>

            <div className="why-card card bg-base-100 border border-base-300 shadow-lg hover:shadow-xl hover:border-red-500/50 transition-all duration-300">
              <div className="card-body">
                <Palette className="w-10 h-10 text-red-400 mb-3" />
                <h3 className="card-title text-lg">Modern Design</h3>
                <p className="text-gray-400 text-sm">
                  Beautiful, responsive interfaces that work perfectly on all devices and screen sizes
                </p>
              </div>
            </div>

            <div className="why-card card bg-base-100 border border-base-300 shadow-lg hover:shadow-xl hover:border-red-500/50 transition-all duration-300">
              <div className="card-body">
                <Briefcase className="w-10 h-10 text-red-400 mb-3" />
                <h3 className="card-title text-lg">Professional</h3>
                <p className="text-gray-400 text-sm">
                  Dedicated to delivering high-quality results on time and exceeding expectations
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
