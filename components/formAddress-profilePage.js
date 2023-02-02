import styles from 'styles/formAddress-profilePage.module.css';
import {Addresses} from 'data/data.js';
import {BsXLg} from "react-icons/bs";
import Button from 'common/button';
const FormAddress = ({select_edit_create,show_form_address,set_show_form_address})=>{
    return(
        <div className={`pop-up ${show_form_address ? "active-pop-up" : null}`}>
        <form className={styles.form_address}>
            <div className={styles.title_close_form_icon_wrapper}>
                <h1 className={styles.title_form_address}>
                    {(select_edit_create==-1)? "ثبت آدرس جدید" : "ویرایش آدرس"}
                </h1>
                <BsXLg className={styles.close_form_icon} onClick={()=>set_show_form_address(false)}/>
            </div>
            <input type="text" placeholder="عنوان" className={styles.input_form_address}/>
            <input type="text" placeholder="شماره تماس" className={styles.input_form_address}/>
            <input type="text" placeholder="کدپستی" className={styles.input_form_address}/>
            <select className={styles.select_form_address}>
                <option disabled selected>استان</option>
                <option>تهران</option>
                <option>قم</option>
                <option>شیراز</option>
            </select>
            <select className={styles.select_form_address}>
                <option disabled selected>شهر</option>
                <option>تهران</option>
                <option>قم</option>
                <option>شیراز</option>
            </select>
            <textarea className={styles.textarea_form_address}></textarea>

            <div className={styles.create_edit_btn_form_address_wrapper}>
                <Button>{(select_edit_create==-1)? "ثبت آدرس" : "اعمال تغییرات"}</Button>
            </div>
        </form>
    </div>
    )
}
export default FormAddress;