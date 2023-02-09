import styles from 'styles/gallery-aboutusPage.module.css';
const Gallery = ({setActiveSlide})=>{
    return(
    <div className={styles.gallery}>
        <div className={styles.img_wrapper}>
            <img src="./images/fastfood-place01.jpg" className={styles.img} 
            onClick={()=>setActiveSlide(1)}/>
        </div>
        <div className={styles.img_wrapper}>
            <img src="./images/fastfood-place02.jpg" className={styles.img} 
            onClick={()=>setActiveSlide(2)}/>
        </div>
        <div className={styles.img_wrapper}>
            <img src="./images/fastfood-place03.jpg" className={styles.img} 
            onClick={()=>setActiveSlide(3)}/>
        </div>
        <div className={styles.img_wrapper}>
            <img src="./images/fastfood-place04.jpg" className={styles.img} 
            onClick={()=>setActiveSlide(4)}/>
        </div>
        <div className={styles.img_wrapper}>
            <img src="./images/fastfood-place05.jpg" className={styles.img} 
            onClick={()=>setActiveSlide(5)}/>
        </div>
        <div className={styles.img_wrapper}>
            <img src="./images/fastfood-place06.jpg" className={styles.img} 
            onClick={()=>setActiveSlide(6)}/>
        </div>
        <div className={styles.img_wrapper}>
            <img src="./images/fastfood-place07.jpg" className={styles.img} 
            onClick={()=>setActiveSlide(7)}/>
        </div>
    </div>
    )
    
}
export default Gallery;