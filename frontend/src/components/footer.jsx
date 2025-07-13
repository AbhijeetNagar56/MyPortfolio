import React from 'react'

const footer = () => {
    return (
        <div>
            <footer>
                <section>
                    <h3>Connect With Me</h3>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/abhijeet-nagar-a44007308">LinkedIn</a></li>
                        <li><a href="https://github.com/AbhijeetNagar56">GitHub</a></li>
                    </ul>
                </section>

                <section>
                    <h3>Contact</h3>
                    <p>Email: <a href="mailto:nagarabhijeet0@gmail.com">your.email@example.com</a></p>
                    <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                </section>

                <section>
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="user/terms">Terms</a></li>
                        <li><a href="user/services">Services</a></li>
                    </ul>
                </section>
                <p id="lastLine">Built with passion to innovate.</p>
            </footer>
        </div>
    )
}

export default footer