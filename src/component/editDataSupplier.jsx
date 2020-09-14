import React from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class EditDataSupplier extends React.Component {
  constructor() {
    super();
    this.state = {
      nama: "",
      alamat: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  onUpdate = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/supplier", {
        nama: this.state.nama,
        alamat: this.state.alamat,
      })
  };
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

          <form onUpdate={this.onUpdate} method="post">
          <Row className="nama">
              <Col className="col-md-2">
                <h3>Nama</h3>
              </Col>
              <Col className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="nama"
                  name="nama"
                  value={this.state.nama}
                  onChange={this.handleInputChange}
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
                  value={this.state.alamat}
                  onChange={this.handleInputChange}
                >
                </textarea>
              </Col>
            </Row>
            <Row className="submit">
              <Col className="col-md-2"></Col>
              <Col className="col-md-9">
              <input
                  type="submit"
                  onClick={this.onUpdate.bind(this)}
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

export default EditDataSupplier;
