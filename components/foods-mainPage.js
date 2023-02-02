import FoodsCategory from "./foodsCategory-mainPage";
import styles from 'styles/foods-mainPage.module.css';
import { useState,useEffect } from "react";
const Foods = ()=>{
    //This state specifies which category is activated in the navigation bar
    const [active_category,set_active_category] = useState(0)
    //The list of category
    const category_list = ["pizza" , "burger" , "salad" ,"soft-drink"];
    const styleTransform = (active_category)=>{
        // if(window.innerWidth<){}
        return `translateX(${180*active_category}px)`
    }
    const change_active_category = (active_category_index)=>{
        const selected_category = document.getElementById(`${category_list[active_category_index]}_section`);
        scrollTo(0,selected_category.offsetTop+(-180))
    }
    const handle_scroll = ()=>{
        for(let i=0; i<category_list.length ; i++){
            const selected_category = document.getElementById(`${category_list[i]}_section`);
            if(parseInt(scrollY)+200>selected_category.offsetTop && parseInt(scrollY)+200<selected_category.offsetTop+80){
                set_active_category(i);
                break;
            }
        }
        

        const last_category = document.getElementById(`${category_list[category_list.length-1]}_section`);
        if(parseInt(scrollY)+200>last_category.offsetTop+100){
            document.getElementById("navbar").style.opacity = "0";
        }else{
            document.getElementById("navbar").style.opacity = "1";
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",handle_scroll)
       return()=>{
        window.removeEventListener("scroll",handle_scroll)
       }
    },[]);
    return(
        <div className={styles.foods}>
            <nav className={styles.navbar} id="navbar">
                <div className={styles.category_menu_wrapper}>
                    <ul className={styles.category_menu} style={{transform: styleTransform(active_category)}}>
                        {
                            category_list.map((category,index)=>(
                                <li key={index} className={`${styles.category_menu_item} ${active_category==index ? styles.active_category : null}`}
                                    onClick={()=>change_active_category(index)}>
                                    <img src={`/images/${category}.jpg`} className={styles.category_menu_item_img}/>
                                </li>
                            ))
                        }
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