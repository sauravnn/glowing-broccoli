function FAQ() {
    return (
      <section id="faq" className="faq-section">
        <h2 className="title">FREQUENTLY ASKED QUESTIONS</h2>
  
        <div className="faq-container">
          <div className="faq-item">
            <button className="faq-question">
              What are your opening hours?
              <span className="icon">+</span>
            </button>
  
            <div className="faq-answer">
              <p>
                We are open 24/7 for all Premium and Elite tier members.
              </p>
            </div>
          </div>
  
          <div className="faq-item">
            <button className="faq-question">
              Can I cancel my plan anytime?
              <span className="icon">+</span>
            </button>
  
            <div className="faq-answer">
              <p>
                Yes, all of our monthly rolling contracts can be cancelled with a
                7-day notice period.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default FAQ;