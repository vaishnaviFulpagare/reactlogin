import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    Password: "",
    EMail: "",
  });

  //submit function

  const handlerLoginSubmit = async (e) => {
    alert(`${loginData.Password}.${loginData.EMail}`)
    // event.preventDefault()
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/", loginData);
      const { success, message } = response.data;

      if (success) {
        console.log("Login successfully");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log("Login error", error);
    }
    setLoginData({
      Password: "",
      EMail: "",
    });
  };

  const handlerLoginchange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,

      
    }));
  };
  return (
    <>
      <center>
        <section className="signin">
          <div className="container mt-5">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Login</h2>
                <div className="mt-4" />
                <form className="register-from" id="register-form">
                  <div className="from-group">
                    <label htmlFor="name"></label>
                    <b>Password:</b>{" "}
                    <input
                      type="text"
                      className="col-form-label"
                      id="email"
                      name="Password"
                      value={loginData.Password}
                      onChange={handlerLoginchange}
                      autoComplete="off"
                      size={50}
                      placeholder="Password"
                    />
                  </div>
                  <br></br>
                  <div className="from-group">
                    <label htmlFor="name"></label>
                    <b> E-Mail:</b>{" "}
                    <input
                      type="text"
                      className="col-form-label"
                      id="email"
                      name="EMail"
                      value={loginData.EMail}
                      onChange={handlerLoginchange}
                      autoComplete="off"
                      size={50}
                      placeholder="E-mail"
                    />
                  </div>
                  <br></br>

                  <button
                    type="submit"
                    className="btn btn-success"
                    on
                    onClick={() => handlerLoginSubmit("/")}
                   
                  >
                    Login
                  </button>
                  <br></br>
                  <br></br>
                  <b>
                    Do you forgot Password
                    <Link to="/ChangePassword">Click here</Link>
                  </b>
                  <br></br>
                  <b>
                    Create a new Account{" "}
                    <Link to="/Registration">Register here</Link>
                  </b>
                </form>
              </div>
            </div>
          </div>
        </section>
      </center>
    </>
  );
};

export default Login;
