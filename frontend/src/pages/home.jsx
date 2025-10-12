import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const texts = ["Explorer", "Coder", "Designer", "Student"];

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    // Determine the full word we're currently working with
    const fullWord = texts[wordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing: Add one character at a time
        setCurrentText(prevText => fullWord.substring(0, prevText.length + 1));
        setTypingSpeed(150); // Regular typing speed
        if (currentText === fullWord) {
          setIsDeleting(true);
          setTypingSpeed(1000); // Pause before deleting
        }
      } else {
        // Deleting: Remove one character at a time
        setCurrentText(prevText => fullWord.substring(0, prevText.length - 1));
        setTypingSpeed(75); // Faster deleting speed
        if (currentText === "") {
          setIsDeleting(false);
          setWordIndex(prevIndex => (prevIndex + 1) % texts.length);
          setTypingSpeed(500); // Pause before typing the next word
        }
      }
    };

    // Set the typing/deleting interval
    const timeout = setTimeout(handleTyping, typingSpeed);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);

  }, [currentText, isDeleting, wordIndex, typingSpeed]); // Re-run effect when these states change

  return (
    <div className="text-lg md:text-xl font-sans min-h-screen">
      <main className="flex flex-col items-center p-4">

        {/* Hero Section */}
        <section
          className="hero w-full max-w-4xl h-[400px] sm:h-[500px] bg-gray-700 rounded-lg shadow-xl"
        >
          <div className="hero-content text-white text-center p-4">
            <div className="max-w-md mx-auto">
              <img
                src="myimg.png"
                alt="Profile"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mb-6 mx-auto object-cover border-4 border-red-500 shadow-lg"
              />
              <h1 className="mb-6 text-3xl sm:text-5xl font-extrabold leading-tight">
                Hy, I'm a{' '}
                <span className="text-red-400 font-bold min-w-[200px] inline-block">
                  {currentText}
                  {/* Optional: Add a blinking cursor effect */}
                  <span className="cursor after:content-['|'] after:animate-blink ml-1"></span>
                </span>
              </h1>
              <p className="mb-8 text-sm sm:text-lg">
                I build responsive and modern web applications.
              </p>
              <Link to="/about">
              <button className="btn bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 shadow-md">
                View More
              </button>
              </Link>
            </div>
          </div>
        </section>

        ---

        {/* Skills Section */}
        <section
          id="skills"
          className="my-16 sm:my-24 w-full max-w-4xl bg-gray-700 p-8 sm:p-12 rounded-xl shadow-2xl text-center"
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