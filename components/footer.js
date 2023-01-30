import styles from 'styles/footer.module.css';
import { BsInstagram,BsFacebook,BsTwitter,BsYoutube } from "react-icons/bs";
const Footer = ()=>{
    return(
        <footer className={styles.footer}>
            <div className={styles.title_wrapper}>
                <h1 className={styles.title_name}>bama</h1>
            </div>
            <address>
                <ul className={styles.social_media_menu}>
                    <li className={styles.social_media_item}>
                        <a href="https://www.facebook.com" target="new" className={`${styles.faceboock_link} ${styles.social_media_link}`}>
                            <BsFacebook/>
                        </a>
                    </li>
                    <li className={styles.social_media_item}>
                        <a href="https://www.instagram.com" target="new" className={`${styles.instagram_link} ${styles.social_media_link}`}>
                            <BsInstagram/>
                        </a>
                    </li>
                    <li className={styles.social_media_item}>
                        <a href="https://twitter.com" target="new" className={`${styles.twitter_link} ${styles.social_media_link}`}>
                            <BsTwitter/>
                        </a>
                    </li>
                    <li className={styles.social_media_item}>
                        <a href="https://www.youtube.com" target="new" className={`${styles.youtube_link} ${styles.social_media_link}`}>
                            <BsYoutube/>
                        </a>
                    </li>
                </ul>
                <div className={styles.info_fastfood_wrapper}>
                    <span className={styles.address}>آدرس :‌ تهران، بلوار دانشجو، روبه‌روی مرکز خرید ولنجک، نبش گلستان دهم</span>
                    <hr className={styles.line_separated}/>
                    <span className={styles.telephone}>تلفن : ۰۲۱۲۲۲۰۵۰۵۰</span>
                </div>
            </address>
            <hr/>
            <p>تمامی حقوق این وبسایت متعلق به فست فود باما است.</p>
        </footer>
    )
}
export default Footer;