import React from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
// import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";

class EditDataSupplier extends React.Component {
  constructor() {
    super();
    this.state = {
      nama: "",
      alamat: "",
      // alert: null,
      // message: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentDidMount() {
    const supplierId = this.props.match.params.id;

    axios
      .get(`http://localhost:8000/api/supplier/${supplierId}`)
      .then((response) => {
        this.setState({
          nama: response.data.nama,
          alamat: response.data.alamat,
        });
      });
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // goToHome() {
  //   const getAlert = () => (
  //     <SweetAlert
  //       success
  //       title="Success!"
  //       onConfirm={() => this.onSuccess()}
  //       onCancel={this.hideAlert()}
  //       timeout={2000}
  //       confirmBtnText="Oke Siap"
  //     >
  //       {this.state.message}
  //     </SweetAlert>
  //   );
  //   this.setState({
  //     alert: getAlert(),
  //   });
  // }

  // onSuccess() {
  //   this.props.history.push("/DataSupplier");
  // }

  // hideAlert() {
  //   this.setState({
  //     alert: null,
  //   });
  // }

  onUpdate = (e) => {
    e.preventDefault();

    const item = {
      nama: this.state.nama,
      alamat: this.state.alamat,
    };

    const supplierId = this.props.match.params.id;
    axios
      .put(`http://localhost:8000/api/supplier/${supplierId}`, item)
      .then((response) => {
        console.log(response);
        this.props.history.push("/Logistik/DataSupplier");

        //   var msg = response.data.success;
        //   if (msg == true) {
        //     this.setState({
        //       message: response.data.message,
        //     });
        //     return this.goToHome();
        //   }
      });
  };

  render() {
    return (
      <Container className="container-fluid">
        <div className="editDataSupplier">
          <h1 className="dataTitle">Ubah Data {this.state.nama}</h1>
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
                Ubah Data Supplier
              </li>
            </ol>
          </nav>

          <form onSubmit={this.onUpdate} method="post">
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
                <button className="form-control">Ubah Data</button>
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    );
  }
}

export default withRouter(EditDataSupplier);
