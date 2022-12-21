import React, { useState } from "react";
import axios from "axios"
import {  useNavigate } from "react-router-dom";

const Login = () => {
  const [userLoginInfo, setUserLoginInfo] = useState({
    email: "",
    password: "",
  });
  const navigate=useNavigate()

  const handleLoginData = (e) => {
    const name = e.target.name;
    setUserLoginInfo({ ...userLoginInfo, [name]: e.target.value });
  };

  const handleLoginSubmit = async(e) => {
    e.preventDefault();
    console.log(userLoginInfo);
    await axios.post("http://localhost:8080/login",userLoginInfo)
    .then((res)=>{
      console.log(res.data)
      localStorage.setItem("jwt",res.data.token)
      localStorage.setItem("user",JSON.stringify(res.data.user))
      navigate("/")
    })
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={(e) => handleLoginData(e)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Password"
            name="password"
            onChange={(e) => handleLoginData(e)}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
