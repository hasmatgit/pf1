import React from 'react'
import Card from "../components/Card.jsx"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";


import list from "../assets/list.json";

function Project() {
    const filterData = list.filter((data) => data.category === "Free");
    

  const [nav2, setNav2] = useState(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav2(sliderRef2);
  }, []);
    return (
        <>
            <div className=''>
                <div className='text-6xl text-center text-indigo-400'>Projects</div>
                <br />
                <p className='text-center text-red-800'>Things I’ve built so far</p>
            </div>
            
            {/* slider */}
            <div>
            
      <h4>Second Slider</h4>
      <Slider
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        className="" // <-- Important
      >

        {filterData.map((item) => (
            <Card item={item} key={item.id} />
        ))}
      </Slider>
            </div>
        </>
    )
}

export default Project
