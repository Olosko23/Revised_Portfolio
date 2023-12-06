import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="w-full mt-10">
        <div className="h-10">
          <div className="flex flex-row justify-center gap-3">
            <p className="font-medium">George Collins &copy; 2023</p>
            <p className="font-thin hidden sm:flex">
              Developed using React and Tailwind CSS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
