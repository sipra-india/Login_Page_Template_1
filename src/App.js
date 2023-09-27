import "./styles.css";
import React, { useState } from "react";
import Input from "./Input";
import Header from "./header";
import Footer from "./footer";

export default function App() {
  

  return (
    <div>
      <Header />
      <Input id="password" type="Password" />
      <Input id="email" type="Email" />
      <button> Log In</button>
      <Footer />
    </div>
  );
}
