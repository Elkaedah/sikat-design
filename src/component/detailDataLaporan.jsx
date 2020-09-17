import React from "react";
import "./style/index.scss";
import img_bencana from "./img/img_bencana.jpg";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class DetailDataLaporan extends React.Component {
  render() {
    return (
      <Container className="container-fluid">
        <div className="detailDataLaporan">
          <h1 className="dataTitle">Laporan ...</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/Laporan">Data Laporan</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Detail Data Laporan
              </li>
            </ol>
          </nav>

          <form action="#" method="post">
            <Row className="bencana">
              <Col className="col-md-2">
                <p>Bencana</p>
              </Col>
              <Col className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  value="Tanah Longsor ..."
                />
              </Col>
            </Row>

            <Row className="waktu">
              <Col className="col-md-2">
                <p>Waktu</p>
              </Col>
              <Col className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  value="09.00 - 29 Mei 2021"
                />
              </Col>
            </Row>

            <Row className="kalkulasi">
              <Col className="col-md-2">
                <p>Kalkulasi</p>
              </Col>
              <Col className="col-md-10">
                <textarea
                  name="kalkulasi"
                  id="kalkulasi"
                  className="form-control"
                  rows="8"
                ></textarea>
              </Col>
            </Row>

            <Row className="jmlh">
              <Col className="col-md-2">
                <p>Jumlah Korban</p>
              </Col>
              <Col className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  value="40"
                />
              </Col>
              <Col className="col-md-3 jmlh-meninggal">
                <p>Jumlah Meninggal</p>
              </Col>
              <Col className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  value="5"
                />
              </Col>
            </Row>

            <Row className="keterangan">
              <Col className="col-md-2">
                <p>Keterangan</p>
              </Col>
              <Col className="col-md-10">
                <textarea
                  name="keterangan"
                  id="keterangan"
                  className="form-control"
                  rows="8"
                ></textarea>
              </Col>
            </Row>

            <Row className="foto">
              <Col className="col-md-2">
                <p>Foto</p>
              </Col>
              <Col className="col-md-10">
                <img
                  src={img_bencana}
                  alt="foto-bencana"
                  className="foto-bencana"
                />
                <img
                  src={img_bencana}
                  alt="foto-bencana"
                  className="foto-bencana"
                />
                <img
                  src={img_bencana}
                  alt="foto-bencana"
                  className="foto-bencana"
                />
              </Col>
            </Row>

            <Row className="edit">
              <Col className="col-md-2"></Col>
              <Col className="col-md-10">
                <Link to="/EditDataLaporan">
                  <a href="" className="form-control btn btn-edit">
                    Edit Data
                  </a>
                </Link>
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    );
  }
}

export default DetailDataLaporan;
