import styles from '../styles/Login.module.scss';
import formStyles from '../styles/form.module.scss';

import { useState } from "react";
import { signIn } from 'next-auth/react';
import router from "next/router";

const INPUT_EMAIL_ID = 'input-email';
const INPUT_PASSWORD_ID = 'input-password';

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      
      const data = Object.fromEntries(new FormData(e.target).entries());
      const result = await signIn('credentials', {
        redirect: false,
        ...data
      });
  
      setIsLoading(false);
  
      if (!result.error) {
        router.replace('/profile');
      } else {
          alert(result.error)
      }
    };

    return (
        <main className={`container`}>
            <h1 className={`${styles.loginPage__heading} heading`}>
                {`Log in page`}
            </h1>
            <form onSubmit={handleSubmit} className={`${formStyles.form}`}>
                <div className={`${formStyles.line}`}>
                    <label className={`${formStyles.label}`} htmlFor={INPUT_EMAIL_ID}>
                        {`Name:`}
                    </label>
                    <input
                        className={`${formStyles.input}`}
                        type={'text'}
                        placeholder={`Email`}
                        name={`email`}
                        id={INPUT_EMAIL_ID}
                    />
                </div>
                <div className={`${formStyles.line}`}>
                    <label className={`${formStyles.label}`} htmlFor={INPUT_PASSWORD_ID}>
                        {`Password:`}
                    </label>
                    <input
                        className={`${formStyles.input}`}
                        type={'password'}
                        placeholder={`Password`}
                        name={`password`}
                        id={INPUT_PASSWORD_ID}
                    />
                </div>
                <input className={`${formStyles.submit}`} type={`submit`} value={`Wyślij`} />
            </form>
        </main>
        
    )
}

export default LoginPage;