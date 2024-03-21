import { useState, useEffect } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Techs from "./components/Techs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [navBackground, setNavBackground] = useState("bg-white");
  const controls = useAnimation();

  const getYear = () => {
    return new Date().getFullYear();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      duration: 2500,
    });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
    if (scrollPosition > 0.7 * vh) {
      setNavBackground(
        "bg-gradient-to-r from-[#F3F5F0] to-teal-100 via-purple-100 shadow-md"
      );
    } else {
      setNavBackground("bg-white");
    }
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.4 } });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <nav
        className={`fixed top-0 left-0 right-0 text-gray-700 p-4 z-50 ${navBackground} dark:bg-inherit`}
      >
        <div className="flex justify-between">
          <h1 className="text-xl sm:text-4xl font-bold cursor-pointer hover:scale-105">
            Collins.
          </h1>
          <ul className="flex items-center justify-between">
            {darkMode ? (
              <li>
                <IoSunny
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
            ) : (
              <li>
                <IoMoon
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
            )}

            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-md ml-8 font-semibold"
                href="Resume.pdf"
                download="download"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <main className="bg-[#FEFBF3] dark:bg-[#557571] pt-16">
          <Hero />
          <motion.section initial={{ opacity: 0, y: 50 }} animate={controls}>
            <About />
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 50 }} animate={controls}>
            <Services />
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 50 }} animate={controls}>
            <Techs />
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 50 }} animate={controls}>
            <Projects />
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 50 }} animate={controls}>
            <Contact />
          </motion.section>
        </main>
      </div>

      <div className="fixed bottom-10 right-10">
        <Link to="top" smooth={true} duration={2000}>
          <button
            onClick={scrollToTop}
            className="bg-gray-500 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full py-2 px-4 focus:outline-none"
          >
            &#8593;
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
