import React from "react";
import myImage from "../assets/myImage.jpg"
import resume from "../assets/resume/Resume_sample.pdf"
import instagram from "../assets/icons/instagramL.png"
import x from "../assets/icons/xL.png"
import github from "../assets/icons/githubL.png"
import linkedin from "../assets/icons/linkedinL.png"

function Baner() {
  return (
    <>
      <div className="h-screen  md:flex">
        <div className="my-20 md:w-[60%]  md:mt-20 w-screen">
          <p className=" mx-14 h-48 md:h-80 md:mx-40 md:w-[74%]  leading-7  font-medium rounded-md text-3xl 
         bg-blue-300 p-4 md:p-4 md:leading-14 md:text-6xl md:ml-48  ">
            Hiii👋,<br />
            I'm a Full stack<br />
            developer,<br />
            I build things
          </p>
          <p className=" md:ml-36 text-sm font-medium lg:text-lg dark:text-white px-14"
          >Welcome to my digital space! I'm Md Hasmat, a passionate full-stack developer with a flair for crafting digital experiences.
          </p>
          <div className="flex md:ml-28 space-x-8 md:space-x-6 ml-0 justify-center mt-4 flex-wrap w-full">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" className="h-8 w-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" className="h-8 w-8" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img src={x} alt="x" className="h-8 w-8" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="instagram" className="h-8 w-8" />
            </a>
            {/* resume */}
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mr-52 mt-8 md:mt-0 md:ml-10 ml-16"
            >View Resume
            </a>
          </div>
        </div>


        {/* left div */}
        <div className="md:w-[40%] my-16 md:mx-28 ">
          <img src={myImage} alt="img not found"
            className=" md:h-[27rem] h-96 mx-12  rounded-full  md:ml-34 " />
        </div>
      </div>
    </>
  );
}

export default Baner;


