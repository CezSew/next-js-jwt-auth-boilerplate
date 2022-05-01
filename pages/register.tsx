import styles from '../styles/Register.module.scss';
import formStyles from '../styles/form.module.scss';

import { useRef } from "react";
import { useRouter } from 'next/router';

const RegisterPage = () => {
    const router = useRouter();
    const inputEmailRef = useRef(null);
    const inputPasswordRef = useRef(null);
    const inputNicknameRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();

        const email = inputEmailRef.current.value;
        const password = inputPasswordRef.current.value; 
        const nickname = inputNicknameRef.current.value; 

        const body = {
            email,
            password,
            nickname
        }

        fetch('api/auth/signup', {
            method: 'POST',
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.error) {
                alert(data.error);
            } else {
                alert(data.message);
                router.push('./login');
            }
        })
    }

    return (
        <main className={`container`}>
            <h1 className={`${styles.registerPage__heading} heading`}>{`Register`}</h1>
            <form onSubmit={handleSubmit} className={`${formStyles.form}`}>
                <div className={`${formStyles.line}`}>
                    <label className={`${formStyles.label}`} htmlFor={`register-input-nickname`}>
                        Nickname:
                    </label>
                    <input className={`${formStyles.input}`} type={`text`} name={`nickname`} id={`register-input-nickname`} ref={inputNicknameRef} />
                </div>
                <div className={`${formStyles.line}`}>
                    <label className={`${formStyles.label}`} htmlFor={`register-input-email`}>
                        Email:
                    </label>
                    <input className={`${formStyles.input}`} type={`email`} name={`email`} id={`register-input-email`} ref={inputEmailRef} />
                </div>
                <div className={`${formStyles.line}`}>
                    <label className={`${formStyles.label}`} htmlFor={`register-input-password`}>
                        Password:
                    </label>
                    <input className={`${formStyles.input}`} type={`password`} name={`password`} id={`register-input-password`} ref={inputPasswordRef} />
                </div>
                <input  className={`${formStyles.submit}`} type={`submit`} value={`Send`} />
            </form>
        </main>
    )
}

export default RegisterPage;