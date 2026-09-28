import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <main>
        <AboutSection />
        <SkillsSection />
      </main>
    </>
  );
}

export default App;
