import React from 'react';
import Baner from '../components/Baner';
import Skills from '../components/Skills';
import Project from "../components/Project";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar"

function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <Baner />
      <Skills />
      <Project />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
