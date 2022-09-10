import React from "react";
import html from '../assets/html.svg';
import react from '../assets/reactjs.svg';
import css from '../assets/css.svg';
import javascript from '../assets/javascript.svg';
import nextjs from '../assets/nextjs.png';
import tailwind from '../assets/tailwind.svg';
import git from '../assets/git.svg';
import sass from '../assets/sass.svg';
import SkillsCard from "../components/SkillsCard";

const Skills = () => {

  const data = [
    {id:1, img: html, name: 'HTML'},
    {id:2, img: css, name: 'CSS'},
    {id:3, img: javascript, name: 'JS'},
    {id:4, img: tailwind, name: 'TailwindCSS'},
    {id:5, img: react, name: 'ReactJS'},
    {id:6, img: nextjs, name: 'NextJS'},
    {id:7, img: git, name: 'Git'},
    {id:8, img: sass, name: 'SASS'},
  ]

  return (
    <div className="mx-auto max-w-[1000px]">
    <div className="p-5">
      <header className="text-white font-bold text-4xl text-center p-2"> Skills </header>
      <div className="p-1 py-10 rounded-xl shadow-xl overflow-hidden relative">

        <div className="flex flex-wrap justify-center items-center" >

          {data && data.map((data) =>

          <SkillsCard key={data.id} img={data.img} name={data.name} />

          )}

        </div>

      </div>
    </div>
    </div>
  );
};

export default Skills;
