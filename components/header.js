import styles from 'styles/header.module.css';
import { BsCartFill,BsPersonFill } from "react-icons/bs";
import Link from 'next/link';
import {useState} from 'react';
import { useRouter } from 'next/router';
const Header = ()=>{
    //pathname is used to change the style of the active navigation link
    const {pathname} = useRouter();
    //this state specifies whether the navigation menu is open or closed in width less than 993px
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
                            <Link href="/" onClick={()=>{setOpenMenu(false)}} className={pathname=="/"?styles.active_link_list_main_menu:null}>
                                صفحه اصلی
                            </Link>   
                        </li>
                       
                        <li className={styles.list_item_main_menu}>
                            <Link href="/main-menu" onClick={()=>{setOpenMenu(false)}} className={pathname=="/menu"?styles.active_link_list_main_menu:null}>
                                منو
                            </Link>
                        </li>
                        <li className={styles.list_item_main_menu}>
                            <Link href="/about-us" onClick={()=>{setOpenMenu(false)}} className={pathname=="/about-us"?styles.active_link_list_main_menu:null}>
                                درباره ما   
                            </Link>
                        </li>
                        <li className={styles.list_item_main_menu}>
                            <Link href="/contact-us" onClick={()=>{setOpenMenu(false)}} className={pathname=="/contact-us"?styles.active_link_list_main_menu:null}>
                                تماس با ما       
                            </Link>
                        </li>
                
                    </ul>


                    <ul className={styles.login_order_menu}>
                        <li className={styles.list_item_login_order_menu}>
                            <Link href="/food-order" onClick={()=>{setOpenMenu(false)}} className={pathname=="/food-order"?styles.active_food_order_link:null}>
                                <span>سبد خرید</span>
                                <div>
                                    <div className={styles.orders_counter}>0</div>
                                    <BsCartFill className={styles.BsCardFill_icon}/>
                                </div>
                            </Link>
                        </li>
                        <li className={styles.list_item_login_order_menu}>
                            <Link href="/login"   onClick={()=>{setOpenMenu(false)}} className={pathname=="/login"?styles.active_login_link:null}>
                                ورود
                            </Link>
                            <span>/</span>
                            <Link href="/register"   onClick={()=>{setOpenMenu(false)}} className={pathname=="/register"?styles.active_register_link:null}>
                                ثبت نام
                            </Link>
                            <BsPersonFill className={styles.BsPersonFill_icon}/>
                        </li>
                    </ul>
                </nav>
    </>
    )
}
export default Header;