// globally
import { Routes, Route } from 'react-router'
import Header from './components/header'
import Footer from './components/footer'

import Project from "./pages/project"
import About from "./pages/about"
import Home from "./pages/home"


const App = () => {
    
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="grow">
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
