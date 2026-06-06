import Header from './components/header'
import Project from "./pages/project"
import About from "./pages/about"
import Home from "./pages/home"

const App = () => {
    return (
        <div className="portfolio-shell">
            <Header />
            <main className="portfolio-scroller">
                <section className="portfolio-slide" id="home">
                    <Home />
                </section>
                <section className="portfolio-slide" id="project">
                    <Project />
                </section>
                <section className="portfolio-slide" id="about">
                    <About />
                </section>
            </main>
        </div>
    )
}

export default App
