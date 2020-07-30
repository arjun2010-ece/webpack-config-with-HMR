import React from "react";
import ReactDOM from "react-dom";
require("./styles.css");
import App from "./App";


var mountNode = document.getElementById("app");

ReactDOM.render(<App name="Jane" />, mountNode);