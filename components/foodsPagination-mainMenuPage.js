import Card from 'common/cardFood';
import styles from 'styles/foodsPagination-mainMenuPage.module.css';
import {useState} from 'react';
import Pagination from 'common/pagination';
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
            <Pagination active_page={active_page} set_active_page={set_active_page} pages_number={pages_number} pages={foods_pagination} />
        </div>
    )
}
export default FoodsPagination;