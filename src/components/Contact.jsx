import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="w-full">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full shadow-lg rounded-xl">
          <div className="pb-8 flex flex-row justify-center">
            <p className="py-6 text-3xl sm:text-4xl font-medium">
              Submit the form to get in touch
            </p>
          </div>
          <div className="flex justify-center items-center">
            <form
              action="https://getform.io/f/94770f33-2cf2-411e-8c9f-bd1a03122049"
              method="POST"
              className="flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="p-2 bg-transparent border-2 rounded-md
                    text-white focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="p-2 bg-transparent border-2 rounded-md
                    text-white focus:outline-none my-4"
              />
              <textarea
                name="message"
                rows="10"
                placeholder="Enter Your Message"
                className="p-2 bg-transparent border-2 rounded-md focus:outlined-none"
              />
              <button
                className="text-white bg-gradient-to-b from-cyan-500 to-teal-500 px-6 py-3 my-8 mx-auto
                    flex items-center rounded-md hover:scale-110 duration-300"
              >
                {" "}
                Let's Talk
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
