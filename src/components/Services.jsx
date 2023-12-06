import React from "react";

const Services = () => {
  return (
    <div>
      <section className="">
        <div className="">
          <h3 className="text-3xl py-1">Services I offer</h3>
          <p className="text-sm py-2 leading-8 text-gray-800">
            Since the beginning of my journey as a freelancer developer, I've
            done remote work for
            <span className="text-teal-500"> agencies </span> and consulted for{" "}
            <span className="text-teal-500"> startups </span>
            and collaborated with talented people to create digital products for
            both business and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800">
            I offer from a wide range of services, including brand design,
            programming and teaching
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following your
              design theory
            </p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <h3 className="text-lg font-medium pt-8 pb-2">Code</h3>
            <p className="py-2">
              Creating elegant software suited for your needs following your
              design theory
            </p>
            <h4 className="py-4 text-teal-600">I develop the following</h4>
            <p className="text-gray-800 py-1">Web Apps</p>
            <p className="text-gray-800 py-1">Mobile Apps</p>
            <p className="text-gray-800 py-1">API's</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
            <p className="py-2">
              Collaboratin with the industries best to continue developing the
              new generation of developers
            </p>
            <h4 className="py-4 text-teal-600">
              Available on the following platforms
            </h4>
            <p className="text-gray-800 py-1">Disscord</p>
            <p className="text-gray-800 py-1">Telegram</p>
            <p className="text-gray-800 py-1">YouTube</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
