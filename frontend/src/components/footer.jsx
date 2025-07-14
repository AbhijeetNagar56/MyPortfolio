
const footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 justify-around">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Devlopment</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Freelance</a>
      </nav>
      <nav>
        <h6 className="footer-title">Contact</h6>
        <a className="link link-hover" href="about">About</a>
        <a className="link link-hover">Email</a>
        <a className="link link-hover">Other</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <a className="link link-hover" href="https://instagram.com/abhijeet_nagar56">Instagram</a>
        <a className="link link-hover" href="https://www.linkedin.com/in/abhijeet-nagar-a44007308/">LinkdIn</a>
        <a className="link link-hover" href="https://www.github.com/AbhijeetNagar56">GitHub</a>
      </nav>
    </footer>
  )
}

export default footer