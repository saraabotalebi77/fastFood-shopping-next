import FoodsCategory from "./foodsCategory-mainPage";
import styles from 'styles/foods-mainPage.module.css';
import { useState } from "react";
const Foods = ()=>{
    const [active_category,set_active_category] = useState(0);
    const category_list = ["pizza" , "burger" , "salad" ,"soft-drink"];
    const styleTransform = (active_category)=>{
        // if(window.innerWidth<){}
        return `translateX(${180*active_category}px)`
    }
    return(
        <div className={styles.foods}>
            <nav className={styles.navbar}>
                <div className={styles.category_menu_wrapper}>
                    <ul className={styles.category_menu}
                        style={{transform: styleTransform(active_category)}}>
                        <li className={`${styles.category_menu_item} ${active_category==0 ? styles.active_category : null}`}
                            onClick={()=>set_active_category(0)}>
                            <img src="/images/pizza.jpg" className={styles.category_menu_item_img}/>
                        </li>
                        <li className={`${styles.category_menu_item} ${active_category==1 ? styles.active_category : null}`}
                            onClick={()=>set_active_category(1)}>
                            <img src="/images/burger.jpg" className={styles.category_menu_item_img}/>
                        </li>
                        <li className={`${styles.category_menu_item} ${active_category==2 ? styles.active_category : null}`}
                            onClick={()=>set_active_category(2)}>
                            <img src="/images/salad.jpg" className={styles.category_menu_item_img}/>
                        </li>
                        <li className={`${styles.category_menu_item} ${active_category==3 ? styles.active_category : null}`}
                            onClick={()=>set_active_category(3)}>
                            <img src="/images/soft-drink.jpg" className={styles.category_menu_item_img}/>
                        </li>
                    </ul> 
                </div>
            </nav>
            <div className={styles.category_wrapper}>
                <FoodsCategory category_Name={category_list[0]}/>
                <FoodsCategory category_Name={category_list[1]}/>
                <FoodsCategory category_Name={category_list[2]}/>
                <FoodsCategory category_Name={category_list[3]}/>
            </div>
        </div>
    )
}
export default Foods;