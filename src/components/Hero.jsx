import { useEffect } from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import collins from "../assets/HeroImage.jpeg";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.3 } });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="py-8 md:py-12">
      <div className="text-center pt-14 px-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          Collins George
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl">Full Stack Developer</h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
          I'm a Full Stack Developer proficient in the MERN stack, offering
          comprehensive programming solutions.
        </p>
      </div>
      <div className="text-2xl md:text-4xl flex justify-center gap-8 py-4 my-4 px-4 text-gray-600">
        <a
          className="hover:bg-[#1DA1F2] rounded-md p-1"
          href="https://twitter.com/olos_ko_lins"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          className="hover:bg-[#0072b1] rounded-md p-1"
          href="https://www.linkedin.com/in/collins-oloo-2646bb1a6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          className="hover:bg-[#6e7681] rounded-md p-1"
          href="https://github.com/Olosko23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          className="hover:bg-[#25D366] rounded-md p-1"
          href="https://wa.me/254799590711"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp />
        </a>
      </div>
      <motion.section initial={{ opacity: 0, y: 50 }} animate={controls}>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 md:mt-20  mb-10 md:mb-20 overflow-hidden md:h-96 md:w-96">
          <img src={collins} alt="image" />
        </div>{" "}
      </motion.section>
    </div>
  );
};

export default Hero;
