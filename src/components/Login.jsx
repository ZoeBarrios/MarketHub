import { useContext, useState } from "react";
import useForm from "../hooks/useForm";
import { login } from "../services/auth";
import AuthContext from "../context/authContext";
import { isEmailOrUsername } from "../services/users";
import { useLocation } from "wouter";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import Loader from "./Loader";

export const Login = (props) => {
  const { handleLogin } = useContext(AuthContext);
  const [location, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const { formData, handleInputChange, resetForm } = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const { mutate } = useMutation(login, {
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: (user) => {
      handleLogin(user);
      setLocation("/");
    },
    onError: (error) => {
      toast(error.message, { autoClose: 1500, type: "error" });
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let emptyFields = Object.keys(formData).filter(
      (key) => formData[key] === ""
    );
    if (emptyFields.length > 0) {
      toast(`Please fill the following fields: ${emptyFields.join(", ")}`, {
        autoClose: 1500,
        type: "warning",
      });
      return;
    }

    var typeOfField = isEmailOrUsername(email);
    const loginData = {};

    if (typeOfField === "email") {
      loginData.email = email;
    } else if (typeOfField === "userName") {
      loginData.userName = email;
    }

    mutate({
      ...loginData,
      password,
    });
  };

  return (
    <div className="auth-form-container login">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2 className="title">Log in</h2>
          <form
            className="login-form"
            onSubmit={handleSubmit}
            name="login-form"
          >
            <label id="email-id" htmlFor="email">
              Email or Username{" "}
            </label>
            <input
              value={email}
              type="text"
              placeholder="email o username"
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
        </>
      )}
    </div>
  );
};

export default Login;
