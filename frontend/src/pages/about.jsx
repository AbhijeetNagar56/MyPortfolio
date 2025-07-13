const About = () => {
  return (
    <div className="text-[#dfdfdf] text-[20px] font-sans">
      <main className="w-[80%] mx-auto flex flex-col gap-20 my-12">
        <section>
          <h2 className="text-2xl mb-2">Education Timeline</h2>
          <p>School: 2008 to 2023 at SJVN</p>
          <p>Graduation: 2024 to 2028 (expected) from IIIT Dharwad</p>
        </section>

        <section>
          <h2 className="text-2xl mb-2">Other Certifications</h2>
          <div className="mb-2">
            <p>Course from Great Learning</p>
          </div>
          <div>
            <p>Competitive coding certificates</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl mb-2">My Resume</h2>
          <a
            href="https://docs.google.com/document/d/1HfqB9JBrBu79G7lIasKcpSMi9OHQ9kh52MLfu64wRKo/edit?pli=1&tab=t.0#heading=h.9aedq4tvs2mc"
            className="text-2xl text-blue-400 underline hover:text-blue-200"
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
