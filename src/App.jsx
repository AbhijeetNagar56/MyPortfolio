import Header from './components/header'
import Project from "./pages/project"
import About from "./pages/about"
import Home from "./pages/home"

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {/* Added pt-20 (padding-top) so content isn't swallowed by the fixed navbar */}
            <main className="flex-1 pt-20">
                <Home />
                <Project />
                <About />
            </main>
        </div>
    )
}

export default App