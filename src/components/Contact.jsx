import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-20">
      <section className="flex justify-center items-center">
        <div className="flex flex-col max-w-screen-lg mx-auto h-full shadow-lg rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="bg-gray-800 text-white p-8 md:w-1/2">
              <p className="text-3xl sm:text-4xl font-medium">
                Reach Out to Connect
              </p>
              <p className="text-lg mt-4">
                Have questions or want to discuss a project? Feel free to
                contact me.
              </p>
              <div className="text-5xl flex justify-center gap-8 py-3 my-4 px-4 text-gray-600">
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
            </div>
            <div className="bg-white p-8 md:w-1/2">
              <form
                action="https://getform.io/f/94770f33-2cf2-411e-8c9f-bd1a03122049"
                method="POST"
                className="flex flex-col"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 my-4 border-2 rounded-md focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email@email.com"
                  className="p-2 my-4 border-2 rounded-md focus:outline-none"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Enter Your Message"
                  className="p-2 my-4 border-2 rounded-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-b from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-md hover:scale-110 duration-300"
                >
                  Let's Talk
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
