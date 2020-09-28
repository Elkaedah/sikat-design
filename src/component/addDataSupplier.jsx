import React from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

class AddDataSupplier extends React.Component {
  constructor() {
    super();
    this.state = {
      // id: "",
      // nama: "",
      // alamat: "",
      input: {},
      errors: {},
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(event) {
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      // [name]: value,
      input,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (this.validate()) {
      const post = this.state.input;

      axios
        .post("http://localhost:8000/api/supplier", {
          // nama: this.state.nama,
          // alamat: this.state.alamat,
          post,
        })
        .then((response) => {
          console.log(response);

          // validate
          let input = {};
          input["nama"] = "";
          input["alamat"] = "";
          this.setState({ input: input });

          // alert("Post created successfully.");

          this.props.history.push("/Logistik/DataSupplier");
        });
    }
  };

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["nama"]) {
      isValid = false;
      errors["nama"] = "Please enter your title.";
    }

    if (!input["alamat"]) {
      isValid = false;
      errors["alamat"] = "Please enter your body.";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

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
                  value={this.state.input.nama}
                  onChange={this.handleInputChange}
                />
                <div className="text-danger">{this.state.errors.nama}</div>
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
                  value={this.state.input.alamat}
                  onChange={this.handleInputChange}
                ></textarea>

                <div className="text-danger">{this.state.errors.alamat}</div>
              </Col>
            </Row>
            <Row className="submit">
              <Col className="col-md-2"></Col>
              <Col className="col-md-9">
                <input
                  type="submit"
                  // onClick={this.onSubmit.bind(this)}
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
