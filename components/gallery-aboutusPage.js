import styles from 'styles/gallery-aboutusPage.module.css';
const Gallery = ({setActiveSlide})=>{
    return(
    <div className={`${styles.gallery}`}>
        <div className={`${styles.img1_wrapper} ${styles.img_wrapper}`}>
            <img src="./images/fastfood-place01.jpg" className={`${styles.img}`} />
        </div>
        <div className={`${styles.img2_wrapper} ${styles.img_wrapper}`}>
            <img src="./images/fastfood-place02.jpg" className={`${styles.img}`} />
        </div>
        <div className={`${styles.img3_wrapper} ${styles.img_wrapper}`}>
            <img src="./images/fastfood-place03.jpg" className={`${styles.img}`} />
        </div>
        <div className={`${styles.img4_wrapper} ${styles.img_wrapper}`}>
            <img src="./images/fastfood-place04.jpg" className={`${styles.img}`} />
        </div>
        <div className={`${styles.img5_wrapper} ${styles.img_wrapper}`}>
            <img src="./images/fastfood-place05.jpg" className={`${styles.img}`} />
        </div>
        <div className={`${styles.img6_wrapper} ${styles.img_wrapper}`}>
            <img src="./images/fastfood-place06.jpg" className={`${styles.img}`} />
        </div>
        <div className={`${styles.img7_wrapper} ${styles.img_wrapper}`}>
            <img src="./images/fastfood-place07.jpg" className={`${styles.img}`} />
        </div>
    </div>
    )
    
}
export default Gallery;