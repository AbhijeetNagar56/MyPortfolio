const texts = ["Developer","Coder", "Designer", "Freelancer"];
let index = 0;
setInterval(() => {
  index = (index + 1) % texts.length;
  document.getElementById("changingText").textContent = texts[index];
}, 4000);


const Home = () => {
  return (
    <div className="text-[20px] font-sans">
      <main className="flex flex-col items-center">
        <div
          className="hero w-[90%] h-[500px]"
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <img
                src="myimg.png"
                alt="Profile"
                className="w-[200px] rounded-full mb-[50px] mx-auto"
              />
              <h1 className="mb-10 text-5xl w-2xl justify-self-center font-bold">Hy, I'm a <h2 id="changingText" className="text-red-500 font-bold animateword">Developer</h2></h1>

              <button className="btn btn-primary">View More</button>
            </div>
          </div>
        </div>

        <section
          id="skills"
          className="my-[150px] w-[80%] bg-[#8a8a8a] p-[50px_0] rounded-[10px] text-center"
        >
          <h2 className="text-2xl mb-6 font-bold">Skills</h2>
          <div className="flex flex-wrap justify-around gap-[60px]">
            {[
              ['HTML', 'html.png'],
              ['CSS', 'css.png'],
              ['JavaScript', 'js.png'],
              ['Node Js', 'node.png'],
              ['React', 'react.png']
            ].map(([label, url], index) => (
              <div key={index} className="text-center">
                <img
                  src={url}
                  alt={label}
                  className="w-[100px] h-[100px] rounded-full hover:w-[120px] hover:h-[120px] transition-all duration-300 mx-auto"
                />
                <p className="mt-2">{label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home