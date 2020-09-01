import React from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class AddDataSupplier extends React.Component {
  state = {
    form: {nama: "", alamat: ""},
    url: "http://localhost:8000/api/supplier/add"
  };

  createSupplier = async data => {
    await axios.post(this.state.url, {
        nama: data.nama,
        alamat: data.alamat
      })
  };

  handleChange = event => {
    const { name, value } = event.target;
    let form = this.state.form;
    form[name] = value;
    this.setState({ form });
  };

  onFormSubmit = data => {
    this.createSupplier(data)
  };

  clearFormFields = () => {
    console.log("clear");
    // // change form state
    // this.setState({
    //   supplier: { nama: "", alamat: "" }
    // });

    // // clear form fields
    // document.querySelector(".form").reset();
  };

  render() {
    return (
      <Container className="container-fluid">
        <div className="addDataSupplier">
          <h1 className="dataTitle">Tambah Data Supplier</h1>
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
                Tambah Data Supplier
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
                  name="nama" 
                  id="nama"
                  className="form-control" 
                  onChange={this.handleChange}  
                  value={this.state.form.nama} />
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
                  onChange={this.handleChange} 
                  value={this.state.form.alamat}
                ></textarea>
              </Col>
            </Row>
            <Row className="submit">
              <Col className="col-md-2"></Col>
              <Col className="col-md-9">
                <input
                  type="submit"
                  value="Tambah Data"
                  className="form-control"
                  onClick={this.onFormSubmit}
                />
              </Col>
            </Row>
            <Row className="reset">
              <Col className="col-md-2"></Col>
              <Col className="col-md-9">
                <button onClick={this.clearFormFields} className="form-control btn btn-danger btn-reset">
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

export default AddDataSupplier;
