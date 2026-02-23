import { useState, useEffect } from 'react';
import techy from '../assets/techy.png';

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
        <section
          className="hero w-full max-w-5xl bg-gray-700 rounded-lg shadow-xl"
        >
          <div className="hero-content text-white text-center p-4">
            <div className="max-w-md mx-auto">
              <img
                src={techy}
                alt="Profile"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mb-6 mx-auto object-cover border-4 border-red-500 shadow-lg"
              />
              <div className="px-4 sm:px-0">
                <h1 className="mb-6 text-3xl sm:text-5xl font-extrabold leading-tight">
                  Hy, I'm a{' '}
                  <span className="text-red-400 font-bold inline-block max-w-full break-words">
                    {currentText}
                    <span className="cursor after:content-['|'] after:animate-blink ml-1"></span>
                  </span>
                </h1>
              </div>
              <p className="mb-8 text-sm sm:text-lg">
                I build responsive and modern web applications.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="my-16 sm:my-24 w-full max-w-5xl bg-gray-700 p-8 sm:p-12 rounded-xl shadow-2xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl mb-10 font-bold border-b-2 inline-block pb-1">
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 sm:gap-x-12 sm:gap-y-16">
            {[
              ['HTML', 'html.png'],
              ['CSS', 'css.png'],
              ['JavaScript', 'js.png'],
              ['Node Js', 'node.png'],
              ['React', 'react.png']
            ].map(([label, url], itemIndex) => (
              <div key={itemIndex} className="text-center w-24 sm:w-32 p-2">
                <img
                  src={url}
                  alt={label}
                  className="w-16 h-16 sm:w-24 sm:h-24 rounded-full mx-auto object-contain transition-all duration-300 transform hover:scale-110 shadow-lg p-1 bg-white"
                />
                <p className="mt-3 text-base font-medium">{label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;