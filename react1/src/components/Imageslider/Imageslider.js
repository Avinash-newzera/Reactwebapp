//@flow
import React, { useState, useEffect } from "react";
import styled from "styled-components";
const IndicatorWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  bottom: 65px;
  left:5vw;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: white;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  margin: 5px;
  transition: 750ms all ease-in-out;
`;

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  width: 50vw;
  height: 100vh;
  display: flex;
  flexDirection: column;
  alignItems: center;
  flex-wrap: nowrap;
  overflow-x: hidden;
  position: relative;
  z-index:1;
`;

const Slide = styled.div`
  height: 100%;
  top:0%;
  width: 50vw;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  transition: 750ms all ease-in-out;
`;


const Indicator = ({ currentSlide, Slidecount, nextSlide }) => {
  return (
    <IndicatorWrapper>
      {Array(Slidecount)
        .fill(1)
        .map((_, i) => (
          <Dot
            key={i}
            isActive={currentSlide === i}
            onClick={() => nextSlide(i)}
          />
        ))}
    </IndicatorWrapper>
  );};



const ImageSlider = ({images = [],autoPlayTime = 10000}) => {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;
    setCurrentSlide(newSlideIndex);}

  useEffect(() => {
    const timer = setTimeout(() => {nextSlide();}, autoPlayTime);
    return () => clearTimeout(timer);},[currentSlide]);

  return (
    <Wrapper >
      {images.map((imageUrl, index) => (
        <Slide
          key={index}
          style={{
            backgroundImage: `url(${imageUrl})`,
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,}}
        ></Slide>
      ))}
      <Indicator
        currentSlide={currentSlide}
        Slidecount={images.length}
        nextSlide={nextSlide}/>
    </Wrapper>
  );
};

export default ImageSlider;