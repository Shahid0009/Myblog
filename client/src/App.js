import "./App.css";
// import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./layoyt";
import IndexPage from "./pages/indexPage";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage/>} />
        <Route path={"/Login"} element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
      </Route>
    </Routes>
  );
}

export default App;
