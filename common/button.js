import styles from 'styles/button.module.css';
import Link from 'next/link';
const Button = ({href,children})=>{
    if(href){
        return(
            <Link href={href} className={styles.btn}>
                {children}
            </Link>
        )
    }
    return(
        <button className={styles.btn}>
            {children}
        </button>
    )
}
export default Button;