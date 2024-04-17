//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap';
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/Counter.jsx";

ReactDOM.render(<Counter />, document.querySelector("#app"));  
