



const Home = () => {
  return (
    <div className="text-[#dfdfdf] text-[20px] font-sans">
      <main className="flex flex-col items-center">
        <section
          id="intro"
          className="h-[750px] bg-[rgba(138,138,138,0.3)] px-[50px] rounded-[15px] w-[80%] flex flex-col items-center justify-center"
        >
          <img
            src="myimg.png"
            alt="Profile"
            className="w-[250px] rounded-full mb-[50px] mx-auto"
          />
          <h2
            id="typing"
            className="text-4xl text-white font-mono flex items-end"
          >
            Hy, I'm a{' '}
            <span className="relative inline-block overflow-hidden ml-5 leading-none h-[1em] text-red-500">
              <span className="block animate-typing">
                Developer<br />Coder<br />Freelancer<br />Designer<br />Developer
              </span>
            </span>
          </h2>
          <p className="w-[70%] text-center pt-[50px] text-[30px]">
            Computer Science undergrad and passionate MERN stack developer.
            Currently exploring innovative tech ideas and actively seeking
            collaborators and exciting projects.
          </p>
          
        </section>

        <section
          id="skills"
          className="my-[200px] w-[80%] bg-[#6b6b6b] p-[50px_0] rounded-[10px] text-center"
        >
          <h2 className="text-2xl mb-6">Skills</h2>
          <div className="flex flex-wrap justify-center gap-[60px]">
            {[
              ['HTML', 'https://webdevmonk.com/main/html.png'],
              ['CSS', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-R7LjZirQO8gxcqLt6KV-LOhKBVHGH4X5Q&s'],
              ['JavaScript', 'https://ellipsiseducation.com/wp-content/uploads/2023/02/javascript-736400_1280.png'],
              ['Node Js', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtb_9zVzsPWq_LDNDBVCsBYFo996KtVyCxWg&s'],
              ['Python', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdRsbNblY-trvVBgVFHyP_g2Lrz9dLP3k7Q&s']
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
