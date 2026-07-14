import { useState } from "react";
function BMI() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [result, setResult] = useState("Enter your values above to calculate.");
    const handleSubmit = (e) => {
        e.preventDefault();
      
        const bmi = (
          Number(weight) /
          Math.pow(Number(height) / 100, 2)
        ).toFixed(1);
      
        let status = "";
      
        if (bmi < 18.5) {
          status = "Underweight";
        } else if (bmi < 25) {
          status = "Normal";
        } else if (bmi < 30) {
          status = "Overweight";
        } else {
          status = "Obese";
        }
      
        setResult(`Your BMI is ${bmi} (${status})`);
      };
    return (
      <section id="bmi" className="bmi-section">
        <h2 className="title">BMI CALCULATOR</h2>
  
        <div className="bmi-container">
          <form
            id="bmiForm"
            className="bmi-form"
            onSubmit={handleSubmit}
           >
            <div className="form-group">
              <label htmlFor="weight">Weight (kg)</label>
  
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
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
                value={height}
                onChange={(e) => setHeight(e.target.value)}
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
            {result}
          </div>
        </div>
      </section>
    );
  }
  
  export default BMI;