import { useRef } from "react";

const RegisterPage = () => {
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
            if (data.error) {
                alert(data.error);
            }
        })
    }

    return (
        <>
            <h1>{`Register`}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={`register-input-nickname`}>
                        Nickname:
                    </label>
                    <input type={`text`} name={`nickname`} id={`register-input-nickname`} ref={inputNicknameRef} />
                </div>
                <div>
                    <label htmlFor={`register-input-email`}>
                        Email:
                    </label>
                    <input type={`email`} name={`email`} id={`register-input-email`} ref={inputEmailRef} />
                </div>
                <div>
                    <label htmlFor={`register-input-password`}>
                        Password:
                    </label>
                    <input type={`password`} name={`password`} id={`register-input-password`} ref={inputPasswordRef} />
                </div>
                <input type={`submit`} value={`Send`} />
            </form>
        </>
    )
}

export default RegisterPage;