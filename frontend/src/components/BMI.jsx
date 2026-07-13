function BMI() {
    return (
      <section id="bmi" className="bmi-section">
        <h2 className="title">BMI CALCULATOR</h2>
  
        <div className="bmi-container">
          <form id="bmiForm" className="bmi-form">
            <div className="form-group">
              <label htmlFor="weight">Weight (kg)</label>
  
              <input
                type="number"
                id="weight"
                required
                min="10"
                max="300"
                placeholder="e.g. 75"
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="height">Height (cm)</label>
  
              <input
                type="number"
                id="height"
                required
                min="50"
                max="250"
                placeholder="e.g. 175"
              />
            </div>
  
            <button type="submit" className="btn">
              Calculate BMI
            </button>
          </form>
  
          <div
            id="bmiResult"
            className="bmi-result"
            aria-live="polite"
          >
            Enter your values above to calculate.
          </div>
        </div>
      </section>
    );
  }
  
  export default BMI;