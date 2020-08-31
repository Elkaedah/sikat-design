import React from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class EditDataLogistik extends React.Component {
  render() {
    return (
      <Container className="container-fluid">
        <div className="editDataLogistik">
          <h1 className="dataTitle">Ubah Data ...</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li class="breadcrumb-item">
                <Link to="/Logistik">Logistik</Link>
              </li>
              <li class="breadcrumb-item">
                <Link to="/DataLogistik">Data Logistik</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Ubah Data Logistik
              </li>
            </ol>
          </nav>

          <form action="#" method="post">
            <Row className="nama">
              <Col className="col-md-2">
                <h3>Nama</h3>
              </Col>
              <Col className="col-md-9">
                <input type="text" className="form-control" />
              </Col>
            </Row>
            <Row className="kategori">
              <Col className="col-md-2">
                <h3>Kategori</h3>
              </Col>
              <Col className="col-md-9">
                <select name="" id="" className="form-control">
                  <option value="#"> - Pilih Kategori -</option>
                  <option value="a">a</option>
                  <option value="f">f</option>
                </select>
              </Col>
            </Row>
            <Row className="supplier">
              <Col className="col-md-2">
                <h3>Supplier</h3>
              </Col>
              <Col className="col-md-9">
                <select name="" id="" className="form-control">
                  <option value="#"> - Pilih Supplier -</option>
                  <option value="a">a</option>
                  <option value="f">f</option>
                </select>
              </Col>
            </Row>

            <Row className="expired">
              <Col className="col-md-2">
                <h3>Expired</h3>
              </Col>
              <Col className="col-md-3">
                <input type="date" className="form-control" name="" id="" />
              </Col>
              <Col className="col-md-1 offset-1">
                <h3>Stok</h3>
              </Col>
              <Col className="col-md-4">
                <input type="text" className="form-control" />
              </Col>
            </Row>

            <Row className="submit">
              <Col className="col-md-2"></Col>
              <Col className="col-md-9">
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

export default EditDataLogistik;
