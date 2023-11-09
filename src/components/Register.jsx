import { toast } from "react-toastify";
import useForm from "../hooks/useForm";
import { register } from "../services/auth";

export const Register = (props) => {
  const { formData, handleInputChange, resetForm } = useForm({
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
    name: "",
    phoneNumber: "",
  });

  const { email, userName, password, confirmPassword, name, phoneNumber } =
    formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast("Passwords don't match", { autoClose: 1500, type: "error" });
      return;
    }
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
    register(formData)
      .then(() => {
        resetForm();
        props.onFormSwitch("login");
      })
      .catch((error) => {
        toast(error.message, { autoClose: 1500, type: "error" });
      });
  };

  return (
    <div className="auth-form-container">
      <h2 className="title">Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          name="name"
          id="name"
          placeholder="name"
          onChange={handleInputChange}
        />
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          value={userName}
          name="userName"
          id="userName"
          placeholder="username"
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email </label>
        <input
          value={email}
          type="email"
          placeholder="email@gmail.com"
          id="email"
          name="email"
          onChange={handleInputChange}
        />
        <label htmlFor="phoneNumber">Phone</label>
        <input
          type="number"
          value={phoneNumber}
          name="phoneNumber"
          id="phoneNumber"
          placeholder="phone"
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
        <label htmlFor="confirmPassword">Confirm Password </label>
        <input
          value={confirmPassword}
          type="password"
          placeholder="******"
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleInputChange}
        />
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Log in clicking here.
      </button>
    </div>
  );
};

export default Register;
