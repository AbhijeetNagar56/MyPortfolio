const About = () => {
  return (
    <div className="text-[18px] sm:text-[20px] font-sans px-4">
      <main className="mx-auto flex flex-col gap-16 sm:gap-20 my-8 sm:my-12 max-w-5xl">
        <section>
          <div className="mx-auto w-full sm:w-[80%] mb-10 sm:mb-20 border-2 sm:border-4 p-4 sm:p-5 rounded-lg shadow-sm">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">About</h1>
            <p className="leading-relaxed">
              Hi, I'm Abhijeet Nagar, a passionate B.Tech CSE student with interest in full-stack web
              development and AI/ML. Build interactive web apps using the MERN stack and exploring
              intelligent systems that blend hardware with smart UI. I'm always eager to learn,
              collaborate, and take on challenging projects that push my skills forward.
            </p>
          </div>

          <div className="w-full sm:w-[80%] mx-auto my-10 sm:my-20">
            <h2 className="text-xl sm:text-2xl my-4 sm:my-6 font-bold">Education Timeline</h2>
            <ul className="timeline timeline-vertical">
              <li>
                <div className="timeline-start timeline-box text-sm sm:text-base">10th SJVN</div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-4 w-4 sm:h-5 sm:w-5"
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
                    className="text-primary h-4 w-4 sm:h-5 sm:w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box text-sm sm:text-base">12th SJVN</div>
                <hr className="bg-primary" />
              </li>

              <li>
                <hr className="bg-primary" />
                <div className="timeline-start timeline-box text-sm sm:text-base">B.Tech IIITDwd 2028'</div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-4 w-4 sm:h-5 sm:w-5"
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
                    className="h-4 w-4 sm:h-5 sm:w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box text-sm sm:text-base">...</div>
                <hr />
              </li>

              <li>
                <hr />
                <div className="timeline-start timeline-box text-sm sm:text-base">...</div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 sm:h-5 sm:w-5"
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
          <h2 className="text-xl sm:text-2xl mb-2">Other Certifications</h2>
          <div className="grid gap-6 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
            <div className="card bg-base-100 w-full max-w-xs shadow-sm">
              <figure>
                <img src="greeting_card.png" alt="cert" className="w-full h-auto object-contain" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Coding competition</h2>
                <p>By NST</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View</button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-full max-w-xs shadow-sm">
              <figure>
                <img src="HACKER.png" alt="cert" className="w-full h-auto object-contain" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Python Basic</h2>
                <p>By Hackerrank</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    <a href="https://www.hackerrank.com/certificates/7c1cdacf2f43">View</a>
                  </button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-full max-w-xs shadow-sm">
              <figure>
                <img src="leetcode.png" alt="cert" className="w-full h-auto object-contain" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">50 Days Badge</h2>
                <p>By Leetcode</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    <a href="https://leetcode.com/u/gzfBDDBp1L/">View</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default About
