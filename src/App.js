import React from "react";
import "./component/style/body.scss";
import Sidebar from "./component/sidebar";
import Navbar from "./component/navbar";
import Chart from "./component/chart";
import Welcome from "./component/welcome";
import { Row, Container, Col } from "react-bootstrap";

function App() {
    return ( <
        div className = "wrapper" >
        <
        Container fluid >
        <
        Row >
        <
        Col className = "col-md-2 bg-white position-sticky" >
        <
        Sidebar / >
        <
        /Col>{" "} <
        Col className = "col-md-10" >
        <
        Navbar / >
        <
        Welcome / >
        <
        Chart / >
        <
        /Col>{" "} <
        /Row>{" "} <
        /Container>{" "} <
        /div>
    );
}

export default App;