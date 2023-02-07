import Pagination from "common/pagination";
import {transactions} from "data/data.js";
import { useState } from "react";
import styles from 'styles/orders-transactions-profilePage.module.css';
const Transaction = ()=>{
    // This state specifies active page 
    const [active_page , set_active_page] = useState(0);
    const pages_number = (transactions.length%6) ? Math.floor(transactions.length/6)+1 : transactions.length/6;
    let transaction_item = 0;
    //The variable orders_pagination is a two-dimensional array that specifies the number of pages and items in each page
    const transactions_pagination = [];
    //The first for(loop) specifies the number of pages and the second for(loop) specifies the number of items in each page
    for(let i=0 ; i<pages_number ; i++){
        transactions_pagination[i] = [];
        for(let j=0 ; j<6 ; j++){
            if(transaction_item >= transactions.length){
                break;
            }
            transactions_pagination[i].push(transactions[transaction_item]);
            transaction_item++;
        }
    }
    return(
        <div className={styles.transation_pagination}>
            <div className={styles.responsive_table}>
                <table className={styles.table}>
                    <thead className={styles.thead_table}>
                        <tr>
                            <th style={{width:"15%"}}>شماره سفارش</th>
                            <th style={{width:"25%"}}>مبلغ</th>
                            <th style={{width:"15%"}}>وضعیت</th>
                            <th style={{width:"20%"}}>کد پیگیری</th>
                            <th style={{width:"25%"}}>تاریخ</th>
                        </tr>
                    </thead>
                    {transactions_pagination.map((transaction_pages,index)=>(
                        index==active_page ?
                        <tbody key={index} className={styles.tbody_table}>
                            {transaction_pages.map((transaction,index)=>(
                                <tr key={transaction.id}>
                                    <td style={{width:"15%"}}>{transaction.number_order}</td>
                                    <td style={{width:"25%"}}>{transaction.price}</td>
                                    <td style={{width:"15%"}}>{transaction.status}</td>
                                    <td style={{width:"20%"}}>{transaction.tracking_code}</td>
                                    <td style={{width:"25%"}}>{transaction.date}</td>
                                </tr>
                            ))}
                        </tbody>:null
                        ))}
                </table>
            </div>
            <div className={styles.pagination_wrapper}>
                <Pagination active_page={active_page} set_active_page={set_active_page} pages_number={pages_number} pages={transactions_pagination}/>
            </div>
        </div>
    )
}
export default Transaction;