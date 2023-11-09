import { useState } from "react";
import "/public/css/auth.css";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

export default function Auth() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="auth">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}
