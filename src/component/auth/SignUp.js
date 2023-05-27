import * as React from 'react';
import { useEffect } from "react";
import styles from '../../css/auth/signUp.module.css';


export default function SignUp() {
    // const [users, setUsers] = useState();

    // Function to collect data
    // const getApiData = async () => {
    //     const data = {
    //         title: "Minh",
    //         content: "Thuong",
    //         shortDescription: "thuong.nmstudy.hust@gmail.com",
    //         categoryCode: "1234",
    //         thumbnail: "1234"
    //     }
    //     const response = await fetch("http://localhost:8082/new", 
    //         {
    //             method: "POST",
    //             mode: "cors",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(data),
    //         }
    //     ).then((response) => response.json());
    //     console.log("hahaha", response);

    //     // setUsers(response);
    // };

    // useEffect(() => {
    //     getApiData();
    // }, []);

    return (
      <div>
        <div className={styles.singIn_Field}>
            <h3 className={styles.singIn_Title}>Đăng ký và bắt đầu học</h3>
            <input name='fullName' placeholder='Tên đầy đủ' className={styles.singIn_Input}/>
            <input name='email' placeholder='Email' className={styles.singIn_Input}/>
            <input name='passWord' placeholder='Mật khẩu' className={styles.singIn_Input}/>
            <div className={styles.form_group__strength}>
                <div className={styles.form_group__strength_indicators}></div>
                <div className={styles.form_group__strength_indicators}></div>
                <div className={styles.form_group__strength_indicators}></div>
                <div className={styles.form_group__strength_indicators}></div>
            </div>
            <button className={`${styles.singIn_Input} ${styles.submit_button}`} type='submit'>Đăng ký</button>
            <div className={styles.help_auth__footer}>
                <div className={styles.help_signUp__wrapper }>
                Bằng việc đăng ký, bạn đồng ý với <a className={styles.helper_author_footer__link} href='/'>Điều khoản sử dụng và Chính sách về quyền riêng tư.</a>
                </div>
            <div className= {styles.helpers_auth_separator__2mEsg} ></div>
            <div>Bạn đã có tài khoản? Hãy <a className={styles.helper_author_footer__link_sign_in} href='/'>Đăng nhập</a></div>
            {/* <div><a className={styles.helper_author_footer__link} href='/'>Đăng nhập bằng tên tổ chức của bạn</a></div> */}
            </div>
        </div>
      </div>
    );
  }