import { useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Techs from "./components/Techs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const getYear = () => {
    return new Date().getFullYear();
  };

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
        <About />
        <Services />
        <Techs />
        <Projects />
        <Contact />
        <>
          <section className="bg-gradient-to-r from-purple-500 to-indigo-500 px-10">
            <div className="h-10">
              <div className="flex flex-row justify-center gap-3">
                <p className="font-medium">George Collins &copy; {getYear()}</p>
                <p className="font-thin hidden sm:flex">
                  Developed using React and Tailwind CSS
                </p>
              </div>
            </div>
          </section>
        </>
      </main>
    </div>
  );
}

export default App;
