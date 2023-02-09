import styles from 'styles/pagination.module.css';
import { BsChevronDoubleLeft,BsChevronDoubleRight} from "react-icons/bs";
const Pagination = ({active_page,set_active_page,pages_number,pages})=>{
    if(pages_number>5){
        return(
            <div className={styles.pagination}>
                <span onClick={()=>set_active_page(prevIndex=> prevIndex>0 ? prevIndex-1 : 0)} className={styles.prev_page_btn} ><BsChevronDoubleLeft className={styles.prev_btn_icon}/></span>
                {pages.map((page,index)=>(
                    index+1<=5 ? <span key={index} onClick={()=>set_active_page(index)} className={`${styles.page_btn_more_than_5} ${index==active_page ? styles.active_page_btn : null}`}>{index+1}</span> : null 
                    ))}
                <span onClick={()=>set_active_page(prevIndex=> prevIndex<pages.length-1 ? prevIndex+1 : pages.length-1)} className={`${styles.next_page_btn} ${active_page>4 ? styles.active_page_btn : null}`}><BsChevronDoubleRight className={styles.next_btn_icon}/></span>
            </div>
        )
    }
    else if(pages_number>1){
        return(
            <div className={styles.pagination}>
                {pages.map((page,index)=>(
                <span key={index} onClick={()=>set_active_page(index)} className={`${styles.page_btn_less_than_5} ${index==active_page ? styles.active_page_btn : null}`}>{index+1}</span>    
                ))}
            </div>
        )
    }        
}
export default Pagination;