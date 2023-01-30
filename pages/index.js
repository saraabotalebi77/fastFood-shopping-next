import Home from "components/home";
import { useEffect,useState } from "react";
const HomePage = ()=>{
    // this state define index of active slide
    const[activeSlideIndex,setActiveSlideIndex] = useState(1);
    // the list of slides 
    const slidesList  = ["slide4.webp","slide1.webp","slide2.jpg","slide3.png","slide4.webp","slide1.webp"];
    let timerId = null;
    //this function is defined for reset setTimeout that is defined in useEffect 
    const resetTimeout = ()=>{
        if(timerId){
            clearTimeout(timerId);
        }
    }
    useEffect(()=>{
        resetTimeout();
        timerId = setTimeout(()=>{
            setActiveSlideIndex((prevIndex)=> (prevIndex>=slidesList.length-1) ? 0 : prevIndex+1)
        },4000);
        return () => {
            resetTimeout();
        };
    }, [activeSlideIndex]);
    return(
        <Home activeSlideIndex={activeSlideIndex} setActiveSlideIndex={setActiveSlideIndex} slidesList={slidesList}/>
    )
}
export default HomePage;