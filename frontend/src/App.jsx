import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Progress from "./components/Progress";
import Programs from "./components/Programs";
import BMI from "./components/BMI";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Progress/>
      <Programs/>
      <BMI/>
      <Pricing/>
      <FAQ/>
    </>
  );
}

export default App;