import react, { useState } from "react";
import { signIn } from 'next-auth/react';

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
  
      console.log(result)
      if (!result.error) {
        console.log('hello there')
        // set some auth state
        // router.replace('/profile');
      }
    };
  
    if (isLoading) {
      return <p>Loading...</p>;
    }


    return (
        <main>
            <h1>{`Please log in`}</h1>
            <div>
            <h2>Log in:</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='input-name'>
                            Name:
                        </label>
                        <input type={'text'} placeholder={`Email`} name={`email`} id={`input-email`}/>
                    </div>
                    <div>
                        <label htmlFor='input-password'>
                            Password:
                        </label>
                        <input type={'password'} placeholder={`Password`} name={`password`} id={`input-password`}/>
                    </div>
                    <input type={`submit`} value={`Wyślij`} />
                </form>
            </div>
        </main>
        
    )
}

export default LoginPage;