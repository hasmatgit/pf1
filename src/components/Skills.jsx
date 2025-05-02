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
import skills from "../data/skills.json";

function Stack() {
  const sections = [
    { title: "Frontend Skills", data: skills.frontend },
    { title: "Backend Skills", data: skills.backend },
    { title: "Database", data: skills.database },
    { title: "Languages", data: skills.language },
    { title: "Cloud Skills", data: skills.cloud },
    { title: "DevOps Skills", data: skills.devops },
  ];

  return (
    <>
      <div className="my-18 md:my-auto">
        <h1 className="bg-pink- text-center text-4xl font-extrabold text-gray-800 md:mb-10">
          🚀Skills
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

