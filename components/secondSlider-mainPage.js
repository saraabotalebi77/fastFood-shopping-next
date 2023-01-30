import styles from 'styles/secondSlider-mainPage.module.css';
const Slider = ()=>{
    return(
        <div className={styles.automatic_image_slider_container}>
            <div className={styles.automatic_image_slider}>
                <div className={styles.slide_wrapper}>
                    <img src="./images/b2.jpg" alt="slide-1" width="100%" height="100%"/>
                </div>
                <div className={styles.slide_wrapper}>
                    <img src="./images/b5.jpg" alt="slide-2" width="100%" height="100%"/>
                </div>
                <div className={styles.slide_wrapper}>
                    <img src="./images/b6.jpg" alt="slide-3" width="100%" height="100%"/>
                </div>
                <div className={styles.slide_wrapper}>
                    <img src="./images/b7.jpg" alt="slide-4" width="100%" height="100%"/>
                </div>
                <div className={styles.slide_wrapper}>
                    <img src="./images/fastfood7.jpg" alt="slide-5" width="100%" height="100%"/>
                </div>
                <div className={styles.slide_wrapper}>
                    <img src="./images/p1.jpg" alt="slide-6" width="100%" height="100%"/>
                </div>
                <div className={styles.slide_wrapper}>
                    <img src="./images/p4.jpg" alt="slide-7" width="100%" height="100%"/>
                </div>
                <div className={styles.slide_wrapper}>
                    <img src="./images/slide2.jpg" alt="slide-8" width="100%" height="100%"/>
                </div>
            </div>
        </div>
    )
}
export default Slider;