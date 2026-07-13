function Contact() {
    return (
      <section id="contact" className="contact-section">
        <h2 className="title">GET IN TOUCH</h2>
  
        <div className="contact-grid">
          <form id="contactForm" className="main-form">
            <input
              type="text"
              placeholder="Your Name"
              required
              aria-label="Your Name"
            />
  
            <input
              type="email"
              placeholder="Your Email"
              required
              aria-label="Your Email"
            />
  
            <textarea
              placeholder="Your Message"
              rows="5"
              required
              aria-label="Your Message"
            ></textarea>
  
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  
  export default Contact;