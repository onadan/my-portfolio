import React from "react";
// import Picture from "../images/19.png";

const About = () => {
  return (
    <div className="mx-auto max-w-[800px]">
    <div className="p-5">
      <header className="text-white font-bold text-4xl text-center p-2">
        About Me
      </header>
      <div className="bg-gray-900 rounded-2xl shadow-xl md:flex pt-5 md:pt-0 overflow-hidden">
{/*
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto bg-white" src={Picture} alt="" width="384" height="512" /> */}
            <p className="text-white font-light p-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo repudiandae, sequi laboriosam dolorem dicta exercitationem. ugiat animi recusandae repellat culpa nihil deleniti quod eum tenetur. Laborum quas explicabo necessitatibus molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo epudiandae, sequi laboriosam dolorem dicta exercitationem. Fugiat animi recusandae repellat culpa nihil deleniti quod eum tenetur. Laborum quas explicabo necessitatibus molestias.
        </p>
      </div>

    </div>
    </div>
  );
};

export default About;
