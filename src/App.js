import React from "react";
import "./component/style/body.scss";
import Sidebar from "./component/sidebar";
import Chart from "./component/chart";
import { Row, Container, Col } from "react-bootstrap";

function App() {
    return ( <
        div className = "wrapper" >
        <
        Container fluid >
        <
        Row >
        <
        Col className = "col-md-3 bg-white position-sticky" >
        <
        Sidebar / >
        <
        /Col>{" "} <
        Col className = "col-md-9" >
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