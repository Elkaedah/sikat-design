import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap";
import * as serviceWorker from "./serviceWorker";
import Apk from "./App";

ReactDOM.render(<Apk />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
