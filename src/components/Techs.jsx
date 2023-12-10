import React from "react";
import HTMLLogo from "../assets/htmlcss.webp";
import JavaScriptLogo from "../assets/JavaScript.png";
import ReactLogo from "../assets/React.png";
import MaterialUILogo from "../assets/Material UI.png";
import TailwindLogo from "../assets/Tailwind.png";
import GitHubLogo from "../assets/GitHub.png";
import JavaLogo from "../assets/java.png";
import MongoLogo from "../assets/mongo.png";
import NodeLogo from "../assets/node.png";
import ExpressLogo from "../assets/express.png";
import NetlifyLogo from "../assets/netlify.png";
import PostmanLogo from "../assets/postman.png";

const Techs = () => {
  const techs = [
    {
      id: 1,
      src: HTMLLogo,
      title: "HTML5/CSS3",
    },
    {
      id: 2,
      src: JavaScriptLogo,
      title: "JavaScript",
    },
    {
      id: 3,
      src: ReactLogo,
      title: "React",
    },
    {
      id: 5,
      src: TailwindLogo,
      title: "Tailwind CSS",
    },
    {
      id: 4,
      src: MaterialUILogo,
      title: "Material UI",
    },
    {
      id: 7,
      src: NodeLogo,
      title: "Node JS",
    },
    {
      id: 8,
      src: ExpressLogo,
      title: "Express JS",
    },
    {
      id: 9,
      src: MongoLogo,
      title: "Mongo DB",
    },
    {
      id: 10,
      src: JavaLogo,
      title: "Java",
    },
    {
      id: 6,
      src: GitHubLogo,
      title: "GitHub",
    },
    {
      id: 11,
      src: NetlifyLogo,
      title: "Netlify",
    },
    {
      id: 12,
      src: PostmanLogo,
      title: "Postman",
    },
  ];

  return (
    <div className="py-10">
      <section className="max-w-5xl mx-auto px-3">
        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">Tech Stack</h3>
          <p className="text-md leading-8 text-gray-800 text-center">
            My expertise spans a wide spectrum of programming languages and
            tools, enabling me to craft robust, user-centric applications.
            Proficient in:
            <span className="font-semibold">
              {" "}
              HTML5/CSS3, JavaScript, React, Material UI, Tailwind CSS, GitHub,
              Node.js, Express.js, MongoDB, Java, Netlify, Postman,
            </span>
            I leverage these technologies and platforms to drive collaborative
            development and deliver efficient solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
          {techs.map(({ id, title, src }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-md  cursor-pointer hover:scale-110 duration-300 overflow-hidden flex flex-col items-center justify-center"
            >
              <img
                src={src}
                alt={title}
                className="w-24 h-24 object-contain p-3"
              />
              <p className="text-lg font-semibold py-3">{title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Techs;
