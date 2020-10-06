import React from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

class EditDataLogistik extends React.Component {
  constructor() {
    super();
    this.state = {
      // id_logistik: "",
      nama_barang: "",
      jenis_kategori: "",
      nama: "",
      id_supplier: "",
      id_kategori: "",
      stok: "",
      expired: "",
      status: "",
      suppliers: [],
      categories: [],
    };

    this.onUpdate = this.onUpdate.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    // this.getOptionSupplier();
    // this.getOptionKategori();
    const logistikId = this.props.match.params.id_logistik;
    console.log(logistikId);

    axios
      .get(`http://localhost:8000/api/logistik/${logistikId}`)
      .then((response) => {
        this.setState({
          // id_logistik: response.data.id_logistik,
          nama_barang: response.data[0].nama_barang,
          jenis_kategori: response.data[0].jenis_kategori,
          nama: response.data[0].nama,

          id_supplier: response.data[0].id_supplier,
          id_kategori: response.data[0].id_kategori,
          stok: response.data[0].stok,
          expired: response.data[0].expired,
          status: response.data[0].status,
        });
        console.log(response.data[0]);
      });
    // .catch((error) => {
    //   console.log(error);
    // });
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

  // async getOptionSupplier() {
  //   const url = "http://localhost:8000/api/supplier/all";
  //   const response = await axios.get(url);
  //   this.setState(
  //     {
  //       suppliers: response.data,
  //     },
  //     () => {
  //       console.log(this.state.suppliers);
  //     }
  //   );
  // }

  // async getOptionKategori() {
  //   const url = "http://localhost:8000/api/kategori";
  //   const response = await axios.get(url);
  //   this.setState(
  //     {
  //       categories: response.data,
  //     },
  //     () => {
  //       console.log(this.state.categories);
  //     }
  //   );
  // }

  onUpdate = (e) => {
    e.preventDefault();

    const item = {
      // id_logistik: this.state.id_logistik,
      nama_barang: this.state.nama_barang,

      jenis_kategori: this.state.jenis_kategori,
      nama: this.state.nama,
      // id_supplier: this.state.id_supplier,
      // id_kategori: this.state.id_kategori,
      stok: this.state.stok,
      expired: this.state.expired,
      status: this.state.status,
    };

    const logistikId = this.props.match.params.id_logistik;
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
    console.log(this.props);
    // const { suppliers, categories } = this.state;
    return (
      <Container className="container-fluid">
        <div className="editDataLogistik">
          <h1 className="dataTitle">Ubah Data {this.state.nama_barang}</h1>
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
                  <option value="{this.state.id_supplier}">
                    {" "}
                    {this.state.nama}
                  </option>
                  {/* {suppliers.map((item, supplier) => (
                    <option key={supplier} value={item.id}>
                      {item.nama}
                    </option>
                  ))} */}
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
                  <option value="{this.state.id_kategori}">
                    {" "}
                    {this.state.jenis_kategori}
                  </option>
                  {/* {categories.map((item, kategori) => (

                    <option key={kategori} value={item.id}>
                      {item.jenis_kategori}
                    </option>
                  ))} */}
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
                  <option value="{this.state.status}">
                    {" "}
                    {this.state.status}
                  </option>
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
