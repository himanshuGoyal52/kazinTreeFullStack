import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Auth() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = async (e) => {
    e.preventDefault();
    if(password.length === 0 || username.length === 0) {
      alert("Please fill the form fully");
      return ;
    }
    const user = {
      username: username,
      password: password,
    };
    // Create the POST requuest
    const { data } = await axios.post('http://localhost:8000/token/', user, {
      headers: { "Content-Type": "application/json" },
    });

    // Initialize the access & refresh token in localstorage.
    localStorage.clear();
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
    axios.defaults.headers.common["Authorization"] = `Bearer ${data["access"]}`;
    window.location.href = "/dashboard";
  };

  

  return (
    <div className="contianer">
      <div className="box">
        <img src="/images/Kaizntree Full Logo.webp" alt="Kaizntree" />
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1rem 0",
            width: "100%",
          }}
        >
          <button to="/register" className="btn rmHerf">
            CREATE ACCOUNT
          </button>
          <button className="btn" onClick={submitLogin}>
            LOG IN
          </button>
        </div>
        <div style={{ width: "100%" }}>
          <Link to="/password_reset">Forgot Password</Link>
        </div>
      </div>
    </div>
  );
}
