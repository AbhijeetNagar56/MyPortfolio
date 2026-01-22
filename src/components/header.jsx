import tech from '../assets/techy.png'
import { Link } from 'react-router'


const Header = () => {
    return (
        // The outer header container should also be transparent
        <header className="flex justify-between items-center flex-wrap backdrop-blur-xl sticky top-0 z-50 bg-transparent">
            {/* 1. Changed bg-base-100 to bg-transparent */}
            <div className="navbar bg-transparent shadow-md text-white">
                <div className="navbar-start">
                    {/* Dropdown for Mobile */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            {/* Menu Icon (hamburger) */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        {/* Mobile Dropdown Menu: Needs a specific background for contrast */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-[10] mt-3 w-52 p-2 shadow-xl border border-red-500/50"
                        >
                            <li><Link className="hover:text-red-400 text-base" to='/'>Home</Link></li>
                            <li><Link className="hover:text-red-400 text-base" to='/project'>Projects</Link></li>
                            <li><Link className="hover:text-red-400 text-base" to='/about'>About</Link></li>
                        </ul>
                    </div>
                    {/* Site Title/Logo */}
                    <a className="btn btn-ghost text-xl font-bold tracking-wider text-white hover:bg-transparent font-mono">
                        Abhijeet Nagar
                    </a>
                </div>

                {/* Desktop Navigation Links */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* Ensure links are easily visible by setting text color and hover effect */}
                        <li><Link className="text-white text-lg font-medium hover:text-red-400 transition duration-200" to='/'>Home</Link></li>
                        <li><Link className="text-white text-lg font-medium hover:text-red-400 transition duration-200" to='/project'>Projects</Link></li>
                        <li><Link className="text-white text-lg font-medium hover:text-red-400 transition duration-200" to='/about'>About</Link></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    {/* Logo/Avatar - Using the placeholder URL */}
                    <img
                        src={tech}
                        className='w-12 h-12 rounded-full border-2 border-white object-cover shadow-lg'
                        alt="tech logo placeholder"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header


