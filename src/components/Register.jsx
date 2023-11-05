import React, {useState} from "react";

export const Register = (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    
    const handleChangeUserName = (e) => {
        setUserName(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="auth-form-container">
            <h2 className="title">Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Username</label>
            <input type="text" value={userName} name="username" id="username" placeholder="PepitoCampeon123" onChange={handleChangeUserName}/>
            <label htmlFor="email">Email </label>
            <input value={email} type="email" placeholder="pepito123@gmail.com" id="email" name="email" onChange={handleChangeEmail}/>
            <label htmlFor="password">Password </label>
            <input value={password} type="password" placeholder="******" id="password" name="password" onChange={handleChangePassword}/>
            <button type="submit" >Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Log in clicking here.</button>
        </div>
    )
}

export default Register