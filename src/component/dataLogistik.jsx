import React from "react";
import "./style/index.scss";
import icoSearch from "./img/icon/IcoSearch.svg";
import icoEdit from "./img/icon/IcoEdit.svg";
import arrowNext from "./img/icon/arrow-next.svg";
import arrowPrev from "./img/icon/arrow-prev.svg";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import axios from "axios";

class DataLogistik extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      loading: true,
    };
  }

  componentWillMount() {
    this.getList();
  }

  async getList(pageNumber = 1) {
    try {
      const url = "http://localhost:8000/api/logistik?page=" + pageNumber;
      const response = await axios.get(url, { timeout: 3500 });
      this.setState(
        {
          items: response.data,
          loading: false,
        },
        () => {
          console.log(this.state.items);
        }
      );
    } catch (err) {
      alert(err);
    }
  }

  renderLogistikList() {
    const { data, current_page, per_page, total } = this.state.items;
    const { loading } = this.state;
    if (loading) {
      return <div className="loader"></div>;
    } else {
      return (
        <div className="cardTable">
          <table className="table table-striped">
            <thead className="border-top-0">
              <tr>
                <th>Nama</th>
                <th>Kategori</th>
                <th>Stok</th>
                <th>Supplier</th>
                <th>Status</th>
                <th>Expired</th>
                <th>Opsi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.nama_barang}</td>
                  <td>{item.jenis_kategori}</td>
                  <td>{item.stok}</td>
                  <td>{item.nama}</td>
                  <td>{item.status}</td>
                  <td>{item.expired}</td>
                  <td>
                    <Link
                      to={`/Logistik/EditDataLogistik/${item.id_logistik}`}
                      className="btn btn-warning edit"
                    >
                      <img src={icoEdit} alt="edit" className="icoOption" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <nav aria-label="Page navigation example">
            <Pagination
              hideFirstLastPages
              innerClass="pagination justify-content-center"
              activePage={current_page}
              itemsCountPerPage={per_page}
              totalItemsCount={total}
              prevPageText={
                <img src={arrowPrev} alt="prev" className="icoPage" />
              }
              nextPageText={
                <img src={arrowNext} alt="next" className="icoPage" />
              }
              itemClass="page-item"
              linkClass="page-link"
              onChange={(pageNumber) => this.getList(pageNumber)}
            />
          </nav>
        </div>
      );
    }
  }

  render() {
    const { items } = this.state;
    return (
      <Container className="container-fluid">
        <div className="dataLogistik">
          <h1 className="dataTitle">Data Logistik</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/Logistik">Logistik</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Data Logistik
              </li>
            </ol>
          </nav>
          <Row>
            <Col className="col-md-6">
              <form action="#" method="post">
                <input
                  type="text"
                  className="form-control search"
                  placeholder="Cari..."
                />
                <img src={icoSearch} alt="search" className="icoSearch" />
              </form>
            </Col>
            <Col className="col-md-6">
              <Link to="/Logistik/AddDataLogistik" className="btn btn-custom1">
                Tambah Data
              </Link>
            </Col>
          </Row>

          {this.renderLogistikList()}
        </div>
      </Container>
    );
  }
}

export default DataLogistik;
