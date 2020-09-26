import React from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class EditDataLaporan extends React.Component {
  render() {
    return (
      <Container className="container-fluid">
        <div className="editDataLaporan">
          <h1 className="dataTitle">Tambah Data Laporan</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/Laporan">Data Laporan</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Edit Data Laporan
              </li>
            </ol>
          </nav>

          <form action="#" method="post">
            <Row className="bencana">
              <Col className="col-md-2">
                <p>Bencana</p>
              </Col>
              <Col className="col-md-10">
                <select name="" id="" className="form-control">
                  <option value="#"> - Pilih Bencana -</option>
                  <option value="a">Tanah Longsor</option>
                  <option value="f">Banjir</option>
                </select>
              </Col>
            </Row>

            <Row className="tanggal">
              <Col className="col-md-2">
                <p>Tanggal</p>
              </Col>
              <Col className="col-md-4">
                <input type="date" className="form-control" name="" id="" />
              </Col>
              <Col className="col-md-1 offset-1 jam">
                <p>Jam</p>
              </Col>
              <Col className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  value=""
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
                  value=""
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
                  value=""
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
                <input type="file" name="foto" id="foto" />
              </Col>
            </Row>

            <Row className="submit">
              <Col className="col-md-2"></Col>
              <Col className="col-md-10">
                <input
                  type="submit"
                  value="Ubah Data"
                  className="form-control"
                />
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    );
  }
}

export default EditDataLaporan;
