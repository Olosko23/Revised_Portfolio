import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl sm:text-2xl font-medium">
          Developed By Collins
        </h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
          </li>
          <li>
            <a
              className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
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
  );
};

export default Header;
