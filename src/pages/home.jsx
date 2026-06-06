import { useState, useEffect } from 'react';
import techy from '../assets/techy.png';
import { ArrowRight, Code2, Palette, Briefcase, Award, Code, BrainCircuit, LaptopMinimal } from 'lucide-react';

const texts = ["Developer", "Student"];

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
    <div className="text-lg md:text-xl font-sans min-h-[calc(100vh-3.75rem)]">
      <main className="flex flex-col items-center p-4">

        {/* Hero Section */}
        <section className="hero-wrapper w-full max-w-5xl mb-10">
          <div className="hero-gradient bg-linear-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50">
            <div className="hero-content text-white text-center p-5 sm:p-12 md:p-16">
              <div className="max-w-2xl mx-auto">
                {/* Profile Image */}
                <div className="profile-image-container mb-8">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-linear-to-r from-red-500 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
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
                    Hey
                  </p>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                    I'm a{' '}<br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 to-pink-500 animate-pulse">
                      {currentText}
                      <span className="cursor-blink ml-1">|</span>
                    </span>
                  </h1>
                  <p className="text-sm sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto">
                    I craft responsive and modern web applications that combine stunning design. Let's build something amazing together.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center mt-10">
                  <a href="#project" className="btn btn-primary gap-2 flex-1 sm:flex-none hover:gap-3 transition-all">
                    View My Work <ArrowRight size={20} />
                  </a>
                  <a href="#about" className="btn btn-outline btn-primary flex-1 sm:flex-none">
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
            <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-2">3+</div>
            <p className="text-xs sm:text-sm text-gray-400">Projects Completed</p>
          </div>
          <div className="stat-card bg-base-100 p-4 sm:p-6 rounded-xl shadow-lg border border-base-300 text-center hover:shadow-xl transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-2">2</div>
            <p className="text-xs sm:text-sm text-gray-400">Technical Domain</p>
          </div>
          <div className="stat-card bg-base-100 p-4 sm:p-6 rounded-xl shadow-lg border border-base-300 text-center hover:shadow-xl transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-2">2x</div>
            <p className="text-xs sm:text-sm text-gray-400">Hackathons</p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-container my-16 sm:my-24 w-full max-w-5xl">
          <div className="section-header text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tools & Technology</h2>
            <div className="w-100 h-1 bg-linear-to-r from-red-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="skills-grid flex flex-wrap justify-center gap-6 sm:gap-8">
            {[
              { label: 'MongoDB', url: 'https://imgs.search.brave.com/2GfVX0bzdl-FEk5lEhw-HYvstpBPINpYYVsmK5yCM6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9tb25nb2RiLWlj/b24tMi5zdmc', category: 'Database' },
              { label: 'Express', url: 'https://imgs.search.brave.com/7vTIE6IWwWDvYpRw7Fy8yQNB2e7VTrvocSro0RZb8O4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL2V4cHJl/c3MtanMxNzIwODk1/NDkzLmxvZ293aWsu/Y29tLndlYnA', category: 'Backend' },
              { label: 'React', url: 'https://imgs.search.brave.com/_N0t1v_QP9Pk0Snrr4knbzZYHrOQKJee5bxh1ze2t2s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTUvUmVh/Y3QtTG9nby1QTkct/RmlsZS5wbmc', category: 'Frontend' },
              { label: 'Node.js', url: 'https://imgs.search.brave.com/8YTKtuH5MSEf709be8D0D62vwCblQuxYvhyYG8LE12I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI3LzIvbm9kZS1q/cy1sb2dvLXBuZ19z/ZWVrbG9nby0yNzM3/NDkucG5n', category: 'Backend' },
              { label: 'MySql', url: 'https://imgs.search.brave.com/7HP8ODcA_jyquioPaxHI39dyd2M_X-XtmN7hpQuuKXc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ28ub3JnL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzAy/L015U1FMLUxvZ28u/cG5n', category: 'Database' },
              { label: 'PostgreSql', url: 'https://imgs.search.brave.com/6avd4kULIAWcZ6MLDCaLzz7rVJuZU7vxfxSoKzcHbVQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzIxMDY3MDMucG5n', category: 'Database' },
              { label: 'Linux', url: 'https://imgs.search.brave.com/EdfrfOwZ0U158hL0T-yVIEOaAWJFLJ3W7esJ5lRrinA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9MaW51eC9M/aW51eC1Mb2dvLndp/bmUuc3Zn', category: 'Os' },
              { label: 'Git', url: 'https://imgs.search.brave.com/RTQ6UhKU86fV_OJRLPRBxPbYVp3hqCEFvHPnHZuyH54/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmE2MzYwZjAzYTg3/MGI5MjBjYmZkNDEu/cG5n', category: 'vcs' },
              { label: 'GitHub', url: 'https://imgs.search.brave.com/KrxOVr9W18qkCnYtmbyv4lNkUJeE-PhbVjroS4ejL1M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWdpdGh1Yi1sb2dv/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy00/MzczODkucG5nP2Y9/d2VicCZ3PTEyOA', category: 'Cloud' },
              { label: 'Nginx', url: 'https://imgs.search.brave.com/cOM71K3n9_IF3cV6KbJmdkeTZf3PnalEOKHgv5kM9L0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ28ub3JnL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzAy/L05HSU5YLUxvZ28u/cG5n', category: 'Proxy' },
              { label: 'Postman', url: 'https://imgs.search.brave.com/SFdvrubba7ecDcYxwgSCnlCPfMc75dRCxGBd7EAcj44/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2RubG9nby5j/b20vbG9nb3MvcC8y/MC9wb3N0bWFuLnN2/Zw', category: 'API' },
              { label: 'Dbeaver', url: 'https://imgs.search.brave.com/CkBMQhjvz5w3ApZ-qjFGnGZL-PF2GvVSx2QTcZO9pBQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kYmVh/dmVyLmNvbS9kb2Nz/L2RiZWF2ZXIvaW1h/Z2VzL2RiZWF2ZXIt/aGVhZC5wbmc', category: 'DB interface' },
              { label: 'Docker', url: 'https://imgs.search.brave.com/gdiab7015SESTAvveSL-HfopV0OMij4Chr0098Ddu04/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWRvY2tlci1sb2dv/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy0z/MDI5OTU5LnBuZz9m/PXdlYnAmdz0xMjg', category: 'Containerization' },
              { label: 'DockerHub', url: 'https://imgs.search.brave.com/qzgG1es_9BueAFWksX6QheP4-TEXJn1Zt3EO2IdSIUo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3BjLXJvdXRlci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDcvRG9ja2Vy/XzE1MHgxNTBweC0w/MS0wMS0wMS5wbmc', category: 'Cloud' },
              { label: 'AWS', url: 'https://imgs.search.brave.com/Xypq6u49ycOtnB1zqwCnPDDucHD-5LmUMguCxXjvUCo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWF3cy1ncm91cC1h/d3MtY2xvdWQtbG9n/by1pY29uLXN2Zy1k/b3dubG9hZC1wbmct/MTQ2MDM4NTAucG5n/P2Y9d2VicCZ3PTEy/OA', category: 'Cloud' },
              { label: 'CPP', url: 'https://imgs.search.brave.com/FzHcg4crMfgXNawp9Iyqx1QiaGz6w-PxXVYW8j3ciEQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS9l/eHRlcm5hbC10YWwt/cmV2aXZvLWNvbG9y/LXRhbC1yZXZpdm8v/MTIwMC9leHRlcm5h/bC1jcGx1c3BsdXMt/YS1nZW5lcmFsLXB1/cnBvc2UtZGVzY3Jp/cHRpdmUtcHJvZ3Jh/bW1pbmctY29tcHV0/ZXItbGFuZ3VhZ2Ut/bG9nby1jb2xvci10/YWwtcmV2aXZvLmpw/Zw', category: 'Programming' },
              { label: 'Python', url: 'https://imgs.search.brave.com/hTj55yelremOY5RcCmqISjmhMco6k2TlqYFStOcnho0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/Ym5haWwuaW1nYmlu/LmNvbS8yLzEwLzEy/L3B5dGhvbi1sb2dv/LXB5dGhvbi1wcm9n/cmFtbWluZy1sYW5n/dWFnZS1sb2dvLW4z/YzJoUG1WX3QuanBn', category: 'Programming' },
              { label: 'Javascript', url: 'https://imgs.search.brave.com/G3zavm9oE7fLsUNBkU621G4h35AnxfQUuq7o0qaJCLA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDEyLzY5/Ny8yOTgvbm9uXzJ4/LzNkLWphdmFzY3Jp/cHQtbG9nby1kZXNp/Z24tZnJlZS1wbmcu/cG5n', category: 'Code/web' }
              
            ].map(({ label, url, category }, itemIndex) => (
              <div
                key={itemIndex}
                className="skill-card group text-center w-24 sm:w-28 md:w-32 p-4 rounded-xl bg-base-100 border border-base-300 shadow-lg hover:shadow-2xl hover:border-red-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="skill-image-wrapper relative mb-4">
                  <div className="absolute inset-0 bg-linear-to-r from-red-500/10 to-pink-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
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
        <section className="my-16 sm:my-24 w-full max-w-5xl">
          <h2 className="text-2xl mx-auto sm:text-3xl font-bold mb-5 flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Language Proficiency:</h2>
          </h2>
          
          <div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "English",
                issuer: "Professional Working Proficiency",
                icon: "🇺🇸",
                link: "https://leetcode.com/u/gzfBDDBp1L/"
              },
              {
                title: "Hindi",
                issuer: "Native Speaker",
                icon: "🇮🇳",
                link: ""
              },
              {
                title: "Japanese",
                issuer: "Elementary Proficiency",
                icon: "🇯🇵",
                link: ""
              }
            ].map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-80 achievement-card group bg-linear-to-br from-base-100 to-base-200 border border-base-300 p-6 rounded-xl shadow-lg hover:shadow-xl hover:border-red-500/50 transition-all cursor-pointer"
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h3 className="font-bold text-white group-hover:text-red-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2">{cert.issuer}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
