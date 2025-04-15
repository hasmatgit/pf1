import React from "react";
import skills from "../data/skills.json"


function Stack() {
  return (
    <>
      <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-10">🚀Skills</h1>

      {/* frontend skills */}
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex">
        {/* Left */}
        <div className="mt-25 bg-amber- w-1/2 h-20">
          <h1 className="ml-54">Frontend Skills</h1>
        </div>
        {/* Right */}
        <div className="ml-40">
          <div className="h-64 w-96 bg-amber- grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-0">
          {skills.frontend.map((skill, index) => (
          <div key={index} className="flex flex-col items-center m-4">
            <img src={skill.icon} alt={skill.name} className="h-12 w-12 object-contain" />
            <p className="mt-2 text-sm">{skill.name}</p>
          </div>
        ))}
          </div>
        </div>
      </div>
      <hr />

      {/* backend skills */}
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex">
        {/* Left */}
        <div className="mt-25 bg-amber- w-1/2 h-20">
          <h1 className="ml-54">Backend Skills</h1>
        </div>
        {/* Right */}
        <div className="ml-40">
          <div className="h-64 w-96 bg-amber- grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4">
          {skills.backend.map((skill, index) => (
          <div key={index} className="flex flex-col items-center m-4">
            <img src={skill.icon} alt={skill.name} className="h-12 w-12 object-contain" />
            <p className="mt-2 text-sm">{skill.name}</p>
          </div>
        ))}
          </div>
        </div>
      </div>
      <hr />

      {/* Database */}
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex">
        {/* Left */}
        <div className="mt-25 bg-amber- w-1/2 h-20">
          <h1 className="ml-54">Database</h1>
        </div>
        {/* Right */}
        <div className="ml-40">
          <div className="h-64 w-96 bg-amber- grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4">
          {skills.backend.map((skill, index) => (
          <div key={index} className="flex flex-col items-center m-4">
            <img src={skill.icon} alt={skill.name} className="h-12 w-12 object-contain" />
            <p className="mt-2 text-sm">{skill.name}</p>
          </div>
        ))}
          </div>
        </div>
      </div>
      <hr />

      {/* Languages */}
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex">
        {/* Left */}
        <div className="mt-25 bg-amber- w-1/2 h-20">
          <h1 className="ml-54">Languages</h1>
        </div>
        {/* Right */}
        <div className="ml-40">
          <div className="h-64 w-96 bg-amber- grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4">
          {skills.backend.map((skill, index) => (
          <div key={index} className="flex flex-col items-center m-4">
            <img src={skill.icon} alt={skill.name} className="h-12 w-12 object-contain" />
            <p className="mt-2 text-sm">{skill.name}</p>
          </div>
        ))}
          </div>
        </div>
      </div>
      <hr />

      {/* Cloud Skills */}
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex">
        {/* Left */}
        <div className="mt-25 bg-amber- w-1/2 h-20">
          <h1 className="ml-54">Cloud Skills</h1>
        </div>
        {/* Right */}
        <div className="ml-40">
          <div className="h-64 w-96 bg-amber- grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4">
          {skills.backend.map((skill, index) => (
          <div key={index} className="flex flex-col items-center m-4">
            <img src={skill.icon} alt={skill.name} className="h-12 w-12 object-contain" />
            <p className="mt-2 text-sm">{skill.name}</p>
          </div>
        ))}
          </div>
        </div>
      </div>
      <hr />
      
      {/* DevOps Skills */}
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex">
        {/* Left */}
        <div className="mt-25 bg-amber- w-1/2 h-20">
          <h1 className="ml-54">DevOps Skills</h1>
        </div>
        {/* Right */}
        <div className="ml-40">
          <div className="h-64 w-96 bg-amber- grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4">
          {skills.backend.map((skill, index) => (
          <div key={index} className="flex flex-col items-center m-4">
            <img src={skill.icon} alt={skill.name} className="h-12 w-12 object-contain" />
            <p className="mt-2 text-sm">{skill.name}</p>
          </div>
        ))}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Stack;










// <>
//       <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-10">🚀Skills</h1>
      
//       {/* Frontend Skills */}
//       <h2 className="text-xl font-semibold mt-5">Frontend Skills</h2>
//       <div className="flex flex-wrap justify-center">
//         {skills.frontend.map((skill, index) => (
//           <div key={index} className="flex flex-col items-center m-4">
//             <img src={skill.icon} alt={skill.name} className="h-12 w-12 object-contain" />
//             <p className="mt-2 text-sm">{skill.name}</p>
//           </div>
//         ))}
//       </div>

//       <hr className="my-10" />
      
//       {/* Backend Skills */}
//       <h2 className="text-xl font-semibold mt-5">Backend Skills</h2>
//       <div className="flex flex-wrap justify-center">
//         {skills.backend.map((skill, index) => (
//           <div key={index} className="flex flex-col items-center m-4">
//             <img src={skill.icon} alt={skill.name} className="h-12 w-12 object-contain" />
//             <p className="mt-2 text-sm">{skill.name}</p>
//           </div>
//         ))}
//       </div>
//     </>
