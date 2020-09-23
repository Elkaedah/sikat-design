import React from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class DataTimRelawan extends React.Component {
  render() {
    return (
      <Container className="container-fluid">
        <div className="dataTimRelawan">
          <h1 className="dataTitle">Data Tim Relawan</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/Penanggulangan">Penanggulangan Bencana</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Data Tim Relawan
              </li>
            </ol>
          </nav>
        </div>
      </Container>
    );
  }
}

export default DataTimRelawan;
