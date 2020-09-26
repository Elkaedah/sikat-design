import React from "react"
//Dashboard
import Chart from "./component/chart";
import Chart2 from "./component/chart2";
import Welcome from "./component/welcome";
// Logistik
import Logistik from "./component/logistik";
import DataLogistik from "./component/dataLogistik";
import AddDataLogistik from "./component/addDataLogistik";
import EditDataLogistik from "./component/editDataLogistik";
import DataSupplier from "./component/dataSupplier";
import AddDataSupplier from "./component/addDataSupplier";
import EditDataSupplier from "./component/editDataSupplier";

// User
import Tabel from "./component/tabel";
import User from "./component/user";

// Laporan
import Laporan from "./component/laporan";
import AddDataLaporan from "./component/addDataLaporan";
import DetailDataLaporan from "./component/detailDataLaporan";
import EditDataLaporan from "./component/editDataLaporan";
import { Row, Container, Col, Nav } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default class Routes extends React.Component {
    render() {
        return ( <
            Router >
            <
            div class = "link" >
            <
            Switch >
            <
            Route path = "/"
            exact component = { Dashboard }
            /> <
            Route path = "/Logistik"
            exact component = { Logistik }
            /> <
            Route path = "/Bencana"
            exact component = { Dashboard }
            /> <
            Route path = "/User"
            exact component = { Tabel }
            /> <
            Route path = "/Laporan"
            exact component = { Laporan }
            /> <
            Route path = "/Logistik/DataLogistik"
            component = { DataLogistik }
            /> <
            Route path = "/Logistik/DataSupplier"
            component = { DataSupplier }
            /> <
            Route path = "/Logistik/EditLogistik"
            component = { EditDataLogistik }
            /> <
            /Switch> <
            /div> <
            /Router>

        );
    }
}

function Dashboard() {
    return ( <
        div className = "main" >
        <
        Welcome > < /Welcome> <Chart / >
        <
        Row >
        <
        Col md = { 9 } >
        <
        Chart / >
        <
        /Col>{" "} <
        Col md = { 3 } >
        <
        Chart2 / >
        <
        /Col>{" "} <
        /Row>{" "} <
        Chart / >
        <
        /div>
    );
}