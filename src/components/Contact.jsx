import { useState } from "react";
import axios from "axios";
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState();
  const [alert, setAlert] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert("");
    try {
      const response = await axios.post(
        "https://contact-form-fr65.onrender.com/create",
        { username, email, message }
      );

      if (response.status === 200) {
        setUsername("");
        setEmail("");
        setMessage("");
        setAlert("Form submitetd successfully!");
      } else {
        setAlert("Error Submitting Details");
      }
    } catch (error) {
      setAlert("Error Submitting Details");
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-10 md:py-20 px-3">
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
              <div className="text-2xl md:text-4xl flex justify-center gap-6 md:gap-8 py-3 my-4 px-4 text-gray-600">
                <a
                  className="hover:bg-[#1DA1F2] rounded-md p-1"
                  href="https://twitter.com/olos_ko_lins"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
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
            <div className="bg-white dark:bg-gray-600 p-8 md:w-1/2">
              <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  onChange={(e) => setUsername(e.target.value)}
                  className="p-2 my-4 border-2 rounded-md focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 my-4 border-2 rounded-md focus:outline-none"
                />
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Enter Your Message"
                  onChange={(e) => setMessage(e.target.value)}
                  className="p-2 my-4 border-2 rounded-md focus:outline-none"
                />
                {alert && <span className="p-2 font-semibold">{alert}</span>}
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
