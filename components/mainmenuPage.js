import styles from 'styles/mainmenuPage.module.css';
import { BsSearch } from "react-icons/bs";
import { useState } from 'react';
import {Foods} from 'data/data';
import FoodsPagination from './foodsPagination-mainMenuPage';
const MainMenu = ()=>{
    const [foods,set_foods] = useState(Foods["pizza"]["foods"]);
    const [active_category,set_active_category] = useState(0);
    return(
        <div className={styles.mainMenu}>
            <div className={styles.searchForm_foodsCategory_arrangeFoods_wrrapper}>
                {/* search form */}
                <form className={styles.search_form}>
                    <input type="text" id="search" className={styles.search_form_input} placeholder=" "/>
                    <label htmlFor="search" className={styles.search_form_label}>جستجو</label>
                    <button className={styles.search_form_btn}>
                        <BsSearch className={styles.search_form_btn_icon}/>
                    </button>
                </form>
                <hr className={styles.separated_line}/>
                {/* category of foods */}
                <div className={styles.category_warpper}>
                    <span className={styles.category_wrapper_title}>دسته بندی</span>
                    <ul className={styles.category_list}>
                        <li className={`${styles.category_list_item} ${active_category==0 ? styles.active_category_list_item : null}`} 
                        onClick={()=>set_active_category(0)}>پیتزا</li>
                        <li className={`${styles.category_list_item} ${active_category==1 ? styles.active_category_list_item : null}`} 
                        onClick={()=>set_active_category(1)}>برگر</li>
                        <li className={`${styles.category_list_item} ${active_category==2 ? styles.active_category_list_item : null}`} 
                        onClick={()=>set_active_category(2)}>پیش غذا و سالاد</li>
                        <li className={`${styles.category_list_item} ${active_category==3 ? styles.active_category_list_item : null}`} 
                        onClick={()=>set_active_category(3)}>نوشیدنی</li>
                    </ul>
                </div>
                <hr className={styles.separated_line}/>
                {/* arrange of foods */}
                <div className={styles.arrange_foods_wrapper}>
                    <span className={styles.arrange_foods_title}>مرتب سازی</span>
                    <div className={styles.arrange_foods}>
                        <input type="radio" name="arrange-foods" hidden id="more_expensive" className={styles.arrang_foods_input}/>
                        <label htmlFor="more_expensive" className={styles.arrange_foods_label}>بیشترین قیمت</label>
                        <input type="radio" name="arrange-foods" hidden id="cheapest" className={styles.arrang_foods_input}/>
                        <label htmlFor="cheapest" className={styles.arrange_foods_label}>کمترین قیمت</label>
                        <input type="radio" name="arrange-foods" hidden id="best_selling" className={styles.arrang_foods_input}/>
                        <label htmlFor="best_selling" className={styles.arrange_foods_label}>پر فروش ترین</label>
                        <input type="radio" name="arrange-foods" hidden id="with-discount" className={styles.arrang_foods_input}/>
                        <label htmlFor="with-discount" className={styles.arrange_foods_label}>با تخفیف</label>
                    </div>
                </div>
            </div>
            {/* foods */}
            <FoodsPagination foods={foods}/>
        </div>
    )
}
export default MainMenu;