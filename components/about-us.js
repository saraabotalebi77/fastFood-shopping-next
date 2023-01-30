import {useState} from "react";
import Gallery from "./gallery-aboutusPage";
import Slider from "./slider-aboutusPage";
const AboutUS = ()=>{
    const [activeSlide,setActiveslide] = useState(0);
    return(
        <div>
            <Gallery setActiveSlide={setActiveslide}/>
        </div>
    )
}
export default AboutUS;