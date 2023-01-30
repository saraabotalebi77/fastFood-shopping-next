import styles from 'styles/foodsCategory-mainPage.module.css';
import Card from 'common/cardFood';
import Foods from "data/data";
import { useState } from 'react';
import { FaChevronRight,FaChevronLeft } from "react-icons/fa";
const FoodsCategory = ({category_Name})=>{
    const logo = Foods[category_Name]["logo"];
    const foods = Foods[category_Name]["foods"];
    const [active_slide ,set_active_slide] = useState(0);
    const go_next_btn = ()=>{
        set_active_slide(prev_active=>prev_active==foods.length-1 ? foods.length-1 : prev_active+1);
        console.log(active_slide);
    }
    const  go_prev_btn = ()=>{
        set_active_slide(prev_active=>prev_active==0 ? 0 : prev_active-1);
        console.log(active_slide);
    }
    
    return(
        <section className={styles.category} id={category_Name}>
            <div className={styles.img_category_wrapper}>
                <img src={logo} alt={category_Name} className={styles.img_category} />
            </div>
            <div className={styles.foods_slideShow}>
                <div className={styles.slideShow_container}>
                    <div className={styles.slides_wrapper} id="slides_wrapper">
                        {foods.map((food,index)=>(
                            <Card food={food} key={index}/>
                        ))}
                    </div>
                </div>
                <button className={styles.next_btn} onClick={go_next_btn}><FaChevronRight className={styles.rightIcon}/></button>
                <button className={styles.prev_btn} onClick={go_prev_btn}><FaChevronLeft className={styles.leftIcon}/></button>
            </div>
        </section>
    )
}
export default FoodsCategory;