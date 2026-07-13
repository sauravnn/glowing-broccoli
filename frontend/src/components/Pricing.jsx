function Pricing() {
    return (
      <section id="pricing" className="pricing-section">
        <h2 className="title">MEMBERSHIP PLANS</h2>
  
        <div className="pricing-grid">
          <div className="price-card">
            <h3>Base</h3>
  
            <div className="price">
              $29<span>/mo</span>
            </div>
  
            <ul>
              <li>Access to gym floor</li>
              <li>Locker rooms</li>
            </ul>
  
            <a href="#contact" className="btn plan-btn">
              Join Now
            </a>
          </div>
  
          <div className="price-card premium">
            <span className="badge">POPULAR</span>
  
            <h3>Elite</h3>
  
            <div className="price">
              $59<span>/mo</span>
            </div>
  
            <ul>
              <li>Custom training routines</li>
              <li>1-on-1 coaching call / mo</li>
            </ul>
  
            <a href="#contact" className="btn plan-btn">
              Join Now
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Pricing;