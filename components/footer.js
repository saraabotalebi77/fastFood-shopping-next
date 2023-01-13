import styles from 'styles/footer.module.css';
import { BsInstagram,BsFacebook,BsTwitter,BsYoutube } from "react-icons/bs";
const Footer = ()=>{
    return(
        <footer className={styles.footer}>
            <div className={styles.title_wrapper}>
                <h1 className={styles.title_name}>bama</h1>
            </div>
            <div className={styles.social_media_icons_wrapper}>
                <a href="#" className={`${styles.faceboock_icon_wrapper} ${styles.icon_wrapper}`}>
                    <BsFacebook/>
                </a>
                <a href="#" className={`${styles.instagram_icon_wrapper} ${styles.icon_wrapper}`}>
                    <BsInstagram/>
                </a>
                <a href="#" className={`${styles.twitter_icon_wrapper} ${styles.icon_wrapper}`}>
                    <BsTwitter/>
                </a>
                <a href="#" className={`${styles.youtube_icon_wrapper} ${styles.icon_wrapper}`}>
                    <BsYoutube/>
                </a>
            </div>
       
            <div className={styles.info_fastfood_wrapper}>
                <p className={styles.address}>آدرس :‌ تهران، بلوار دانشجو، روبه‌روی مرکز خرید ولنجک، نبش گلستان دهم</p>
                <hr className={styles.line_separated}/>
                <p className={styles.telephone}>تلفن : ۰۲۱۲۲۲۰۵۰۵۰</p>
            </div>
            <hr/>
            <p>تمامی حقوق این وبسایت متعلق به فست فود باما است.</p>
        </footer>
    )
}
export default Footer;