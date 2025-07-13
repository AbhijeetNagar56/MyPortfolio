import Header from "../components/header"
import Footer from "../components/footer"

const Home = () => {
  return (
    <div>

      <main>
        <section id="intro">
          <h2 id="typing">
            Hy, I'm a{" "}
            <span style={{ color: "red" }}>
              <span>Developer</span>
              <span>Coder</span>
              <span>Freelancer</span>
              <span>Designer</span>
              <span>Developer</span>
            </span>
          </h2>
          <p>
            Computer Science undergrad and passionate MERN stack developer.
            Currently exploring innovative tech ideas and actively seeking
            collaborators and exciting projects.
          </p>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div>
            <img src="https://webdevmonk.com/main/html.png" alt="HTML" />
            <p>HTML</p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-R7LjZirQO8gxcqLt6KV-LOhKBVHGH4X5Q&s"
              alt="CSS"
            />
            <p>CSS</p>
          </div>
          <div>
            <img
              src="https://ellipsiseducation.com/wp-content/uploads/2023/02/javascript-736400_1280.png"
              alt="JavaScript"
            />
            <p>JavaScript</p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtb_9zVzsPWq_LDNDBVCsBYFo996KtVyCxWg&s"
              alt="Node Js"
            />
            <p>Node Js</p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdRsbNblY-trvVBgVFHyP_g2Lrz9dLP3k7Q&s"
              alt="Python"
            />
            <p>Python</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
