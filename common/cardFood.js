import styles from 'styles/cardFood.module.css';
import Link from 'next/link';
import { BsCartFill} from "react-icons/bs";
const Card = ({food})=>{
    return(
        <div className={styles.card}>   
            <Link href="/food" className={styles.img_wrapper}>
                <img src={food.image} alt={food.title} className={styles.image}/>
            </Link>
            <h3 className={styles.title}>{food.title}</h3>
            <p className={styles.description}>{food.description}</p>
            <div className={styles.price_buy_wrapper}>
                <div className={styles.price_wrapper}>
                    <del className={styles.pricee_before_discount}>{food.discount}</del>
                    <span className={styles.price_saling}>{food.price}</span>
                    تومان
                </div>
                <div className={styles.buy_wrapper}>
                    <BsCartFill/>
                </div>
            </div>
        </div>
    )
}

export default Card;