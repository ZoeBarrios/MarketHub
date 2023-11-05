import React, {useState} from "react"

export const Login = (props)=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="auth-form-container">
            <h2 className="title">Log in</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label id="email-id" htmlFor="email">Email or Username </label>
            <input value={email} type="email" placeholder="pepito123@gmail.com" id="email" name="email" onChange={handleChangeEmail}/>
            <label htmlFor="password">Password </label>
            <input value={password} type="password" placeholder="******" id="password" name="password" onChange={handleChangePassword}/>
            <button type="submit" >Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don´t have an account? Register clicking here.</button>
        </div>
    )
}

export default Login