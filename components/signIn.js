import Button from "common/button";
import styles from 'styles/signin-signup.module.css';
import Link from "next/link";
const SignIn = ()=>{
    return(
        <div className={styles.form_signin_wrapper}>
            <form className={styles.form_signin}>
                <fieldset>
                    <h2 className={styles.title_form}>ورود</h2>
                    <div className={styles.email_wrapper}>
                        <input type="text" id="email" className={styles.email_input} placeholder=" "/>
                        <label htmlFor="email" className={styles.email_label}>ایمیل</label>
                    </div>
                    <div className={styles.password_wrapper}>
                        <input type="password" id="password" className={styles.password_input} placeholder=" "/>
                        <label htmlFor="password" className={styles.password_label}>رمز عبور</label>
                    </div> 
                    <div className={styles.remember_password_wrapper}>
                        <input type="checkbox" id="rememberMe" className={styles.remember_password_input} hidden/>
                        <label htmlFor="rememberMe" className={styles.remember_password_label}>بخاطر سپاری رمز عبور</label>
                    </div> 
                    <div className={styles.btn_login_wrapper}>
                        <Button>ورود</Button>
                    </div>
                    <div className={styles.register_page_wrapper}>
                        <p className={styles.register_statement}>در صورتیکه حساب ندارید روی <Link href="/register" className={styles.register_link}>عضویت</Link> کلیک کنید </p>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
export default SignIn;