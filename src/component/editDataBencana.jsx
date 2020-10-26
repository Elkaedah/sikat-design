import React from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

class EditDataBencana extends React.Component {
  constructor() {
    super();
    this.state = {
      nama: "",
      lokasi: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentDidMount() {
    const bencanaId = this.props.match.params.id;

    axios
      .get(`http://localhost:8000/api/bencana/${bencanaId}`)
      .then((response) => {
        this.setState({
          nama: response.data.nama,
          lokasi: response.data.lokasi,
        });
        console.log(response.data);
      });
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onUpdate = (e) => {
    e.preventDefault();

    const item = {
      nama: this.state.nama,
      lokasi: this.state.lokasi,
    };

    const bencanaId = this.props.match.params.id;
    axios
      .put(`http://localhost:8000/api/bencana/${bencanaId}`, item)
      .then((response) => {
        console.log(response);
        this.props.history.push("/Penanggulangan/DataBencana");
      });
  };

  render() {
    return (
      <Container className="container-fluid">
        <div className="editDataBencana">
          <h1 className="dataTitle">Ubah Data {this.state.nama}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/Penanggulangan">Penanggulangan Bencana</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/Penanggulangan/DataBencana">Data Bencana</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Ubah Data Bencana
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
                  // value={this.state.nama}
                  onChange={this.handleInputChange}
                />
              </Col>
            </Row>
            <Row className="lokasi">
              <Col className="col-md-2">
                <h3>Lokasi</h3>
              </Col>
              <Col className="col-md-9">
                <textarea
                  name="lokasi"
                  id="lokasi"
                  className="form-control"
                  rows="10"
                  // value={this.state.lokasi}
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

export default withRouter(EditDataBencana);
