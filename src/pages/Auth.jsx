import React, {useState} from "react";
import "/public/css/auth.css";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Auth() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  } 
  return (  
    <div className='auth'>
      {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
  )
}
