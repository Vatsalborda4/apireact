import axios from "axios";
import React, { useRef } from "react";
import { Link, useNavigate} from "react-router-dom";

const Login = () => {
  const txtemail = useRef();
  const txtpassword = useRef();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = txtemail.current.value;
    const password = txtpassword.current.value;

    const params = new FormData();
    params.set("email", email);
    params.set("password", password);

    axios
      .post("https://geton.skmbpk1z.a2hosted.com/login-data.php", params)
      .then(function (response) {
        if (response.data["status"] === "true") {
          alert("Data Login Success");
          navigate("/view");
          localStorage.setItem('email',email);
        } 
        else {
          alert("Data Login Fail");
        }
      });
  };

  return (
    <div className="form-container">
      <h2>Insert User Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" ref={txtemail} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" ref={txtpassword} required />
        </div>
        <div className="form-group submit-button">
          <button type="submit">Submit</button>
        </div>
      <div className="form-group create-account">
        <p>
          Don't have an account? <Link to="/insert">Create one</Link>
        </p>
      </div>
      </form>
    </div>
  );
};

export default Login;
