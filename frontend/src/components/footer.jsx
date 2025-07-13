

const footer = () => {
  return (
    <footer className="relative bg-[#444444] py-12 w-full text-white text-[20px]">
      <div className="flex flex-wrap justify-center gap-20 px-8">
        <section>
          <h3 className="text-yellow-300 text-xl mb-4">Connect With Me</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              
              <a href="https://www.linkedin.com/in/abhijeet-nagar-a44007308" className="hover:underline">LinkedIn</a>
            </li>
            <li className="flex items-center gap-2">
              
              <a href="https://github.com/AbhijeetNagar56" className="hover:underline">GitHub</a>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-yellow-300 text-xl mb-4">Contact</h3>
          <p>Email: nagarabhijeet0@gmail.com</p>
        </section>

        <section>
          <h3 className="text-yellow-300 text-xl mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="user/terms" className="hover:underline">Terms</a></li>
            <li><a href="user/services" className="hover:underline">Services</a></li>
          </ul>
        </section>
      </div>
      <p id="lastLine" className="mt-24 text-center">Built with passion to innovate.</p>
    </footer>
  )
}

export default footer