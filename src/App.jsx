// globally
import { Routes, Route } from 'react-router'

// header and footer
import Header from './components/header'
import Footer from './components/footer'


// other
import Project from "./pages/project"
import About from "./pages/about"
import Home from "./pages/home"
import Product from './pages/Product'


const App = () => {
    
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="grow">
                <Routes>
                    <Route path='/' element = {<Home />} />
                    <Route path='/project' element = {<Project />} />
                    <Route path='/product' element = {<Product />} />
                    <Route path='/about' element = {<About />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App
