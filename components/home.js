import Slider from "./slider";
const Home = ({activeSlideIndex,setActiveSlideIndex,slidesList})=>{
    return(
        <>
            <Slider activeSlideIndex={activeSlideIndex} setActiveSlideIndex={setActiveSlideIndex} slidesList={slidesList}/>
        </>
    )
}
export default Home;