import styles from 'styles/contact-us.module.css';
import Button from 'common/button';
const ContactUs = ()=>{
    return(
    <div className={styles.contactus_wrapper}>
        <h2 className={styles.title_form}>تماس با ما</h2>
        <div className={styles.contactus_content}>
            <from className={styles.form_contactus}>
                <fieldset>
                    <input type="text" className={styles.fullName_input} placeholder="نام و نام خانوادگی"/>
                    <input type="text" className={styles.email_input} placeholder="ایمیل"/>
                    <input type="text" className={styles.title_message_input} placeholder="موضوع پیام"/>
                    <textarea type="password" className={styles.message_textarea} placeholder="متن پیام"></textarea>
                    <div className={styles.btn_register_wrapper}>
                        <Button>ارسال پیام</Button>
                    </div>
                </fieldset>
            </from>
            <div className={styles.map_wrapper}>
                <img src="./images/bg-white-fastFood.jpg" className={styles.map}/>
            </div>
        </div>
    </div>
    )
}
export default ContactUs;