import React from "react";
import myImage from "../assets/myImage.jpg"
import resume from "../assets/resume/Resume_sample.pdf"


function Baner() {
  return (
    <>
      <div className="flex h-screen ">
        <div className="w-1/2 mt-42 mx-[177px] my-[320px] ">
          <p className="bg-amber-900 sm:bg-black md:bg-red-600  lg:bg-orange-300  xl:bg-indigo-500 2xl:bg-green-500  text-6xl leading-tight">
            Hi👋<br />
            My name is <br />
            Md Hasmat <br />
            I build things for web
          </p>
          <br />
          {/* resume */}
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-success">View Resume</button>
          </a>
        </div>
        {/* my img */}
        <div className="w-1/2 my-34">
          <img src={myImage} alt="img not found" className="h-[27rem] rounded-full" />
        </div>
      </div>
    </>
  );
}

export default Baner;


