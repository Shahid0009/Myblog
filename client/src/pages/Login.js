import { useState } from "react";
import {Navigate} from "react-router-dom"
export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
 const [redirect, setredirect] = useState(false);
 

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
    });
    if(response.ok){
      setredirect(true)
    }
    else{
      alert("wrong password");
    }
  }
  if(redirect){
    return <Navigate tp={'/'} />
  }
  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button>Login</button>
    </form>
  );
}
