import React from "react";  
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Insert from "./Insert";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./Edit";
import Login from "./Login";
import View from "./Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        {localStorage.getItem("email") && 
          <Route path="/view" element={<View />} />
        }
        <Route path="/insert" element={<Insert />} />
        {localStorage.getItem("email") && (
          <Route path="/edit/:id" element={<Edit />} />
        )}
      </Routes>
    </BrowserRouter>
  </>
);
