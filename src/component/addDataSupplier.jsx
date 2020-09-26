import React from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

class AddDataSupplier extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
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

  onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/supplier", {
        nama: this.state.nama,
        alamat: this.state.alamat,
      })
      .then((response) => {
        console.log(response);
        this.props.history.push("/Logistik/DataSupplier");
      });
  };

  render() {
    return (
      <Container className="container-fluid">
        <div className="addDataSupplier">
          <h1 className="dataTitle">Tambah Data Supplier</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/Logistik">Logistik</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/Logistik/DataSupplier">Data Supplier</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Tambah Data Supplier
              </li>
            </ol>
          </nav>

          <form onSubmit={this.onSubmit} method="post">
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
                ></textarea>
              </Col>
            </Row>
            <Row className="submit">
              <Col className="col-md-2"></Col>
              <Col className="col-md-9">
                <input
                  type="submit"
                  onClick={this.onSubmit.bind(this)}
                  className="form-control"
                  value="Tambah Data"
                />
              </Col>
            </Row>
            <Row className="reset">
              <Col className="col-md-2"></Col>
              <Col className="col-md-9">
                <button className="form-control btn btn-danger btn-reset">
                  Reset
                </button>
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    );
  }
}

export default withRouter(AddDataSupplier);
