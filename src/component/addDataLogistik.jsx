import React from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class AddDataLogistik extends React.Component {
  constructor() {
    super();
    this.state = {
      id_logistik: "",
      id_kategori: "",
      nama_barang: "",
      stok: "",
      id_supplier: "",
      status: "",
      expired: "",
      suppliers: [],
      categories: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/logistik', 
        { 
          id_kategori: this.state.id_kategori,
          nama_barang: this.state.nama_barang,
          stok: this.state.stok,
          id_supplier: this.state.id_supplier,
          status: this.state.status,
          expired: this.state.expired
        })
        .then(response => {
            console.log(response);
        });
    
  };

  componentDidMount() {
    this.getOptionSupplier();
    this.getOptionKategori();
  }

  async getOptionSupplier() {
    const url = "http://localhost:8000/api/supplier/all";
    const response = await axios.get(url);
    this.setState(
      {
        suppliers: response.data,
      },
      () => {
        console.log(this.state.suppliers);
      }
    );
  }

  async getOptionKategori() {
    const url = "http://localhost:8000/api/kategori";
    const response = await axios.get(url);
    this.setState(
      {
        categories: response.data,
      },
      () => {
        console.log(this.state.categories);
      }
    );
  }

  render() {
    const { suppliers, categories } = this.state;
    return (
      <Container className="container-fluid">
        <div className="addDataLogistik">
          <h1 className="dataTitle">Tambah Data Logistik</h1>
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
                Tambah Data Logistik
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
                  id="nama_barang"
                  name="nama_barang"
                  value={this.state.nama_barang} 
                  onChange={this.handleInputChange} />
              </Col>
            </Row>
            <Row className="kategori">
              <Col className="col-md-2">
                <h3>Kategori</h3>
              </Col>
              <Col className="col-md-9">
                <select name="id_kategori" id="id_kategori" value={this.state.id_kategori} onChange={this.handleInputChange} className="form-control">
                  <option value="#"> - Pilih Kategori -</option>
                  {
                    categories.map((item, kategori) => (
                      <option key={kategori} value={item.id}>{item.jenis_kategori}</option>
                    )
                  )}
                </select>
              </Col>
            </Row>

            <Row className="supplier">
              <Col className="col-md-2">
                <h3>Supplier</h3>
              </Col>
              <Col className="col-md-9">
                <select name="id_supplier" id="id_supplier" value={this.state.id_supplier} onChange={this.handleInputChange} className="form-control">
                  <option value="#"> - Pilih Supplier -</option>
                  {
                    suppliers.map((item, supplier) => (
                      <option key={supplier} value={item.id}>{item.nama}</option>
                    )
                  )}
                </select>
              </Col>
            </Row>

            <Row className="status">
              <Col className="col-md-2">
                <h3>Kondisi</h3>
              </Col>
              <Col className="col-md-9">
                <select name="status" id="status" value={this.state.status} onChange={this.handleInputChange} className="form-control">
                  <option value="#"> - Pilih Kondisi -</option>
                  <option value="baik"> Baik </option>
                  <option value="rusak"> Rusak </option>
                </select>
              </Col>
            </Row>

            <Row className="expired">
              <Col className="col-md-2">
                <h3>Expired</h3>
              </Col>
              <Col className="col-md-3">
                <input 
                  type="date" 
                  className="form-control" 
                  name="expired" 
                  id="expired"
                  value={this.state.expired} 
                  onChange={this.handleInputChange} />
              </Col>
              <Col className="col-md-1 offset-1">
                <h3>Stok</h3>
              </Col>
              <Col className="col-md-4">
                <input 
                  type="text" 
                  className="form-control"
                  id="stok"
                  name="stok"
                  value={this.state.stok} 
                  onChange={this.handleInputChange} />
              </Col>
            </Row>

            <Row className="submit">
              <Col className="col-md-2"></Col>
              <Col className="col-md-9">
                <input
                  type="submit"
                  onClick={this.onSubmit.bind(this)}
                  value="Tambah Data"
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="reset">
              <Col className="col-md-2"></Col>
              <Col className="col-md-9">
                <a href="" className="form-control btn btn-danger btn-reset">
                  Reset
                </a>
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    );
  }
}

export default AddDataLogistik;
