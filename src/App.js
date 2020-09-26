import React from "react";
import "./component/style/body.scss";
import "./component/style/index.scss";
import Chart from "./component/chart";
import Chart2 from "./component/chart2";
import Welcome from "./component/welcome";
import Sidebar from "./component/sidebar";
import profile from "./component/img/profile-exam.jpg";

// Logistik
import Logistik from "./component/logistik";
import DataLogistik from "./component/dataLogistik";
import AddDataLogistik from "./component/addDataLogistik";
import EditDataLogistik from "./component/editDataLogistik";
import DataSupplier from "./component/dataSupplier";
import AddDataSupplier from "./component/addDataSupplier";
import EditDataSupplier from "./component/editDataSupplier";

// Penanggulangan
import Penanggulangan from "./component/penanggulangan";
import DataBencana from "./component/dataBencana";
import DataBantuan from "./component/dataBantuan";
import DataTimRelawan from "./component/dataTimRelawan";

// User
import Tabel from "./component/tabel";
import User from "./component/user";

// Laporan
import Laporan from "./component/laporan";
import AddDataLaporan from "./component/addDataLaporan";
import DetailDataLaporan from "./component/detailDataLaporan";
import EditDataLaporan from "./component/editDataLaporan";

import { Row, Container, Col, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
<<<<<<< HEAD

const routes = [{
        path: "/",
        exact: true,
        component: () => < Dashboard / > ,
        title: () => < div > Dashboard < /div>,
    },
    {
        path: "/Logistik",
        exact: true,
        component: () => < Logistik / > ,
        title: () => < div > Logistik < /div>,
    },
    {
        path: "/Bencana",
        component: () => < h2 > Ini Nanti Bencana Alam < /h2>,
        title: () => < div > Bencana Alam < /div>,
    },
    {
        path: "/Penanggulangan",
        component: () => < h2 > Ini Nanti Data Penangulangan < /h2>,
        title: () => < div > Penanggulangan Bencana < /div>,
    },
    {
        path: "/Logistik/DataLogistik",
        component: () => < DataLogistik / > ,
        title: () => < div > Logistik < /div>,
    },
    {
        path: "/Logistik/AddDataLogistik",
        component: () => < AddDataLogistik / > ,
        title: () => < div > Logistik < /div>,
    },
    {
        path: "/Logistik/EditDataLogistik/:id",
        component: () => < EditDataLogistik / > ,
        title: () => < div > Logistik < /div>,
    },
    {
        path: "/Logistik/DataSupplier",
        component: () => < DataSupplier / > ,
        title: () => < div > Logistik < /div>,
    },
    {
        path: "/Logistik/AddDataSupplier",
        component: () => < AddDataSupplier / > ,
        title: () => < div > Logistik < /div>,
    },
    {
        path: "/Logistik/EditDataSupplier/:id",
        component: () => < EditDataSupplier / > ,
        title: () => < div > Logistik < /div>,
    },
    {
        path: "/Pegawai",
        component: () => < Tabel / > ,
        title: () => < div > User < /div>,
    },
    {
        path: "/Relawan",
        component: () => < h2 > Ini Nanti Data Relawan < /h2>,
        title: () => < div > Relawan < /div>,
    },
    {
        path: "/Laporan",
        component: () => < Laporan / > ,
        title: () => < div > Laporan < /div>,
    },
    {
        path: "/AddDataLaporan",
        component: () => < AddDataLaporan / > ,
        title: () => < div > Laporan < /div>,
    },
    {
        path: "/DetailDataLaporan",
        component: () => < DetailDataLaporan / > ,
        title: () => < div > Laporan < /div>,
    },
    {
        path: "/EditDataLaporan",
        component: () => < EditDataLaporan / > ,
        title: () => < div > Laporan < /div>,
    },
];

export default function App() {
    return ( <
        Router >
        <
        Container fluid >
        <
        Row >
        <
        Col className = "col-md-2 bg-white position-sticky shadow" >
        <
        Sidebar / >
        <
        /Col>{" "} <
        Col className = "col-md-10" >
        <
        Navbar / >
        <
        Switch > {
            routes.map((route, index) => ( <
                Route key = { index }
                path = { route.path }
                exact = { route.exact }
                children = { < route.component / > }
                />
            ))
        } <
        /Switch> <
        /Col> <
        /Row> <
        /Container> <
        /Router>
    );
=======

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Dashboard />,
    title: () => <div> Dashboard </div>,
  },
  {
    path: "/Logistik",
    exact: true,
    component: () => <Logistik />,
    title: () => <div> Logistik </div>,
  },
  {
    path: "/Logistik/DataLogistik",
    component: () => <DataLogistik />,
    title: () => <div> Logistik </div>,
  },
  {
    path: "/Logistik/AddDataLogistik",
    component: () => <AddDataLogistik />,
    title: () => <div> Logistik </div>,
  },
  {
    path: "/Logistik/EditDataLogistik/:id_logistik",
    component: () => <EditDataLogistik />,
    title: () => <div> Logistik </div>,
  },
  {
    path: "/Logistik/DataSupplier",
    component: () => <DataSupplier />,
    title: () => <div> Logistik </div>,
  },
  {
    path: "/Logistik/AddDataSupplier",
    component: () => <AddDataSupplier />,
    title: () => <div> Logistik </div>,
  },
  {
    path: "/Logistik/EditDataSupplier/:id",
    component: () => <EditDataSupplier />,
    title: () => <div> Logistik </div>,
  },
  {
    path: "/Penanggulangan",
    component: () => <Penanggulangan />,
    title: () => <div> Penanggulangan Bencana </div>,
  },
  {
    path: "/Penanggulangan/DataBencana",
    component: () => <DataBencana />,
    title: () => <div>Data Bencana</div>,
  },
  {
    path: "/Penanggulangan/DataBantuan",
    component: () => <DataBantuan />,
    title: () => <div>Data Bantuan</div>,
  },
  {
    path: "/Penanggulangan/DataTimRelawan",
    component: () => <DataTimRelawan />,
    title: () => <div>Data Tim Relawan</div>,
  },

  {
    path: "/Pegawai",
    component: () => <Tabel />,
    title: () => <div> User </div>,
  },
  {
    path: "/Relawan",
    component: () => <h2> Ini Nanti Data Relawan </h2>,
    title: () => <div> Relawan </div>,
  },
  {
    path: "/Laporan",
    component: () => <Laporan />,
    title: () => <div> Laporan </div>,
  },
  {
    path: "/AddDataLaporan",
    component: () => <AddDataLaporan />,
    title: () => <div> Laporan </div>,
  },
  {
    path: "/DetailDataLaporan",
    component: () => <DetailDataLaporan />,
    title: () => <div> Laporan </div>,
  },
  {
    path: "/EditDataLaporan",
    component: () => <EditDataLaporan />,
    title: () => <div> Laporan </div>,
  },
];

export default function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col className="col-md-2 bg-white position-sticky shadow">
            <Sidebar />
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
                  children={<route.component />}
                />
              ))}{" "}
            </Switch>{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>{" "}
    </Router>
  );
>>>>>>> 822c04c768ddff57f2dac63e6c7181795170c973
}

function Dashboard() {
  return (
    <div className="main">
      <Welcome> </Welcome> <Chart />
      <Row>
        <Col md={9}>
          <Chart />
        </Col>{" "}
        <Col md={3}>
          <Chart2 />
        </Col>{" "}
      </Row>{" "}
      <Chart />
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
