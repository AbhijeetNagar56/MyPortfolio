

const Project = () => {
  return (
    <div className="text-[#dfdfdf] text-[20px] font-sans">
      <main className="flex flex-col items-center">
        <section className="w-[80%] my-[50px]">
          <h1 className="text-3xl mb-8">Here's the list of projects and their links on which I'm working</h1>

          {[
            {
              title: "RoboBuddy : Chatbot",
              link: "#"
            },
            {
              title: "MediRaksha : Medical App Collaboration",
              link: "#"
            },
            {
              title: "CourseHUB : Finding the Right Course",
              link: "#"
            }
          ].map((project, i) => (
            <div
              key={i}
              className="bg-[#555555] border-l-[25px] border-[#575ec2] p-[30px] my-[50px]"
            >
              <h4 className="text-[35px] text-red-400 mb-4">{project.title}</h4>
              <p className="w-[80%] mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odit ad voluptates sapiente,
                possimus itaque, saepe doloribus odio ex ea minus voluptatibus sit officia, asperiores accusamus!
                Fugit placeat voluptate, vitae eum repudiandae nulla pariatur! Velit quo nobis possimus corrupti,
                recusandae dolorum, maiores repellendus architecto voluptatibus accusantium laudantium eos ex perferendis.
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#3c49ff] px-4 py-2 rounded-[10px] float-right"
              >
                GitHub
              </a>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default Project
