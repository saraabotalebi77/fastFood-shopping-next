import {useState} from "react";
import Gallery from "./gallery-aboutusPage";
import Slider from "./slider-aboutusPage";
import styles from 'styles/aboutusPage.module.css';
const AboutUS = ()=>{
    const [activeSlide,setActiveslide] = useState(0);
    return(
        <div>
            <div className={styles.aboutus_wrapper}>
                <h2 className={styles.aboutus_title}>درباره ما</h2>
                <div className={styles.description_wrapper}>
                    <p className={styles.aboutus}>همه ما با فست فود و غذاهای خوشمزه ای که ظاهری جذاب و دلفریب دارند آشنا هستیم. کم تر کسی پیدا می شود که به یک فست فود با کیفیت علاقه ای نداشته باشد. در واقع همه ما در اوقاتی هوس خوردن یک فست فود به سرمان می‌زند و تصور طعم بی نظیر پیتزا یا ساندویچ امانمان را می‌برد. پیتزا خودش به تنهایی می‌تواند طرفداران زیادی داشته باشد، اما دونر کباب ترکی، ساندویچ و برگر هم خودش یک دنیایی دارد. خلاصه چه هوس پیتزا، دونر کباب ترکی، ساندویچ یا برگر کرده باشید، دوست دارید این ها را در بهترین فست فود واقع در ولنجک به نام <b>فست فود باما</b> تست کنید.</p>
                    
                    <div className={styles.whats_fastfood}>
                        <h3>فست فود چیست ؟</h3>
                        <p>فست فود به غذاهایی که پخت آنها سریع انجام میشود یا به زبان دیگر غذاهایی که سریع آماده و طبخ میشوند فست‌فود میگویند. فست فود در مورد غذاهای خانگی به کار نمیرود بلکه بیشتر اشاره به غذاهایی میکند که در رستورانها تهیه میشود.</p>
                        
                    </div>
                    <div className={styles.why_fastfood}>
                        <h3>چرا فست فود؟</h3>
                        <p>منوی فست فود جذاب و رنگارنگ است و طیف وسیعی از خوراکی ها را دربر میگیرد. در فست فودها غذای از پیش آماده را در مدت کوتاهی بعد از سفارش به مشتری تحویل میدهند. هیچ لذتی بالاتر از طعم غذایی لذیذ زیر دندان نیست. غذا خوردن برای ما ایرانیها یک تفریح شیرین است.</p>
                        
                    </div>
                    <div className={styles.advantage_fastfood}>
                        <h3>مزایای فست فود زیتون چیست؟</h3>
                        <ul className={styles.advantage_fastfood_menu}>
                            <li className={styles.advantage_fastfood_menu_list_item}>منوی مناسب</li>
                            <li className={styles.advantage_fastfood_menu_list_item}>توجه به اصول بهداشتی</li>
                            <li className={styles.advantage_fastfood_menu_list_item}>پرسنل مودب و حرفه ای</li>
                            <li className={styles.advantage_fastfood_menu_list_item}>حضور مدیران فست فود در کنار مشتریان عزیز</li>
                            <li className={styles.advantage_fastfood_menu_list_item}>پشتیبانی مناسب</li>
                            <li className={styles.advantage_fastfood_menu_list_item}>رعایت تناسب در غذاها</li>
                        </ul>
                    </div>
                    <div className={styles.address_fastfood}>
                        <h3>آدرس فست فود باما</h3>
                        <address>
                            تهران ، بلوار دانشجو ، روبه روی مرکز خرید ولنجک ،نبش گلستان دهم
                        </address>
                    </div>
                    <div className={styles.phoneNumber_fastfood}>
                        <h3>شماره تماس</h3>
                        <p>09022533535</p>
                        <p>02122205050</p>
                    </div>
                    <div className={styles.woking_time}>
                        <h3>ساعت کاری</h3>
                        <p>از 11 صبح تا 12 شب</p>
                    </div>
                </div>
            </div>
            <Gallery setActiveSlide={setActiveslide}/>
            <Slider activeSlide={activeSlide} setActiveSlide={setActiveslide}/>
        </div>
    )
}
export default AboutUS;