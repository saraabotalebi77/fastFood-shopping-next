import FirstSlider from "./firstSlider-mainPage";
import SecondSlider from "./secondSlider-mainPage";
import Button from "common/button";
import styles from 'styles/homePage.module.css';
import Foods from "./foods-mainPage";
const Home = ({activeSlideIndex,setActiveSlideIndex,slidesList})=>{
    return(
        <>
            <FirstSlider activeSlideIndex={activeSlideIndex} setActiveSlideIndex={setActiveSlideIndex} slidesList={slidesList}/>
            <div className={styles.online_order_registration_wrapper}>
                <Button href={'/main-menu'}>ثبت سفارش آنلاین</Button>
            </div>
            <Foods/>
            <SecondSlider/>
        </>
    )
}
export default Home;