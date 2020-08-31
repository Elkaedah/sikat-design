import React from "react";
import "./component/style/body.scss";
import "./component/style/index.scss";
// import Profile from "./component/profile";
import Chart from "./component/chart";
import Welcome from "./component/welcome";
import foto from "./component/img/Asset 8.svg";
import icon1 from "./component/img/Dashboard.svg";
import profile from "./component/img/profile-exam.jpg";

// Logistik
import Logistik from "./component/logistik";
import DataLogistik from "./component/dataLogistik";
import AddDataLogistik from "./component/addDataLogistik";
import EditDataLogistik from "./component/editDataLogistik";
import DataSupplier from "./component/dataSupplier";
import AddDataSupplier from "./component/addDataSupplier";
import EditDataSupplier from "./component/editDataSupplier";

import { Row, Container, Col, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => (
      <img className="icon" src={icon1} alt="icon">
        {" "}
      </img>
    ),
    main: () => <Dashboard />,
    title: () => <div> Dashboard </div>,
  },

  // Logistik
  {
    path: "/Logistik",
    sidebar: () => <div> bubblegum! </div>,
    main: () => <Logistik />,
    title: () => <div> Logistik </div>,
  },
  {
    path: "/DataLogistik",
    sidebar: () => <div> bubblegum! </div>,
    main: () => <DataLogistik />,
    title: () => <div> Logistik </div>,
  },
  {
    path: "/DataSupplier",
    sidebar: () => <div> bubblegum! </div>,
    main: () => <DataSupplier />,
    title: () => <div> Logistik </div>,
  },
  {
    path: "/AddDataLogistik",
    sidebar: () => <div> bubblegum! </div>,
    main: () => <AddDataLogistik />,
    title: () => <div> Logistik </div>,
  },
  {
    path: "/AddDataSupplier",
    sidebar: () => <div> bubblegum! </div>,
    main: () => <AddDataSupplier />,
    title: () => <div> Logistik </div>,
  },
  {
    path: "/EditDataLogistik",
    sidebar: () => <div> bubblegum! </div>,
    main: () => <EditDataLogistik />,
    title: () => <div> Logistik </div>,
  },
  {
    path: "/EditDataSupplier",
    sidebar: () => <div> bubblegum! </div>,
    main: () => <EditDataSupplier />,
    title: () => <div> Logistik </div>,
  },

  //Penanggulangan Bencana
  {
    path: "/Penanggulangan",
    sidebar: () => <h2> asdsa </h2>,
    main: () => <h2> Ini Nanti Data Penangulangan </h2>,
    title: () => <div> Penanggulangan </div>,
  },
];

export default function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col className="col-md-2 bg-white position-sticky">
            <div className="sidebar text-nowrap ">
              <div className="brand-icon">
                <img src={foto} alt="prop" />
              </div>{" "}
              <ul className="select text-break">
                <li>
                  <Link to="/">
                    Dashboard <path class="block"> </path>{" "}
                  </Link>{" "}
                </li>{" "}
                <li>
                  <Link to="/Logistik">
                    {" "}
                    {/* <img className="icon" src={icon1} alt="icon"></img> */}
                    Logistik{" "}
                  </Link>{" "}
                </li>{" "}
                <li>
                  <a href="#">
                    {" "}
                    {/* <img className="icon text" src={icon1} alt="icon"></img> */}
                    Penanggulangan Bencana{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  <a href="#">
                    {" "}
                    {/* <img className="icon" src={icon1} alt="icon"></img> */}
                    User{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  <a href="#">
                    {" "}
                    {/* <img className="icon" src={icon1} alt="icon"></img> */}
                    Laporan{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </Col>{" "}
          <Col className="col-md-10">
            <Navbar> </Navbar>{" "}
            <Switch>
              {" "}
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}{" "}
            </Switch>{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>{" "}
    </Router>
  );
}

function Dashboard() {
  return (
    <div className="main">
      <Welcome> </Welcome> <Chart />
    </div>
  );
}

function Navbar() {
  return (
    <Nav
      className="justify-content-between"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link className="judul" href="">
          <Switch>
            {" "}
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.title />}
              />
            ))}{" "}
          </Switch>{" "}
        </Nav.Link>{" "}
      </Nav.Item>{" "}
      <Nav.Item>
        <Nav.Link eventKey="link-1">
          <img className="profile-icon" src={profile} />{" "}
        </Nav.Link>{" "}
      </Nav.Item>{" "}
    </Nav>
  );
}
