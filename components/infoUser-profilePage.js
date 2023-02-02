import Button from "common/button";
import styles from 'styles/infoUser-profilePage.module.css';
import {useState} from 'react';
import EditInfoUser from "./editInfoUser-profilePage";
const InfoUser = ()=>{
    const [edit_user,set_edit_user] = useState(false);
    return(
        <>
            <div className={styles.infoUser_wrapper}>
               <div className={styles.fullName_wrapper}>
                    <b className={styles.firstName_lastName}>نام و نام خانوادگی : </b>
                    <span className={styles.fullName_user}>سارا ابوطالبی</span>
               </div>
               <div className={styles.email_wrapper}>
                    <b className={styles.email}>ایمیل :‌ </b>
                    <span className={styles.email_user}>saraabotalebi@gmail.com</span>
               </div>
               <div className={styles.phoneNumber_wrapper}>
                    <b className={styles.phoneNumber}>شماره تلفن : </b>
                    <span className={styles.phoneNumber_user}>09022533535</span>
               </div>
               <div className={styles.edit_btn_wrapper}>
                    <Button className={styles.edit_btn} clickEventHandler={()=>set_edit_user(true)}>ویرایش اطلاعات</Button>
               </div>
            </div>
           <EditInfoUser edit_user={edit_user} set_edit_user={set_edit_user}/> 
        </>
    )
}
export default InfoUser;