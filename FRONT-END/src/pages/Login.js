import React, { useState } from "react";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo login logic
    if(username === "admin" && password === "admin123") {
      alert("Login Successful");
      window.location.href="/dashboard";
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:"100px"}}>

      <form onSubmit={handleLogin} style={{border:"1px solid #ccc",padding:"40px"}}>

        <h2>FrontBank Login</h2>

        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            required
          />
        </div>

        <br/>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </div>

        <br/>

        <button type="submit">Login</button>

      </form>

    </div>
  );
}

export default Login;
