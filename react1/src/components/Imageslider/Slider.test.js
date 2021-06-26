import { render,screen,cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ImageSlider from "./Imageslider"
import ReactDOM from 'react-dom';
import image1 from "../images/Home.png";
import image2 from "../images/home2.png";


afterEach(cleanup);

it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<ImageSlider images={[image1, image2]}/>,div)
})

it("Imageslider works correctly",()=>{
    render(<ImageSlider images={[image1, image2]}/>);
    const image=screen.getAl;
})

