import { useState } from "react";
// import Post from "../post";

export default function Register() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  // function register(ev) {
  //   ev.preventDefault();
  //   fetch("http://localhost:5000/register", {
  //     method: "POST",
  //     body: JSON.stringify(username, password),
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  // }

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    // console.log(response);
    if (response.status === 200) {
      alert('registration successful');
    } else {
      alert('registration failed');
    }
  }

  return (
    <form className="Register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => {
          setUserName(ev.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => {
          setPassword(ev.target.value);
        }}
      />
      <button>Register</button>
    </form>
  );
}
