// globally
import { Routes, Route } from 'react-router'
import { useEffect, useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import logo from './assets/techy.png'

// locally
import Project from "./pages/project"
import About from "./pages/about.jsx"
import Home from "./pages/home"

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Routes>
//         <Route path='/' element = {<Home />} />
//         <Route path='/project' element = {<Project />} />
//         <Route path='/about' element = {<About />} />
//       </Routes>
//       <Footer />
      
//     </div>
//   )
// }

// export default App



// --- SPLASH SCREEN COMPONENT (The Intro Animation) ---
const SplashScreen = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-base-100 z-[9999] p-8">
        <style>
            {`
            @keyframes logo-zoom-out {
                0% { transform: scale(1.5); opacity: 1; }
                80% { transform: scale(1.0); opacity: 1; }
                100% { transform: scale(0.5); opacity: 0; }
            }
            .animate-splash {
                animation: logo-zoom-out 2.5s ease-out forwards;
            }
            `}
        </style>
        
        <div className="flex flex-col items-center justify-center animate-splash">
            <img src={logo} alt="logo" className='w-[200px]' />
            <h1 className="text-4xl font-extrabold text-base-content tracking-wider">Hey !</h1>
            <span className="loading loading-dots loading-lg text-primary mt-6"></span>
        </div>
    </div>
);


// --- MAIN APPLICATION COMPONENT ---
const App = () => {
    // Check sessionStorage to skip animation on subsequent loads in the same session
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isLoading) {
            // Run timer only if we are currently loading
            const timer = setTimeout(() => {
                setIsLoading(false);
                // Mark the app as loaded for this session
                
            }, 2500); // 2.5 seconds match the CSS animation

            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    // Conditional Rendering: Show splash screen OR main app
    if (isLoading) {
        return <SplashScreen />;
    }
    
    // Original App return structure
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <Routes>
                    <Route path='/' element = {<Home />} />
                    <Route path='/project' element = {<Project />} />
                    <Route path='/about' element = {<About />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App
