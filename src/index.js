import React from 'react';
import ReactDom from 'react-dom';
import NavbarSample from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.css';

function Main() {
  return <NavbarSample />
}

ReactDom.render(<Main />, document.getElementById("app"))

