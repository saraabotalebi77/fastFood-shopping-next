import styles from 'styles/showAddresses-profilePage.module.css';
import {Addresses} from 'data/data.js';
import {BsXLg} from "react-icons/bs";
import Button from 'common/button';
import { useState } from 'react'; 
import FormAddress from './formAddress-profilePage';
const AddressesUser = ()=>{
    const [select_edit_create,set_select_edit_create] = useState(-1);
    const [show_form_address,set_show_form_address] = useState(false);
    const create_new_address_btn_handler = ()=>{
        set_select_edit_create(-1);
        set_show_form_address(true);
    }
    const edit_address_btn_handler = (index)=>{
        set_select_edit_create(index);
        set_show_form_address(true);
    }
    return(
    <>
        <div className={styles.addresses_wrapper}>
            <div className={styles.create_address_btn_wrapper}>
                <button className={styles.create_address_btn} onClick={create_new_address_btn_handler}>ایجاد آدرس جدید</button>
            </div>
            {Addresses.map((address,index)=>(
                <div className={styles.address_container} key={index}>
                    <div className={styles.close_icon_wrapper}>
                        <BsXLg className={styles.close_icon}/>
                    </div>
                    <div className={styles.title_wrapper}>
                        <b className={styles.title}>عنوان:</b>
                        <span className={styles.title_user}>{address.title}</span>
                    </div>
                    <div className={styles.phoneNumber_wrapper}>
                        <b className={styles.phoneNumber}>شماره تلفن :</b>
                        <span className={styles.phoneNumber_user}>{address.phoneNumber}</span>
                    </div>
                    <div className={styles.postalCode_wrapper}>
                        <b className={styles.postalCode}>کد پستی‌ :</b>
                        <span className={styles.postalCode_user}>{address.postalCode}</span>
                    </div>
                    <div className={styles.province_wrapper}>
                        <b className={styles.province}>استان :</b>
                        <span className={styles.province_user}>{address.province}</span>
                    </div>
                    <div className={styles.city_wrapper}>
                        <b className={styles.city}>شهر :</b>
                        <span className={styles.city_user}>{address.city}</span>
                    </div>
                    <div className={styles.address_wrapper}>
                        <b className={styles.address}>آدرس :</b>
                        <span className={styles.address_user}>{address.address}</span>
                    </div>
                    <div className={styles.btn_edit_wrapper}>
                        <button className={styles.btn_edit} onClick={()=>edit_address_btn_handler(address.id)}>ویرایش</button>
                    </div>
                </div>
            ))}
        </div>
        <FormAddress select_edit_create={select_edit_create} show_form_address={show_form_address} set_show_form_address={set_show_form_address}/>
    </>
    )
}
export default AddressesUser;