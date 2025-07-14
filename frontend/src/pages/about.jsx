const About = () => {
  return (
    <div className="text-[20px] font-sans">
      <main className="mx-auto flex flex-col gap-20 my-12">
        <section>
          <div className="justify-self-center w-[80%] mb-20 border-4 p-5">
            <h1 className="text-3xl font-bold">About</h1>
            <p>Hi, I'm Abhijeet Nagar, a passionate B.Tech CSE student with interest in full-stack web development and AI/ML. Build interactive web apps using the MERN stack and exploring intelligent systems that blend hardware with smart UI. I'm always eager to learn, collaborate, and take on challenging projects that push my skills forward.</p>
          </div>
          <div className="w-[80%] justify-self-center my-20">
            <h2 className="text-2xl my-6 font-bold ">Education Timeline</h2>
            <ul className="timeline justify-self-center">
              <li>
                <div className="timeline-start timeline-box">10th SJVN</div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">12th SJVN</div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-start timeline-box">B.tech IIITDwd 2028'</div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">...</div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start timeline-box">...</div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="justify-items-center">
          <h2 className="text-2xl mb-2">Other Certifications</h2>
          <div className="justify-self-center">
            <div className="card bg-base-100 w-96 shadow-sm my-10">
              <figure>
                <img
                  src="greeting_card.png"
                  alt="cert" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Coding competition</h2>
                <p>By NST</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm my-10">
              <figure>
                <img
                  src="HACKER.png"
                  alt="cert" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Python Basic</h2>
                <p>By Hackerrank</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary"><a href="https://www.hackerrank.com/certificates/7c1cdacf2f43">View</a></button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm my-10">
              <figure>
                <img
                  src="leetcode.png"
                  alt="cert" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">50 Days Badge</h2>
                <p>By Leetcode</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary"><a href="https://leetcode.com/u/gzfBDDBp1L/">View</a></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-2xl mb-2 font-bold">My Resume link</h2>
          <a
            href="https://docs.google.com/document/d/1HfqB9JBrBu79G7lIasKcpSMi9OHQ9kh52MLfu64wRKo/edit?pli=1&tab=t.0#heading=h.9aedq4tvs2mc"
            className="text-2xl text-blue-400 underline hover:text-blue-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open
          </a>
        </div>
      </main>
    </div>
  )
}

export default About
