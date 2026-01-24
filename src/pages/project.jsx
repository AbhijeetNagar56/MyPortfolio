
import medi from '../assets/medi.png'

const Project = () => {
  return (
    <div className="text-[18px] sm:text-[20px] font-sans my-5 px-4">
      <main className="flex flex-col items-center gap-10">
        {/* Mediraksha */}
        <div className="hero bg-base-100 w-full sm:w-[80%] max-w-5xl p-4 sm:p-6 rounded-lg shadow-md">
          <div className="hero-content flex-col lg:flex-row-reverse gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl font-bold">MediRaksha</h1>
              <p className="py-4 sm:py-6 leading-relaxed">
                A healthcare application to delivery fast and reliable services to patients and doctors as well..
              </p>
              <button className="btn btn-primary">
                <a target='_blank' href="https://github.com/AbhijeetNagar56/Mediraksha.git">Github</a>
              </button>
              <button className="btn btn-secondary">
                <a target='_blank' href="https://mediraksha.onrender.com/">App</a>
              </button>
            </div>
          </div>
        </div>

        {/* Chatif */}
        <div className="hero bg-base-100 w-full sm:w-[80%] max-w-5xl p-4 sm:p-6 rounded-lg shadow-md">
          <div className="hero-content flex-col lg:flex-row-reverse gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl font-bold">Chat-if-y</h1>
              <p className="py-4 sm:py-6 leading-relaxed">
                A live chat application. using socket.io which is still in the development. github is given below.
              </p>
              <button className="btn btn-primary">
                <a target='_blank' href="https://github.com/AbhijeetNagar56/Chat-if-y.git">Github</a>
              </button>
            </div>
          </div>
        </div>
        
        {/* Chatif */}
        <div className="hero bg-base-100 w-full sm:w-[80%] max-w-5xl p-4 sm:p-6 rounded-lg shadow-md">
          <div className="hero-content flex-col lg:flex-row-reverse gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl font-bold">QuizOps</h1>
              <p className="py-4 sm:py-6 leading-relaxed">
                A online quiz application. With AI proctoring and no tab switching mechanism for fairness in evaluation.
              </p>
              <button className="btn btn-primary">
                <a target='_blank' href="https://github.com/AbhijeetNagar56/Chat-if-y.git">Github</a>
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export default Project
