import Button from "common/button";
import styles from 'styles/editInfoUser-profilePage.module.css';
import {BsXLg} from "react-icons/bs";
const EditInfoUser = ({edit_user , set_edit_user})=>{
    return(
    <div className={`pop-up ${edit_user ? "active-pop-up" : null}`}>
        <form className={styles.edit_info_user_form}>
            <div className={styles.title_close_form_icon_wrapper}>
                <h1 className={styles.title_edit_info_user_form}>ویرایش اطلاعات</h1>
                <BsXLg className={styles.close_form_icon} onClick={()=>set_edit_user(false)}/>
            </div>
            <input type="text" placeholder="نام و نام خانوادگی" className={styles.edit_info_user_input}/>
            <input type="text" placeholder="ایمیل" className={`${styles.edit_info_user_input} ${styles.edit_info_user_email_input}`}/>
            <input type="text" placeholder="شماره تماس" className={styles.edit_info_user_input}/>
            <div className={styles.edit_info_user_btn_wrapper}>
                <Button>اعمال تغییرات</Button>
            </div>
        </form>
    </div>
    )
}
export default EditInfoUser;