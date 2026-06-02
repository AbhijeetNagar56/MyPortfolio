import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'

const Header = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScrollAndMouse = (e) => {
            const currentScrollY = window.scrollY

            // 1. Open navbar instantly when cursor hits top boundary (top 20 pixels)
            if (e.type === 'mousemove' && e.clientY <= 20) {
                setIsVisible(true)
                return
            }

            // 2. Automatically hide/show based on scroll direction
            if (e.type === 'scroll') {
                if (currentScrollY < 50) {
                    setIsVisible(true) // Always show at the very top
                } else if (currentScrollY > lastScrollY) {
                    setIsVisible(false) // Scrolling down - hide
                } else {
                    setIsVisible(true)  // Scrolling up - show
                }
                setLastScrollY(currentScrollY)
            }
        }

        window.addEventListener('scroll', handleScrollAndMouse)
        window.addEventListener('mousemove', handleScrollAndMouse)

        return () => {
            window.removeEventListener('scroll', handleScrollAndMouse)
            window.removeEventListener('mousemove', handleScrollAndMouse)
        }
    }, [lastScrollY])

    return (
        <header 
            className={`h-12 header-container flex justify-between items-center backdrop-blur-xl fixed top-0 left-0 w-full z-50 bg-gray-900/80 border-b border-gray-700/50 transition-transform duration-300 ease-in-out ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="navbar bg-transparent shadow-none text-white w-full">
                <div className="navbar-start">
                    {/* Mobile Dropdown Menu */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white hover:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        {/* Mobile Dropdown Menu Content */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-10 mt-3 w-52 p-2 shadow-xl border border-red-500/50"
                        >
                            <li><Link className="hover:text-red-400 text-base transition-colors" to='#home'>Home</Link></li>
                            <li><Link className="hover:text-red-400 text-base transition-colors" to='#project'>Projects</Link></li>
                            <li><Link className="hover:text-red-400 text-base transition-colors" to='#about'>About</Link></li>
                        </ul>
                    </div>
                    {/* Brand/Logo */}
                    <a className="btn btn-ghost text-lg sm:text-xl font-bold tracking-wider text-white hover:bg-transparent font-mono hover:text-red-400 transition-colors">
                        Abhijeet Nagar
                    </a>
                </div>

                {/* Desktop Navigation Links */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-1">
                        <li><a className="text-white font-medium hover:text-red-400 transition-colors duration-200 rounded-lg hover:bg-gray-800/50" href='#home'>Home</a></li>
                        <li><a className="text-white font-medium hover:text-red-400 transition-colors duration-200 rounded-lg hover:bg-gray-800/50" href='#project'>Projects</a></li>
                        <li><a className="text-white font-medium hover:text-red-400 transition-colors duration-200 rounded-lg hover:bg-gray-800/50" href='#about'>About</a></li>
                    </ul>
                </div>

                <div className="navbar-end gap-2 sm:gap-4">
                    {/* Social Media Icons - Desktop */}
                    <div className="social-icons hidden sm:flex gap-2">
                        <a
                            href="https://github.com/AbhijeetNagar56"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-circle btn-sm text-white hover:text-red-400 hover:bg-gray-800 transition-all"
                            title="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abhijeet-nagar-a44007308/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-circle btn-sm text-white hover:text-red-400 hover:bg-gray-800 transition-all"
                            title="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:abhijeetnagar0@gmail.com"
                            className="btn btn-ghost btn-circle btn-sm text-white hover:text-red-400 hover:bg-gray-800 transition-all"
                            title="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header