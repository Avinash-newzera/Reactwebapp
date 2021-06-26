//@flow
import React from 'react';
import image1 from "../images/Home.png";
import image2 from "../images/home2.png";
import ImageSlider from "../Imageslider/Imageslider"
import Apitext from "../Text/Apitext"
import Icons from"../Icons/Icons"

function Home() {
  return (
    <div className="App">
      <ImageSlider images={[image1, image2]}/>
      <Apitext/>
      <Icons/>
    </div>
  );
}

export default Home;