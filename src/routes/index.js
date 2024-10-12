import React from "react";
import { Route, Routes } from "react-router-dom";
import Bawakaraeng from "../views/Bawakaraeng";
import HomePage from "../views/HomePage";
import Login from "../views/Login";
import PendaftaranBawa from "../views/PendaftaranBawa";
import Confirm from "../views/Confirm";
function Rute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="Bawakaraeng" element={<Bawakaraeng />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="Daftar" element={<PendaftaranBawa />}></Route>
        <Route path="Confirm" element={<Confirm />}></Route>
      </Routes>
    </>
  );
}

export default Rute;
