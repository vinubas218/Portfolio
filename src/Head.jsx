import React from 'react'
import { AiOutlineDownload } from "react-icons/ai";
import { LuMail } from "react-icons/lu";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { IoMdExpand } from "react-icons/io";
import { motion } from "framer-motion";

import shop from './img/shop.png'
import todo from './img/todo.png'
import clc from './img/clc.png'
import mr from './img/mr.png'
import hm from './img/hm.png'
import html1 from './img/html1.jpg'
import css from './img/css.png'
import tailwind from './img/tailwind.png'
import js from './img/js.png'
import react from './img/react.png'
import node from './img/node.png'
import express from './img/express.png'
import db from './img/db.png'
import git from './img/git.png'
import python from './img/python.png'
import gmail from './img/gmail.png'
import linkedin from './img/linkedin.png'
import github from './img/github.png'
import photo from './img/Photo.jpeg'
import { Typewriter } from 'react-simple-typewriter';


const Head = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1MYroadL1yQ8u_I9YMA1iOjkxsQ-LodjM";
    link.download = "Vinuba_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='bg-gray-200 bg-gradient-to-r from-gray-100 to-gray-300'>
      <div className='flex gap-5 justify-center md:justify-end md:items-end md:mr-32 pt-6 pb-2 outline-none border-none'>
        <button
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:shadow-xl transition"
          onClick={handleDownload}
        >
          Download <AiOutlineDownload className="text-lg" />
        </button>
        <a
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:shadow-xl transition"
          href="https://drive.google.com/file/d/1MYroadL1yQ8u_I9YMA1iOjkxsQ-LodjM/view?usp=sharing"
          target="_blank"
        >
          Resume<span className="text-lg"><IoMdExpand /></span>
        </a>
      </div>

      <div className=' flex flex-col md:flex-row justify-evenly gap-10 items-center px-5'>
        <img src={photo} alt="" className='mix-blend-darken w-52 sm:w-64 md:w-80 lg:w-[450px] ' loading='lazy'/>
        <div className='flex flex-col md:items-start items-center text-center md:text-left'>
          <p className='text-4xl pb-4 tracking-wide leading-snug'>Hai,</p>
          <p className='text-4xl pb-4 font-semibold tracking-wide leading-snug'>I'm Vinuba</p>
          <p className='text-4xl pb-4 font-bold md:w-[450px] '>
            <Typewriter
              words={['MERN Stack Developer', 'Frontend Developer', 'React Enthusiast']}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
          <div className='flex gap-6 pt-10 md:pl-24 text-center md:pt-20'>
            <a href="mailto:vinuba218@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Send Email">
              <LuMail className="text-3xl text-orange-600 animate-pulse hover:text-orange-700 transition" />
            </a>
            <a href="https://github.com/vinubas218" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <BsGithub className="text-3xl text-orange-600 animate-pulse hover:text-orange-700 transition" />
            </a>
            <a href="https://www.linkedin.com/in/vinubas" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <GrLinkedin className="text-3xl text-orange-600 animate-pulse hover:text-orange-700 transition" />
            </a>
          </div>
        </div>
      </div>


      <div className="p-10  text-center" >
        <h2 className="text-4xl font-bold py-6">ABOUT</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          I'm Vinuba, a MERN Stack Developer passionate about building scalable and user-friendly web applications. I specialize in React, MongoDB, Express, and Node.js to create seamless digital experiences with clean, efficient, and maintainable code. I enjoy solving complex problems, optimizing web performance, and continuously learning to stay updated with the latest technologies. My goal is to deliver high-quality solutions that enhance user experience and drive innovation in web development.
        </p>
      </div>

      <div className=' text-center md:p-15'>
        <p className="text-4xl font-bold mb-4">PROJECTS</p>
        <p>Check out some of my personal projects...</p>
        <div className='p-10 grid grid-cols-1  md:grid-cols-3 gap-10 justify-center '>
          <div className=' rounded-2xl w-full  shadow-xl relative group transition-transform duration-400 hover:scale-110'>
            <img src={shop} alt="" className='w-full  h-[200px] rounded-2xl group-hover:blur-xs' />
            <a className='absolute top-20 left-0 right-0 opacity-0 bg-black text-white p-3 w-40 mx-auto rounded-xl group-hover:opacity-100' href="https://shop-iikn.onrender.com" target="_blank">View Project</a>
            <p className='p-5 text-gray-600'>The Dress Affair - E-Commerce Website</p>
          </div>

          <div className=' rounded-2xl shadow-xl relative group transition-transform duration-400 hover:scale-110'>
            <img src={todo} alt="" className='w-full  h-[200px] rounded-2xl group-hover:blur-xs' />
            <a className='absolute top-20 left-0 right-0 opacity-0 bg-black text-white p-3 w-40 mx-auto rounded-xl group-hover:opacity-100' href="https://todo-j1dn.onrender.com/" target="_blank">View Project</a>
            <p className='p-5 text-gray-600'>ToDo List</p>
          </div>

          <div className=' rounded-2xl shadow-xl relative group transition-transform duration-400 hover:scale-110'>
            <img src={clc} alt="" className='w-full  h-[200px] rounded-2xl group-hover:blur-xs' />
            <a className='absolute top-20 left-0 right-0 opacity-0 bg-black text-white p-3 w-40 mx-auto rounded-xl group-hover:opacity-100' href="https://calculator-ab3z.onrender.com" target="_blank">View Project</a>
            <p className='p-5 text-gray-600'>Calculator</p>
          </div>

          <div className=' rounded-2xl shadow-xl relative group transition-transform duration-400 hover:scale-110'>
            <img src={mr} alt="" className='w-full  h-[200px] rounded-2xl group-hover:blur-xs' />
            <a className='absolute top-20 left-0 right-0 opacity-0 bg-black text-white p-3 w-40 mx-auto rounded-xl group-hover:opacity-100' href="https://cinegraph.onrender.com/" target="_blank">View Project</a>
            <p className='p-5 text-gray-600'>CineGraph - Movie Reviewer</p>
          </div>

          <div className=' rounded-2xl shadow-xl relative group transition-transform duration-400 hover:scale-110'>
            <img src={hm} alt="" className='w-full  h-[200px] rounded-2xl group-hover:blur-xs' />
            <a className='absolute top-20 left-0 right-0 opacity-0 bg-black text-white p-3 w-40 mx-auto rounded-xl group-hover:opacity-100' href="https://hospitalmanagementapp-o4sa.onrender.com/" target="_blank">View Project</a>
            <p className='p-5 text-gray-600'>Hospital Management App</p>
          </div>
        </div>
      </div>

      <div className=' text-center p-5'>
        <p className="text-4xl font-bold py-10">SKILLS</p>
        <div className='max-w-4xl mx-auto grid grid-cols-2 place-items-center gap-8 md:grid-cols-4 '>
          {[
            { src: html1, label: "HTML" },
            { src: css, label: "CSS" },
            { src: tailwind, label: "Tailwind CSS" },
            { src: js, label: "JavaScript" },
            { src: react, label: "React.js" },
            { src: express, label: "Express.js" },
            { src: node, label: "Node.js" },
            { src: db, label: "MongoDB" },
            { src: git, label: "Git" },
            { src: python, label: "Python" }
          ].map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={skill.src}
                alt={skill.label}
                className='h-24 w-24 rounded-2xl shadow-xl shadow-gray-500/40 transition-transform duration-300 hover:scale-110'
              />
              <p className='pt-4 text-lg font-semibold text-gray-600'>{skill.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=' text-center p-15'>
        <p className="text-4xl font-bold py-10">MORE ABOUT ME!</p>
        <div className='shadow-xl md:w-[800px] mx-auto p-3 space-y-2 bg-gray-100 rounded-xl '>
          <p className='uppercase text-md font-medium '>BE - Electronics and Communication Engineering</p>
          <p className='uppercase text-md font-medium text-gray-700'>ARUNACHALA COLLEGE OF ENGINEERING FOR WOMEN</p>
          <p className='uppercase text-sm font-medium text-gray-500'>2021 - 2025</p>
        </div>
      </div>

      <div className=' text-center p-15'>
        <p className="text-4xl font-bold pb-10">EXPERIENCE</p>
        <div className='flex flex-col gap-10'>
          <div className='shadow-xl flex flex-col justify-items-start items-start md:w-[800px] mx-auto p-3 space-y-0.5 bg-gray-100 rounded-xl '>
            <p className='uppercase text-md font-medium  '>full-time</p>
            <p className='uppercase text-md font-medium text-gray-700'>zthree infotech</p>
            <p className='uppercase text-sm text-gray-600'>mar 2025 - Present</p>
            <p className='text-gray-600 text-justify py-2 text-sm leading-relaxed'>
              Working as a full-time developer, focusing on building scalable and high-performance web applications.
              Gaining hands-on experience with modern web technologies, optimizing code efficiency, and contributing
              to end-to-end development processes.
            </p>

          </div>
          <div className='shadow-xl flex flex-col justify-items-start items-start md:w-[800px] mx-auto p-3 space-y-0.5 bg-gray-100 rounded-xl '>
            <p className='uppercase text-md font-medium '>intern</p>
            <p className='uppercase text-md font-medium text-gray-700'>feather softwares</p>
            <p className='uppercase text-sm text-gray-600'>dec 2024 - jan 2025</p>
            <p className='text-gray-600 text-justify py-2 text-sm leading-relaxed'>
              Gained hands-on experience in MERN stack development, covering MongoDB, Express.js, React.js, and Node.js.
              Learned to build and integrate RESTful APIs, implement authentication, manage application state, and optimize performance.
              Explored deployment strategies and best practices for scalable web applications.
            </p>
          </div>
        </div>
      </div>


      <div className=' text-center pb-5 p-5 md:p-15'>
        <p className="text-4xl font-bold mb-6">GET IN TOUCH</p>
        <form action="" className='bg-gray-200 w-fit mx-auto rounded-md p-5'>
          <div className='flex flex-col py-2'>
            <label htmlFor="" className='flex justify-items-start pb-2 text-gray-500'>Name</label>
            <input type="text" className='border border-gray-300 outline-none rounded-md p-3 md:w-[500px]' />
          </div>
          <div className='flex flex-col py-3'>
            <label htmlFor="" className='flex justify-items-start pb-2 text-gray-500'>Email Address</label>
            <input type="text" className='border border-gray-300 outline-none rounded-md p-3' />
          </div>
          <div className='flex flex-col pb-5'>
            <label htmlFor="" className='flex justify-items-start pb-2 text-gray-500'>Message</label>
            <textarea name="" id="" className='border border-gray-300 outline-none rounded-md p-3'></textarea>
          </div>
          <button
            onClick={() => window.location.href = "mailto:vinuba218@gmail.com?subject=Contact&body=Hello, I would like to get in touch!"}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 cursor-pointer text-white rounded-lg hover:shadow-xl transition">
            Send Message
          </button>
        </form>

        <div className='flex gap-10 justify-center pt-10'>
          <a href="mailto:vinuba218@gmail.com" target="_blank">
            <img src={gmail} alt="Contact Me" className='h-12 w-12 rounded-xl shadow-xl' />
          </a>
          <a href="https://github.com/vinubas218" target="_blank">
            <img src={github} alt="LinkedIn Profile" className='h-12 w-12 rounded-xl shadow-xl' />
          </a>
          <a href="https://www.linkedin.com/in/vinubas" target="_blank">
            <img src={linkedin} alt="LinkedIn Profile" className='h-12 w-12 rounded-xl shadow-xl' />
          </a>
        </div>
      </div>

      <div className='text-center p-5 bg-gray-300'>
        <p className='text-xl'>Copyright &copy; 2025 Vinuba </p>
      </div>

    </div>
  )
}

export default Head
