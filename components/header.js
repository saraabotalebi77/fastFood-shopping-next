import styles from 'styles/header.module.css';
import { BsCartFill,BsPersonFill } from "react-icons/bs";
import Link from 'next/link';
import {useState,useRef } from 'react';
const Header = ()=>{
    const [openMenu,setOpenMenu] = useState(false);
    return(
    <>
        <header className={styles.header}>
            <div className={styles.header_content}>
                <div>
                    <Link href="/">
                        <h1 className={styles.navbar_logo}>bama</h1>
                    </Link>
                </div>
                <div className={`${styles.menu_icon} ${openMenu?styles.menu_icon_active:null}`} onClick={()=>{setOpenMenu(!openMenu)}}>
                    <span className={`${styles.menu_icon_line} ${styles.menu_icon_line1}`}></span>
                    <span className={`${styles.menu_icon_line} ${styles.menu_icon_line2}`}></span>
                    <span className={`${styles.menu_icon_line} ${styles.menu_icon_line3}`}></span>
                </div>
            </div>
        </header>
        <nav className={`${styles.navbar} ${openMenu? styles.active_navbar : null}`}>
                    <ul className={styles.main_menu}>
                        <li className={styles.list_item_main_menu}>
                            <Link href="/" onClick={()=>{setOpenMenu(false)}}>
                                صفحه اصلی
                            </Link>   
                        </li>
                       
                        <li className={styles.list_item_main_menu}>
                            <Link href="/menu" onClick={()=>{setOpenMenu(false)}}>
                                منو
                            </Link>
                        </li>
                        <li className={styles.list_item_main_menu}>
                            <Link href="/about-us" onClick={()=>{setOpenMenu(false)}}>
                                درباره ما   
                            </Link>
                        </li>
                        <li className={styles.list_item_main_menu}>
                            <Link href="/contact-us" onClick={()=>{setOpenMenu(false)}}>
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
                </nav>
    </>
    )
}
export default Header;