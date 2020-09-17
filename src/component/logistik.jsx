import React from "react";
import "./style/index.scss";
import logistik from "./img/logistik/Logistik.svg";
import supplier from "./img/logistik/Supplier.svg";
import arrow from "./img/icon/ArrowNext.svg";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Logistik extends React.Component {
  render() {
    return (
      <Container className="container-fluid">
        <div className="logistik">
          <h1 className="dataTitle">Data Logistik</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Logistik
              </li>
            </ol>
          </nav>
          <Row>
            <Col className="col-md-5 offset-1">
              <div className="box-card">
                <img className="imgCard" src={logistik} alt="Logistik" />
                <h2 className="boxTitle">KELOLA DATA LOGISTIK</h2>
                <Link
                  to="/Logistik/DataLogistik"
                  className="btn btn-block btn-custom1"
                >
                  Lebih Lanjut <img src={arrow} alt="btn" className="IcoNext" />
                </Link>
              </div>
            </Col>
            <Col className="col-md-5">
              <div className="box-card">
                <img className="imgCard" src={supplier} alt="Supplier" />
                <h2 className="boxTitle">KELOLA DATA SUPPLIER</h2>
                <Link
                  to="/Logistik/DataSupplier"
                  className="btn btn-block btn-custom1"
                >
                  Lebih Lanjut <img src={arrow} alt="btn" className="IcoNext" />
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Logistik;
