

const Project = () => {
  return (
    <div className="text-[20px] font-sans my-5">
      <main className="flex flex-col items-center">
        <div className="hero bg-base-200 my-10 w-[80%] border-4 p-4">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="cbot.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">RoboBuddy</h1>
              <p className="py-6">
                ChatBot-UI which is a sleek and intuitive user interface designed for interacting with a personal companion chatbot. Built with a user-friendly layout and responsive design, the interface allows users to seamlessly communicate with RoboBuddy.
              </p>
              <button className="btn btn-primary"><a href="https://github.com/AbhijeetNagar56/Chatbot">GitHub</a></button>
            </div>
          </div>
        </div>
        <div className="hero bg-base-200 my-10 w-[80%] border-4 p-4">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="chatapp.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Chat-if-y</h1>
              <p className="py-6">
                Chat-if-y is a real-time chat application built with the MERN stack. It features user authentication, responsive UI, and seamless socket-based messaging. Users can sign up, log in, and chat instantly in a secure environment.
              </p>
              <button className="btn btn-primary"><a href="https://github.com/AbhijeetNagar56/Chat-if-y">GitHub</a></button>
            </div>
          </div>
        </div>
        <div className="hero bg-base-200 my-10 w-[80%] border-4 p-4">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="course.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">CourseHUB</h1>
              <p className="py-6">
                CourseHUB is a centralized platform for browsing and managing online courses. Designed with a clean user interface, it allows users to explore a curated list of courses with details like title, description, and creator, providing a simple and effective learning dashboard.
              </p>
              <button className="btn btn-primary"><a href="https://github.com/AbhijeetNagar56/CourseHUB">GitHub</a></button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Project
