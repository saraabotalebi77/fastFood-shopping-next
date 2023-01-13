import Button from 'common/button';
import Link from 'next/link';
import styles from 'styles/signin-signup.module.css';
const SignUp= ()=>{
    return(
        <div className={styles.form_signup_wrapper}>
        <from className={styles.form_signup}>
            <fieldset>
                <h2 className={styles.title_form}>ثبت نام</h2>

                <div className={styles.fullName_wrapper}>
                    <input type="text" id="email" className={styles.fullName_input} placeholder=" "/>
                    <label htmlFor="email" className={styles.fullName_label}>نام و نام خانوادگی</label>
                </div>
                <div className={styles.email_wrapper}>
                    <input type="text" id="email" className={styles.email_input} placeholder=" "/>
                    <label htmlFor="email" className={styles.email_label}>ایمیل</label>
                </div>
                <div className={styles.password_wrapper}>
                    <input type="password" id="password" className={styles.password_input} placeholder=" "/>
                    <label htmlFor="password" className={styles.password_label}>رمز عبور</label>
                </div> 
                <div className={styles.repeat_password_wrapper}>
                    <input type="password" id="password" className={styles.repeat_password_input} placeholder=" "/>
                    <label htmlFor="password" className={styles.repeat_password_label}>رمز عبور</label>
                </div> 
                <div className={styles.btn_register_wrapper}>
                    <Button>ثبت نام</Button>
                </div>
                <div className={styles.login_page_wrapper}>
                    <p className={styles.login_statement}>در صورتیکه حساب ندارید روی <Link href="/login" className={styles.login_link}>ورود</Link> کلیک کنید </p>
                </div>
            </fieldset>
        </from>
    </div>
    )
}
export default SignUp;