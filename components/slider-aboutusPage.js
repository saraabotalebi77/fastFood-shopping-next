import {BsChevronRight,BsChevronLeft,BsXLg} from "react-icons/bs";
import styles from 'styles/slider-aboutusPage.module.css';
const Slider = ({activeSlide,setActiveSlide})=>{
    return(
        <div className={`pop-up ${activeSlide ? "active-pop-up" : null}`}>
            <div className={styles.close_icon_wrapper}>
                <BsXLg className={styles.close_icon} onClick={()=>setActiveSlide(0)}/>
            </div>
            <div className={styles.slideshow_wrapper}>
                <div className={styles.slideshow}>
                    <div className={`${styles.img_wrapper} ${activeSlide==1 ? styles.active_img_wrapper : null}`}>
                        <img src="./images/fastfood-place01.jpg" className={styles.img}/>
                    </div>
                    <div className={`${styles.img_wrapper} ${activeSlide==2 ? styles.active_img_wrapper : null}`}>
                        <img src="./images/fastfood-place02.jpg" className={styles.img}/>
                    </div>
                    <div className={`${styles.img_wrapper} ${activeSlide==3 ? styles.active_img_wrapper : null}`}>
                        <img src="./images/fastfood-place03.jpg" className={styles.img}/>
                    </div>
                    <div className={`${styles.img_wrapper} ${activeSlide==4 ? styles.active_img_wrapper : null}`}>
                        <img src="./images/fastfood-place04.jpg" className={styles.img}/>
                    </div>
                    <div className={`${styles.img_wrapper} ${activeSlide==5 ? styles.active_img_wrapper : null}`}>
                        <img src="./images/fastfood-place05.jpg" className={styles.img}/>
                    </div>
                    <div className={`${styles.img_wrapper} ${activeSlide==6 ? styles.active_img_wrapper : null}`}>
                        <img src="./images/fastfood-place06.jpg" className={styles.img}/>
                    </div>
                    <div className={`${styles.img_wrapper} ${activeSlide==7 ? styles.active_img_wrapper : null}`}>
                        <img src="./images/fastfood-place07.jpg" className={styles.img}/>
                    </div>
                </div>
                <button className={`${styles.prev_btn} ${activeSlide==1 ? styles.disabled_btn: null}`} onClick={()=>setActiveSlide((prevIndex)=>(prevIndex<=1)?1:prevIndex-1)}><BsChevronLeft className={styles.prev_icon}/></button>
                <button className={`${styles.next_btn} ${activeSlide==7 ? styles.disabled_btn: null}`} onClick={()=>setActiveSlide((prevIndex)=>(prevIndex>=7)?7:prevIndex+1)}><BsChevronRight className={styles.next_icon}/></button>
            </div>
        </div>
    )
}
export default Slider;