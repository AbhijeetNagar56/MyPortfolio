import Header from "../components/header"
import Footer from "../components/footer"

const About = () => {
  return (
    <div>

      <main>
        <section>
          <h2>Education Timeline</h2>
          <p>School: 2008 to 2023 at SJVN</p>
          <p>Graduation: 2024 to 2028 (expected) from IIIT Dharwad</p>
        </section>

        <section>
          <h2>Other Certifications</h2>
          <div>
            <p>Course from Great Learning</p>
          </div>
          <div>
            <p>Competitive coding certificates</p>
          </div>
        </section>

        <section>
          <h2>My Resume</h2>
          <a
            href="https://docs.google.com/document/d/1HfqB9JBrBu79G7lIasKcpSMi9OHQ9kh52MLfu64wRKo/edit?pli=1&tab=t.0#heading=h.9aedq4tvs2mc"
            style={{ fontSize: "xx-large" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click To Open
          </a>
        </section>
      </main>
    </div>
  )
}

export default About
