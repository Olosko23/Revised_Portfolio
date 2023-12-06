import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Techs from "./components/Techs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-[#FEFBF3] px-10 md:px-20 lg:px-40 dark:bg-[#557571]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Techs />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
