import React from "react";
import Sidebar from "./component/sidebar";
import { Row, Container, Col } from "react-bootstrap";

function App() {
    return ( <
        div className = "wrapper" >
        <
        Container fluid >
        <
        Row >
        <
        Col className = "col-md-4" >
        <
        Sidebar / >
        <
        /Col>{" "} <
        Col className = "col-md-7" > ini nanti isinya < /Col>{" "} <
        /Row>{" "} <
        /Container>{" "} <
        /div>
    );
}

export default App;