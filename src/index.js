import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import Link from "./App";
import Home from "./Homepage/home";
import Budget from "./Budget/MainPage";
import Subscription from "./Subscription/Subscription";
import Login from "./login";
import SignUp from "./signup";
// import MyForm from './FormValidation';
import YoutubeEmbed from "./Learning/Video";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/budget" element={<Budget />}></Route>
        <Route path="/subscription" element={<Subscription />}></Route>
        <Route path="/YoutubeEmbed" element={<YoutubeEmbed />}></Route>
        <Route path="/link" element={<Link />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        {/* <MyForm /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
