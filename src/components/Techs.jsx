import web2 from "../assets/CSS.png";
import web8 from "../assets/GitHub.png";
import web7 from "../assets/graphql.png";
import web1 from "../assets/html1.png";
import web3 from "../assets/JavaScript.png";
import web5 from "../assets/Material UI.png";
import web4 from "../assets/React.png";
import web6 from "../assets/Tailwind.png";

const Techs = () => {
  const techs = [
    {
      id: 1,
      src: web1,
      title: "HTML",
    },
    {
      id: 2,
      src: web2,
      title: "CSS",
    },
    {
      id: 3,
      src: web3,
      title: "JavaScript",
    },
    {
      id: 4,
      src: web4,
      title: "react",
    },
    {
      id: 5,
      src: web5,
      title: "Material UI",
    },
    {
      id: 6,
      src: web6,
      title: "Tailwind CSS",
    },
    {
      id: 7,
      src: web7,
      title: "graphQL",
    },
    {
      id: 8,
      src: web8,
      title: "github",
    },
  ];
  return (
    <div>
      <section>
        <div>
          <h3 className="text-3xl py-1">Tech Stack</h3>
          <p className="text-sm py-2 leading-8 text-gray-800">
            Since the beginning of my journey as a freelancer developer, I've
            done remote work for
            <span className="text-teal-500"> agencies </span> and consulted for{" "}
            <span className="text-teal-500"> startups </span>
            and collaborated with talented people to create digital products for
            both business and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800">
            I have experience using the following technologies to build the
            future
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10">
          {techs.map(({ id, title, src }) => {
            return (
              <div
                key={id}
                className="shadow-lg p-10 rounded-xl my-10 grid place-items-center capitalize"
              >
                <image src={src} alt="Logo" />
                <p>{title}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Techs;
