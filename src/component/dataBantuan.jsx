import React from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class DataBantuan extends React.Component {
  render() {
    return (
      <Container className="container-fluid">
        <div className="dataBantuan">
          <h1 className="dataTitle">Data Bantuan</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/Penanggulangan">Penanggulangan Bencana</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Data Bantuan
              </li>
            </ol>
          </nav>
        </div>
      </Container>
    );
  }
}

export default DataBantuan;
