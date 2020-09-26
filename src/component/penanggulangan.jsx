import React from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Penanggulangan extends React.Component {
  render() {
    return (
      <Container className="container-fluid">
        <div className="penanggulangan">
          <h1 className="dataTitle">Penanggulangan Bencana</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Penanggulangan Bencana
              </li>
            </ol>
          </nav>

          <Link to="/Penanggulangan/DataBencana">Data Bencana</Link>
          <br />
          <Link to="/Penanggulangan/DataBantuan">Data Bantuan</Link>
          <br />
          <Link to="/Penanggulangan/DataTimRelawan">Data Tim Relawan</Link>
        </div>
      </Container>
    );
  }
}

export default Penanggulangan;
