import React from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

class EditDataLogistik extends React.Component {
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
      categories: [],
    };

    this.onUpdate = this.onUpdate.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.getOptionSupplier();
    this.getOptionKategori();
    const logistikId = this.props.match.params.id;

    axios
      .get(`http://localhost:8000/api/logistik/${logistikId}`)
      .then((response) => {
        this.setState({
          id_logistik: response.data.id_logistik,
          id_kategori: response.data.id_kategori,
          nama_barang: response.data.nama_barang,
          stok: response.data.stok,
          id_supplier: response.data.id_supplier,
          status: response.data.status,
          expired: response.data.expired,
        });
      });
  }

  handleInputChange(event) {
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;

    this.setState({
      // [name]: value,
      [event.target.name]: event.target.value,
    });
  }

  // componentDidMount() {
  //   this.getOptionSupplier();
  //   this.getOptionKategori();
  // }

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

  onUpdate = (e) => {
    e.preventDefault();

    const item = {
      id_logistik: this.state.id_logistik,
      id_kategori: this.state.id_kategori,
      nama_barang: this.state.nama_barang,
      stok: this.state.stok,
      id_supplier: this.state.id_supplier,
      status: this.state.status,
      expired: this.state.expired,
    };

    const logistikId = this.props.match.params.id;
    axios
      .put(`http://localhost:8000/api/logistik/${logistikId}`, item)
      .then((response) => {
        console.log(response);
        this.props.history.push("/Logistik/DataLogistik");

        //   var msg = response.data.success;
        //   if (msg == true) {
        //     this.setState({
        //       message: response.data.message,
        //     });
        //     return this.goToHome();
        //   }
      });

    // axios
    //   .post("http://localhost:8000/api/logistik", {
    //     id_kategori: this.state.id_kategori,
    //     nama_barang: this.state.nama_barang,
    //     stok: this.state.stok,
    //     id_supplier: this.state.id_supplier,
    //     status: this.state.status,
    //     expired: this.state.expired,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     this.props.history.push("/Logistik/DataLogistik");
    //   });
  };

  render() {
    const { suppliers, categories } = this.state;
    return (
      <Container className="container-fluid">
        <div className="editDataLogistik">
          <h1 className="dataTitle">Ubah Data ...</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/Logistik">Logistik</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/Logistik/DataLogistik">Data Logistik</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Ubah Data Logistik
              </li>
            </ol>
          </nav>

          <form onSubmit={this.onUpdate} method="post">
            <Row className="nama">
              <Col className="col-md-2">
                <h3>Nama Barang</h3>
              </Col>
              <Col className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="nama_barang"
                  name="nama_barang"
                  value={this.state.nama_barang}
                  onChange={this.handleInputChange}
                />
              </Col>
            </Row>

            <Row className="supplier">
              <Col className="col-md-2">
                <h3>Supplier</h3>
              </Col>
              <Col className="col-md-9">
                <select
                  name="id_supplier"
                  id="id_supplier"
                  value={this.state.id_supplier}
                  onChange={this.handleInputChange}
                  className="form-control"
                >
                  <option value="#"> - Pilih Supplier -</option>
                  {suppliers.map((item, supplier) => (
                    <option key={supplier} value={item.id}>
                      {item.nama}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>

            <Row className="kategori">
              <Col className="col-md-2">
                <h3>Kategori</h3>
              </Col>
              <Col className="col-md-3">
                <select
                  name="id_kategori"
                  id="id_kategori"
                  value={this.state.id_kategori}
                  onChange={this.handleInputChange}
                  className="form-control"
                >
                  <option value="#"> - Pilih Kategori -</option>
                  {categories.map((item, kategori) => (
                    <option key={kategori} value={item.id}>
                      {item.jenis_kategori}
                    </option>
                  ))}
                </select>
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
                  onChange={this.handleInputChange}
                />
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
                  onChange={this.handleInputChange}
                />
              </Col>
              <Col className="col-md-2 kondisi">
                <h3>Kondisi</h3>
              </Col>
              <Col className="col-md-4">
                <select
                  name="status"
                  id="status"
                  value={this.state.status}
                  onChange={this.handleInputChange}
                  className="form-control"
                >
                  <option value="#"> - Pilih Kondisi Barang -</option>
                  <option value="baik"> Baik </option>
                  <option value="rusak"> Rusak </option>
                </select>
              </Col>
            </Row>

            <Row className="submit">
              <Col className="col-md-2"></Col>
              <Col className="col-md-9">
                {/* <input
                  type="submit"
                  onClick={this.onUpdate.bind(this)}
                  value="Ubah Data"
                  className="form-control"
                /> */}

                <button className="form-control">Ubah Data</button>
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    );
  }
}

export default withRouter(EditDataLogistik);
