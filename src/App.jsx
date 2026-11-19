import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="relative overflow-hidden bg-[#050816] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Contact />
      </main>
    </div>
  );
};

export default App;
