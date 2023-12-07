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
  const controls = useAnimation();

  const getYear = () => {
    return new Date().getFullYear();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      duration: 1000,
    });
  };

  const handleScroll = () => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 1.2 } });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-[#FEFBF3]dark:bg-[#557571]">
        <>
          <nav className="py-4 px-10 mb-12 flex justify-between">
            <h1 className="text-xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 cursor-pointer hover:scale-105">
              Collins.
            </h1>
            <ul className="flex items-center">
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
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 font-semibold"
                  href="Resume.pdf"
                  download="download"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </>

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
        <>
          <motion.section
            className="bg-gradient-to-r from-purple-500 to-indigo-500 px-10"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
          >
            <div className="h-10">
              <div className="flex flex-row justify-center gap-3">
                <p className="font-medium">George Collins &copy; {getYear()}</p>
                <p className="font-thin hidden sm:flex">
                  Developed using React and Tailwind CSS
                </p>
              </div>
            </div>
          </motion.section>
        </>
        <div className="fixed bottom-10 right-10">
          <Link to="top" smooth={true} duration={1000}>
            <button
              onClick={scrollToTop}
              className="bg-gray-500 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full py-2 px-4 focus:outline-none"
            >
              &#8593;
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default App;
