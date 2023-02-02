import styles from 'styles/foodsCategory-mainPage.module.css';
import Card from 'common/cardFood';
import {Foods} from "data/data";
import { useState } from 'react';
import { FaChevronRight,FaChevronLeft } from "react-icons/fa";
const FoodsCategory = ({category_Name})=>{
    const logo = Foods[category_Name]["logo"];
    const foods = Foods[category_Name]["foods"];
    // this state define the index of active slide 
    const [active_slide_index,set_active_slide_index] = useState(0);

    const change_style_slides_wrapper_element = (index)=>{
        set_active_slide_index(index);
        const slides_wrapper = document.getElementById(`slides_wrapper_${category_Name}`);
        if(window.innerWidth>992){
            slides_wrapper.style.transform = `translateX(${index*34}%)`;
        }else if(window.innerWidth>576){
            slides_wrapper.style.transform = `translateX(${index*51}%)`;
        }else{
            slides_wrapper.style.transform = `translateX(${index*102}%)`;
        }
    }
    // this function handle the next button
    const go_next_btn = ()=>{
        const active_slide =  (active_slide_index==foods.length-1) ? foods.length-1 : active_slide_index+1;
        change_style_slides_wrapper_element(active_slide);
        
    }
    // this function handle the previous button
    const  go_prev_btn = ()=>{
        const active_slide =  (active_slide_index==0) ? 0 : active_slide_index-1;
        change_style_slides_wrapper_element(active_slide);
    }

    return(
        <section className={styles.category} id={`${category_Name}_section`}>
            <div className={styles.img_category_wrapper}>
                <img src={logo} alt={category_Name} className={styles.img_category} />
            </div>
            <div className={styles.foods_slideShow}>
                <div className={styles.slideShow_container}>
                    <div className={styles.slides_wrapper} id={`slides_wrapper_${category_Name}`}>
                        {foods.map((food,index)=>(
                            <Card food={food} key={index}/>
                        ))}
                    </div>
                </div>
                <button className={`${styles.next_btn} ${active_slide_index==foods.length-1  ? styles.disable_prev_next_btn : null}`} onClick={go_next_btn}><FaChevronRight className={styles.rightIcon}/></button>
                <button className={`${styles.prev_btn}  ${active_slide_index==0  ? styles.disable_prev_next_btn : null}`} onClick={go_prev_btn}><FaChevronLeft className={styles.leftIcon}/></button>
            </div>
        </section>
    )
}
export default FoodsCategory;