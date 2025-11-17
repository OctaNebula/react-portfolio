import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <p>
        I'd love to hear from you! Whether you have a question or just want to
        say hi, feel free to reach out.
      </p>
      <div className="contact-links">
        <a href="mailto:your.email@example.com" className="contact-button">
          Email Me
        </a>
        <a href="https://github.com/yourusername" className="contact-button" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" className="contact-button" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact
