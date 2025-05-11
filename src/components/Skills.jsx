// import React from "react";
// import skills from "../data/skills.json";

// function Stack() {
//   return (
//     <>
//       <div className="my-18 md:my-auto">
//         <h1 className=" bg-pink- text-center text-4xl font-extrabold text-gray-800 md:mb-10">
//           🚀Skills
//         </h1>
//       </div>

//       {/* frontend skills */}
//       <div className="bg-red-  my-6 py-2 max-w-screen-2xl container mx-auto md:px-20 px-4 flex">
//         {/* Left */}
//         <div className="bg-green- w-1/2 max-h-full ">
//           <p className="bg-orange-200  md:text-3xl mt-5 md:mt-auto whitespace-nowrap md:ml-54">
//           Frontend Skills
//           </p>
//         </div>
//         {/* Right */}
//         <div className="md:mx-40 md:ml-auto ml-6 md:my-4">
//           <div className="h-full w-full gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
//             {skills.frontend.map((skill, index) => (
//               <div key={index} className=" md:h-14 md:w-14 h-9 w-9">
//                 <img src={skill.icon} alt={skill.name} className="" />
//                 {/* <p className="mt-2 text-sm">{skill.name}</p> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <hr />

//       {/* backend skills */}
//       <div className="bg-red-  my-6 py-2 max-w-screen-2xl container mx-auto md:px-20 px-4 flex">
//         {/* Left */}
//         <div className="bg-green- mt-10 w-1/2 h-20 ">
//           <p className="bg-orange- md:text-3xl md:mt-auto mt-5 whitespace-nowrap md:ml-54">Backend Skills</p>
//         </div>
//         {/* Right */}
//         <div className="md:mx-40 my-4">
//           <div className="h-full w-full gap-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
//             {skills.backend.map((skill, index) => (
//               <div key={index} className=" h-14 w-14">
//                 <img
//                   src={skill.icon}
//                   alt={skill.name}
//                 />
//                 {/* <p className="mt-2 text-sm">{skill.name}</p> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <hr />

//       {/* Database */}
//       <div className="bg-red-  my-6 py-2 max-w-screen-2xl container mx-auto md:px-20 px-4 flex">
//         {/* Left */}
//         <div className="bg-green- mt-10 w-1/2 h-20 ">
//           <p className="bg-orange- md:text-3xl md:mt-auto mt-5 whitespace-nowrap md:ml-54">Database</p>
//         </div>
//         {/* Right */}
//         <div className="md:mx-40 my-4">
//           <div className="h-full w-full gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
//             {skills.database.map((skill, index) => (
//               <div key={index} className=" h-14 w-14">
//                 <img
//                   src={skill.icon}
//                   alt={skill.name}
//                 />
//                 {/* <p className="mt-2 text-sm">{skill.name}</p> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <hr />

//       {/* Languages */}
//       <div className="bg-red-  my-6 py-2 max-w-screen-2xl container mx-auto md:px-20 px-4 flex">
//         {/* Left */}
//         <div className="bg-green- mt-10 w-1/2 h-20 ">
//           <p className="bg-orange- md:text-3xl md:mt-auto mt-5 whitespace-nowrap md:ml-54">Languages</p>
//         </div>
//         {/* Right */}
//         <div className="md:mx-40 my-4">
//           <div className="h-full w-full gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
//             {skills.language.map((skill, index) => (
//               <div key={index} className=" h-14 w-14">
//                 <img
//                   src={skill.icon}
//                   alt={skill.name}
//                 />
//                 {/* <p className="mt-2 text-sm">{skill.name}</p> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <hr />

//       {/* Cloud Skills */}
//       <div className="bg-red-  my-6 py-2 max-w-screen-2xl container mx-auto md:px-20 px-4 flex">
//         {/* Left */}
//         <div className="bg-green- mt-10 w-1/2 h-20 ">
//           <p className="bg-orange- md:text-3xl md:mt-auto mt-5 whitespace-nowrap md:ml-54">Cloud Skills</p>
//         </div>
//         {/* Right */}
//         <div className="md:mx-40 my-4">
//           <div className="h-full w-full gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
//             {skills.cloud.map((skill, index) => (
//               <div key={index} className=" h-14 w-14">
//                 <img
//                   src={skill.icon}
//                   alt={skill.name}
//                 />
//                 {/* <p className="mt-2 text-sm">{skill.name}</p> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <hr />

//       {/* DevOps Skills */}
//       <div className="bg-red-  my-6 py-2 max-w-screen-2xl container mx-auto md:px-20 px-4 flex">
//         {/* Left */}
//         <div className="bg-green- mt-10 w-1/2 h-20 ">
//           <p className="bg-orange- md:text-3xl md:mt-auto mt-5 whitespace-nowrap md:ml-54">DevOps Skills</p>
//         </div>
//         {/* Right */}
//         <div className="md:mx-40 my-4">
//           <div className="h-full w-full gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
//             {skills.devops.map((skill, index) => (
//               <div key={index} className=" h-14 w-14">
//                 <img
//                   src={skill.icon}
//                   alt={skill.name}
//                 />
//                 {/* <p className="mt-2 text-sm">{skill.name}</p> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <hr />
//     </>
//   );
// }

// export default Stack;



import React from "react";
// 📦 Importing all skill icons
import aws from "../assets/icons/aws.png";
import c from "../assets/icons/c.jpg";
import cloud from "../assets/icons/cloud.jpg";
import cpp from "../assets/icons/cpp.jpg";
import css from "../assets/icons/css.jpg";
import docker from "../assets/icons/docker1.jpg";
import ex from "../assets/icons/ex.jpg";
import git from "../assets/icons/git1.jpg";
import html from "../assets/icons/html.jpg";
import instagram from "../assets/icons/instagram.png";
import java from "../assets/icons/java.jpg";
import js from "../assets/icons/js.jpg";
import linkedin from "../assets/icons/linkedin.png";
import linux from "../assets/icons/linux.jpg";
import mongodb from "../assets/icons/mongodb1.jpg";
import node from "../assets/icons/nodejs1.jpg";
import python from "../assets/icons/python.jpg";
import react from "../assets/icons/react.jpg";
import sass from "../assets/icons/sass.jpg"
import tailwind from "../assets/icons/tailwind.jpg"
import ts from "../assets/icons/ts.jpg"
import sql from "../assets/icons/sql.jpg"

// 🧠 Skills data directly in JS
const sections = [
  {
    title: "Frontend Skills",
    data: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "REACT", icon: react },
      { name: "SASS", icon: sass },
      { name: "TAILWIND", icon: tailwind },
    ],
  },
  {
    title: "Backend Skills",
    data: [
      { name: "NODE", icon: node },
      { name: "EX", icon: ex },
      { name: "JS", icon: js },
      { name: "TS", icon: ts },
    ],
  },
  {
    title: "Database",
    data: [
      { name: "MONGODB", icon: mongodb },
      { name: "SQL", icon: sql },
    ],
  },
  {
    title: "Languages",
    data: [
      { name: "JAVA", icon: java },
      { name: "C", icon: c },
      { name: "CPP", icon: cpp },
      { name: "PYHTON", icon: python },
    ],
  },
  {
    title: "Cloud Skills",
    data: [
      { name: "CLOUD", icon: cloud },
      { name: "AWS", icon: aws },
    ],
  },
  {
    title: "DevOps Skills",
    data: [
      { name: "GIT", icon: git },
      { name: "DOCKER", icon: docker },
      { name: "LINUX", icon: linux },
    ],
  },
];

function Stack() {
  return (
    <>
      <div className="mt-44 md:my-auto">
        <h1 className="bg-pink- text-center text-4xl font-extrabold text-gray-800 md:mb-10">
          Skills🚀
        </h1>
      </div>

      {sections.map((section, idx) => (
        <React.Fragment key={idx}>
          <div className="bg-red- my-6 py-2 max-w-screen-2xl container mx-auto md:px-20 px-4 flex">
            {/* Left */}
            <div className="bg-green- mt-14 w-1/2 h-20">
              <p className="bg-orange- ml-6 md:text-3xl whitespace-nowrap md:ml-54">
                {section.title}
              </p>
            </div>

            {/* Right */}
            <div className="bg-amber- md:mx-40 my-4">
              <div className="bg-green- h-full w-full gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {section.data.map((skill, index) => (
                  <div key={index} className="bg- md:h-14 md:w-14 h-10 w-10">
                    <img src={skill.icon} alt={skill.name} className="" />
                    {/* <p className="mt-2 text-sm">{skill.name}</p> */}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Horizontal line after each section */}
          <hr />
        </React.Fragment>
      ))}
    </>
  );
}

export default Stack;
