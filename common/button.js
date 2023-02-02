import styles from 'styles/button.module.css';
import Link from 'next/link';
const Button = ({href,children,clickEventHandler})=>{
    if(href){
        return(
            <Link href={href} className={styles.btn}>
                {children}
            </Link>
        )
    }
    return(
        <button className={styles.btn} onClick={clickEventHandler}>
            {children}
        </button>
    )
}
export default Button;