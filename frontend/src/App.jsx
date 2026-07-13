import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Progress from "./components/Progress";
import Programs from "./components/Programs";
import BMI from "./components/BMI";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Progress/>
      <Programs/>
      <BMI/>
    </>
  );
}

export default App;