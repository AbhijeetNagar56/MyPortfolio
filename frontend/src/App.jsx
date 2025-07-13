// globally
import {Link, Routes, Route} from 'react-router'

import Header from './components/header'
import Footer from './components/footer'


// locally

import Project from "./pages/project"
import About from "./pages/about.jsx"
import Home from "./pages/home"

const App = () => {
  return (
    <div className='bg-[url("background.png")]'>
      <Header />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/project' element = {<Project />} />
        <Route path='/about' element = {<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App