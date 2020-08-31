import React from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class EditDataSupplier extends React.Component {
  render() {
    return (
      <Container className="container-fluid">
        <div className="editDataSupplier">
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
                <Link to="/DataSupplier">Data Supplier</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Ubah Data Supplier
              </li>
            </ol>
          </nav>

          <form action="#" method="post">
            <Row className="nama">
              <Col className="col-md-2">
                <h3>Nama</h3>
              </Col>
              <Col className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  value="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                />
              </Col>
            </Row>
            <Row className="alamat">
              <Col className="col-md-2">
                <h3>Alamat</h3>
              </Col>
              <Col className="col-md-9">
                <textarea
                  name="alamat"
                  id="alamat"
                  className="form-control"
                  rows="10"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </textarea>
              </Col>
            </Row>
            <Row className="submit">
              <Col className="col-md-2"></Col>
              <Col className="col-md-9">
                <input
                  type="submit"
                  value="Ubah Data"
                  className="form-control submit"
                />
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    );
  }
}

export default EditDataSupplier;
