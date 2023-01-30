import styles from 'styles/firstSlider-mainPage.module.css';
import {useState} from "react";
const Slider = ({activeSlideIndex,setActiveSlideIndex,slidesList})=>{
    const [activeSlideClone ,setActiveSlideClone] = useState(0);
    //this function handle button of slide 
    const slideBtnHandler = (index)=>{
        if(index==1 && activeSlideIndex==slidesList.length-2){
            setActiveSlideIndex(slidesList.length-1);
        }else if(index==slidesList.length-2 && activeSlideIndex==1){
            setActiveSlideIndex(0);
        }
        else{
            setActiveSlideIndex(index);
        }
    }
    //this function handle transitionEnd event
    const transitionEndHandler = (event)=>{
        const slides = event.target.children;
        if(slides[activeSlideIndex].id=="first-clone"){
            setActiveSlideClone(1);
            setActiveSlideIndex(1);
        }else if(slides[activeSlideIndex].id=="last-clone"){
            setActiveSlideClone(1);
            setActiveSlideIndex(slidesList.length-2);
        }
        else{
            setActiveSlideClone(0);
        }
    }
    return(
    
            <div className={styles.slideShow}>
                <div className={styles.slides} 
                style={{transform:`translateX(${100*activeSlideIndex}%)`,
                    transition : ((activeSlideClone && activeSlideIndex==1) || (activeSlideClone && activeSlideIndex==slidesList.length-2))? "transform 0s": "transform 0.4s" }}
                    onTransitionEnd={transitionEndHandler}>
                    {slidesList.map((slide,index)=>(
                        <div className={styles.slideWrapper} key={index} id={(index==slidesList.length-1)?"first-clone":(index==0)?"last-clone":null}>
                            <img src={`./images/${slide}`} alt={`slide${index}`} className={`${styles.slide}`}/>
                        </div>
                    ))}
                </div>
                <div className={styles.btn_slides_wrapper}>
                    {slidesList.map((slide,index)=>(
                        (index<slidesList.length-1) && (index>0)? 
                        <div key={index} 
                            className={`${styles.btn_slide} ${(index==activeSlideIndex || (activeSlideIndex==slidesList.length-1 && index==1) || (activeSlideIndex==0 && index==slidesList.length-2))?styles.btn_slide_active:null}`} onClick={()=>slideBtnHandler(index)}>
                        </div>
                        :null
                    ))}
                </div>
            </div>
    )
}
export default Slider;