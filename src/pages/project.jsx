
import medi from '../assets/medi.png'

const Project = () => {
  return (
    <div className="text-[18px] sm:text-[20px] font-sans my-5 px-4">
      <main className="flex flex-col items-center gap-10">
        {/* RoboBuddy */}
        <div className="hero bg-base-100 w-full sm:w-[80%] max-w-5xl p-4 sm:p-6 rounded-lg shadow-md">
          <div className="hero-content flex-col lg:flex-row-reverse gap-6">
            <img
              src={medi}
              className="w-full sm:max-w-sm h-auto rounded-lg shadow-2xl size-1"
              alt="RoboBuddy Project"
            />
            <div>
              <h1 className="text-3xl sm:text-5xl font-bold">MediRaksha</h1>
              <p className="py-4 sm:py-6 leading-relaxed">
                A healthcare application to delivery fast and reliable services to patients and doctors as well..
              </p>
              <button className="btn btn-primary">
                <a href="https://mediraksha.netlify.app">Link</a>
              </button>
            </div>
          </div>
        </div>
        {/* RoboBuddy */}
        
        
      </main>
    </div>
  )
}

export default Project
