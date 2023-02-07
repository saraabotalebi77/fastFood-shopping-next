import styles from 'styles/formAddress-profilePage.module.css';
import {Addresses} from 'data/data.js';
import {BsXLg} from "react-icons/bs";
import Button from 'common/button';
import SelectInput from 'common/select-input';
const FormAddress = ({select_edit_create,show_form_address,set_show_form_address})=>{
    return(
    <div className={`pop-up ${show_form_address ? "active-pop-up" : null}`}>
        <form className={styles.form_address}>
            <div className={styles.title_close_icon_wrapper}>
                <h1 className={styles.title_address}>
                    {(select_edit_create==-1)? "ثبت آدرس جدید" : "ویرایش آدرس"}
                </h1>
                <BsXLg className={styles.close_icon} onClick={()=>set_show_form_address(false)}/>
            </div>
            <input type="text" placeholder="عنوان" className={styles.input_form_address}/>
            <input type="text" placeholder="شماره تماس" className={styles.input_form_address}/>
            <input type="text" placeholder="کدپستی" className={styles.input_form_address}/>
            <SelectInput disabled_option={"استان"} options={["تهران","قم","شیراز"]}/>
            <SelectInput disabled_option={"شهر"} options={["تهران","قم","شیراز"]}/>
            <textarea className={styles.textarea_form_address} placeholder="آدرس"></textarea>

            <div className={styles.create_edit_btn_form_address_wrapper}>
                <Button>{(select_edit_create==-1)? "ثبت آدرس" : "اعمال تغییرات"}</Button>
            </div>
        </form>
    </div>
    )
}
export default FormAddress;