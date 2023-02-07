import {BsXLg} from "react-icons/bs";
import styles from "styles/ordered-foods-profilePage.module.css";
const OrderedFoods = ({order_id,set_order_id,foods})=>{
    return(
        <div className={`pop-up ${order_id ? "active-pop-up" : null}`}>
            <div className={styles.ordered_foods_wrapper}>
                <div className={styles.ordered_foods_title_wrapper}>
                    <h3 className={styles.ordered_foods_title}>سفارش شماره {order_id}</h3>
                    <BsXLg className={styles.close_icon} onClick={()=>set_order_id(null)}/>
                </div>
                <div className={styles.responsive_table}>
                    <table className={styles.table}>
                        <thead className={styles.thead_table}>
                            <tr>
                                <th style={{width:"15%"}}>محصول</th>
                                <th style={{width:"25%"}}>نام</th>
                                <th style={{width:"20%"}}>قیمت</th>
                                <th style={{width:"10%"}}>تعداد</th>
                                <th style={{width:"30%"}}>قیمت کل</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody_table}>
                            {foods.map((food,index)=>(
                            <tr key={index}>
                                <td style={{width:"15%"}}><img src={food.image_food} alt={food.name_food} className={styles.image_food} width="100%" height="70px"/></td>
                                <td style={{width:"25%"}}>{food.name_food}</td>
                                <td style={{width:"20%"}}>{food.price} تومان</td>
                                <td style={{width:"10%"}}>{food.quantityـordered}</td>
                                <td style={{width:"30%"}}>{food.total_price} تومان</td>
                            </tr>
                            ))}
                    
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default OrderedFoods;