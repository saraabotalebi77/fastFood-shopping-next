import Card from 'common/cardFood';
import styles from 'styles/foodsPagination-mainMenuPage.module.css';
import {useState} from 'react';
import { BsChevronDoubleLeft,BsChevronDoubleRight} from "react-icons/bs";
const FoodsPagination = ({foods})=>{
    //this state specifies active page 
    const [active_page , set_active_page] = useState(0);
    const pages_number = (foods.length %6) ? Math.floor(foods.length/6)+1 : foods.length/6 ;
    let food_item = 0;
    //The variable foods_pagination is a two-dimensional array that specifies the number of pages and items in each page
    const foods_pagination = [];
    //The first for(loop) specifies the number of pages and the second for(loop) specifies the number of items in each page
    for(let i=0 ; i<pages_number ; i++){
        foods_pagination[i] = [];
        for(let j=0 ; j<6 ; j++){
            if(food_item >= foods.length){
                break;
            }
            foods_pagination[i].push(foods[food_item]);
            food_item++;
        }
    }
    return(
        <div className={styles.foods_pagination}>
            {
                foods_pagination.map((pages,index)=>(
                    index==active_page ? 
                    <div className={styles.page} key={index}>
                        {pages.map((food,index)=>(
                            <Card food={food} key={index}/>
                        ))}
                    </div> :
                    null
                ))
            }
            {pages_number>5 ? 
                <div className={styles.pagination}>
                    <span onClick={()=>set_active_page(prevIndex=> prevIndex>0 ? prevIndex-1 : 0)} className={styles.prev_page_btn} ><BsChevronDoubleLeft className={styles.prev_btn_icon}/></span>
                    {foods_pagination.map((page,index)=>(
                        index+1<=5 ? <span key={index} onClick={()=>set_active_page(index)} className={`${styles.page_btn_more_than_5} ${index==active_page ? styles.active_page_btn : null}`}>{index+1}</span> : null 
                        ))}
                    <span onClick={()=>set_active_page(prevIndex=> prevIndex<5 ? prevIndex+1 : 5)} className={`${styles.next_page_btn} ${active_page>4 ? styles.active_page_btn : null}`}><BsChevronDoubleRight className={styles.next_btn_icon}/></span>
                </div>
                :pages_number>1 ? 
                <div className={styles.pagination}>
                    {foods_pagination.map((page,index)=>(
                    <span key={index} onClick={()=>set_active_page(index)} className={`${styles.page_btn_less_than_5} ${index==active_page ? styles.active_page_btn : null}`}>{index+1}</span>    
                    ))}
                </div>
                : null
                
            }
        </div>
    )
}
export default FoodsPagination;