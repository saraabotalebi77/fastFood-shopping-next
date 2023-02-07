import Pagination from "common/pagination";
import {orders} from "data/data.js";
import { useState } from "react";
import styles from 'styles/orders-transactions-profilePage.module.css';
import OrderedFoods from "./ordered-foods-profilePage";
const Orders = ()=>{
    // This state specifies active page 
    const [active_page , set_active_page] = useState(0);
    // This state specifies selected order for showing
    const [selected_order, set_selected_order] = useState(null);
    const pages_number = (orders.length%6) ? Math.floor(orders.length/6)+1 : orders.length/6;
    let order_item = 0;
    //The variable orders_pagination is a two-dimensional array that specifies the number of pages and items in each page
    const orders_pagination = [];
    //The first for(loop) specifies the number of pages and the second for(loop) specifies the number of items in each page
    for(let i=0 ; i<pages_number ; i++){
        orders_pagination[i] = [];
        for(let j=0 ; j<6 ; j++){
            if(order_item >= orders.length){
                break;
            }
            orders_pagination[i].push(orders[order_item]);
            order_item++;
        }
    }

    return(
        <>
            <div className={styles.orders_pagination}>
                <div className={styles.responsive_table}>
                    <table className={styles.table}>
                        <thead className={styles.thead_table}>
                            <tr>
                                <th style={{width:"12%"}}>شماره سفارش</th>
                                <th style={{width:"12%"}}>آدرس</th>
                                <th style={{width:"12%"}}>وضعیت</th>
                                <th style={{width:"15%"}}>وضعیت پرداخت</th>
                                <th style={{width:"17%"}}>قیمت کل</th>
                                <th style={{width:"22%"}}>تاریخ</th>
                            </tr>
                        </thead>
                        {orders_pagination.map((order_pages,index)=>(
                            index==active_page ?
                            <tbody key={index} className={styles.tbody_table}>
                                {order_pages.map((order,index)=>(
                                    <tr key={order.id}>
                                        <td style={{width:"12%"}}>{order.number_order}</td>
                                        <td style={{width:"12%"}}>{order.address}</td>
                                        <td style={{width:"12%"}}>{order.status}</td>
                                        <td style={{width:"15%"}}>{order.Payment_status}</td>
                                        <td style={{width:"17%"}}>{order.price} تومان</td>
                                        <td style={{width:"22%"}}>{order.date}</td>
                                        <td style={{width:"10%"}}>
                                            <button className={styles.btn_show_ordered_foods}
                                                onClick={()=>set_selected_order(order.id)}>سفارشات</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>:null
                            ))}
                    </table>
                </div>
                <div className={styles.pagination_wrapper}>
                    <Pagination active_page={active_page} set_active_page={set_active_page} pages_number={pages_number} pages={orders_pagination}/>
                </div>
            </div>
            <OrderedFoods order_id={selected_order} set_order_id={set_selected_order} foods={selected_order?orders[selected_order-1]["foods"]:[]}/>
        </>
    )
}
export default Orders;