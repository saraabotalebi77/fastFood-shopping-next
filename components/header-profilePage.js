import Link from "next/link";
import styles from 'styles/header-profilePage.module.css';
import { useRouter } from "next/router";
import { BsFillCartCheckFill,BsFillPersonFill,BsCashCoin,BsGeoAltFill} from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
const HeaderProfile = ()=>{
    const {pathname,...router} = useRouter();
    const logoutHandler = ()=>{
        router.push("/");
    }
    return(
        <nav className={styles.navbar}>
            <ul className={styles.menu}>
                <li className={styles.list_item}>
                    <Link href="/profile" className={`${styles.link_list_item} ${pathname=="/profile" ? styles.active_link_list_item : null}`}>
                        <BsFillPersonFill className={styles.icon_list_item}/>
                        <span className={styles.txt_list_item}>اطلاعات کاربر</span>
                    </Link>
                </li>
                <li className={styles.list_item}>
                    <Link href="/profile/addresses" className={`${styles.link_list_item} ${pathname=="/profile/addresses" ? styles.active_link_list_item : null}`}>
                        <BsGeoAltFill className={styles.icon_list_item}/>
                        <span className={styles.txt_list_item}>آدرس ها</span>
                    </Link>
                </li>
                <li className={styles.list_item}>
                    <Link href="/profile/orders" className={`${styles.link_list_item} ${pathname=="/profile/orders" ? styles.active_link_list_item : null}`}>
                        <BsFillCartCheckFill className={styles.icon_list_item}/>
                        <span className={styles.txt_list_item}>سفارشات</span>
                    </Link>
                </li>
                <li className={styles.list_item}>
                    <Link href="/profile/transactions" className={`${styles.link_list_item} ${pathname=="/profile/transactions" ? styles.active_link_list_item : null}`}>
                        <BsCashCoin className={styles.icon_list_item}/>
                        <span className={styles.txt_list_item}>تراکنش ها</span>
                    </Link>
                </li>
                <li className={styles.list_item} onClick={logoutHandler}>
                    <FaSignOutAlt className={styles.icon_list_item}/>
                    <span className={styles.txt_list_item}>خروج</span>
                </li>

            </ul>
        </nav>
    )
}
export default HeaderProfile;