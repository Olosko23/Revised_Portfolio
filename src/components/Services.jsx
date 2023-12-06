import React from "react";

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-10 px-10">
      <section className="max-w-5xl mx-auto">
        <div className="text-center">
          <h3 className="text-3xl py-1 font-bold text-white">
            Services I Offer
          </h3>
          <p className="text-lg py-2 leading-8 text-gray-200">
            As a seasoned Full Stack Developer, I specialize in delivering
            top-notch software solutions tailored to meet diverse needs. My
            services encompass a range of software development and management
            offerings, aiming to elevate your digital presence and streamline
            operations.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 py-10">
          <div className="text-center shadow-lg p-6 rounded-xl bg-white my-6">
            <h3 className="text-lg font-medium pt-6 pb-2">
              Web Application Development
            </h3>
            <p className="py-2">
              Crafting robust and responsive web applications using modern
              technologies and best practices.
            </p>
          </div>
          <div className="text-center shadow-lg p-6 rounded-xl bg-white my-6">
            <h3 className="text-lg font-medium pt-6 pb-2">
              Mobile App Development with React Native
            </h3>
            <p className="py-2">
              Building cross-platform mobile applications with React Native,
              ensuring performance and scalability.
            </p>
          </div>
          <div className="text-center shadow-lg p-6 rounded-xl bg-white my-6">
            <h3 className="text-lg font-medium pt-6 pb-2">
              API Development and Testing
            </h3>
            <p className="py-2">
              Designing and implementing robust APIs, coupled with thorough
              testing to ensure functionality and reliability.
            </p>
          </div>
          <div className="text-center shadow-lg p-6 rounded-xl bg-white my-6">
            <h3 className="text-lg font-medium pt-6 pb-2">
              Product Management and Testing
            </h3>
            <p className="py-2">
              Offering product management services alongside comprehensive
              testing to deliver exceptional digital products.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
