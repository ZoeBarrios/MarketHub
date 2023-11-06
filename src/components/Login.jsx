import { useContext } from "react";
import useForm from "../hooks/useForm";
import { login } from "../services/auth";
import AuthContext from "../context/authContext";
import { isEmailOrUsername } from "../services/users";

export const Login = (props) => {
  const { handleLogin } = useContext(AuthContext);
  const { formData, handleInputChange, resetForm } = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    let emptyFields = Object.keys(formData).filter(
      (key) => formData[key] === ""
    );
    if (emptyFields.length > 0) {
      alert(`Please fill the following fields: ${emptyFields.join(", ")}`);
      return;
    }

    var typeOfField = isEmailOrUsername(email);
    const loginData = {};

    if (typeOfField === "email") {
      loginData.email = email;
    } else if (typeOfField === "userName") {
      loginData.userName = email;
    }

    login({ ...loginData, password })
      .then((user) => {
        handleLogin(user);
        alert("Welcome back!");
      })
      .catch((error) => {
        alert(error[0]);
      });
  };

  return (
    <div className="auth-form-container">
      <h2 className="title">Log in</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label id="email-id" htmlFor="email">
          Email or Username{" "}
        </label>
        <input
          value={email}
          type="text"
          placeholder="pepito123@gmail.com"
          id="email"
          name="email"
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password </label>
        <input
          value={password}
          type="password"
          placeholder="******"
          id="password"
          name="password"
          onChange={handleInputChange}
        />
        <button type="submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register clicking here.
      </button>
    </div>
  );
};

export default Login;
