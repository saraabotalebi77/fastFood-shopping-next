import Footer from "components/footer";
import Header from "components/header";
import HeaderProfile from "components/header-profilePage";
import styles from 'styles/layout-profile.module.css';
const ProfileLayout  = (props)=>{
    return(
        <>
            <Header/>
            <main className={styles.main_layout_profile}>
                <HeaderProfile/>
                <hr className={styles.separated_line}/>
                <div className={styles.content_main_layout_profile}>
                    {props.children}
                </div>
            </main>
            <Footer/>
        </>
    )
}
export default ProfileLayout;