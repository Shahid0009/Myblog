import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.username);
      });
    });
  }, []);
  function logout() {
    fetch("http://localhost:5000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUsername(null);
  }
  return (
    <header>
      <Link to="/" className="logo">
        Myblog
      </Link>

      <nav>
        {username && (
          <>
            <Link to="/create">Create Post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
