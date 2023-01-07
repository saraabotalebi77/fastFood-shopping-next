import styles from 'styles/header.module.css';
import { BsCartFill,BsPersonFill } from "react-icons/bs";
import Link from 'next/link';
const Header = ()=>{
    return(
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div>
                    <Link href="/">
                        <h1 className={styles.navbar_logo}>bama</h1>
                    </Link>
                </div>

                <div className={styles.navbar_menu}>
                    <ul className={styles.main_menu}>
                        <li className={styles.list_item_main_menu}>
                            <Link href="/">
                                صفحه اصلی
                            </Link>   
                        </li>
                       
                        <li className={styles.list_item_main_menu}>
                            <Link href="/menu">
                                منو
                            </Link>
                        </li>
                        <li className={styles.list_item_main_menu}>
                            <Link href="/about-us">
                                درباره ما   
                            </Link>
                        </li>
                        <li className={styles.list_item_main_menu}>
                            <Link href="/contact-us">
                                تماس با ما       
                            </Link>
                        </li>
                
                    </ul>


                    <ul className={styles.login_order_menu}>
                        <li className={styles.list_item_login_order_menu}>
                            <Link href="/food-oreder">
                                <span>سبد خرید</span>
                                <div>
                                    <div className={styles.orders_counter}>0</div>
                                    <BsCartFill className={styles.BsCardFill_icon}/>
                                </div>
                            </Link>
                        </li>
                        <li className={styles.list_item_login_order_menu}>
                            <Link href="/login">
                                <span>ورود</span>
                                <BsPersonFill className={styles.BsPersonFill_icon}/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header;