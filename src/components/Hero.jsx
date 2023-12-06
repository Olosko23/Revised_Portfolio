import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Hero = () => {
  return (
    <div>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          Collins George
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl">Full Stack Developer</h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
          Developer providing services for programming needs
          <br />
          Join me down below and let's get cracking
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <a
          className="hover:bg-[#1DA1F2]"
          href="https://twitter.com/olos_ko_lins"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          className="hover:bg-[#0072b1]"
          href="https://www.linkedin.com/in/collins-oloo-2646bb1a6/"
        >
          <AiFillLinkedin />
        </a>
        <a className="hover:bg-[#171515]" href="https://github.com/Olosko23">
          <AiFillGithub />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
        <image src="" alt="image" />
      </div>
    </div>
  );
};

export default Hero;
