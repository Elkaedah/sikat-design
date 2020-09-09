import React from "react";
import "./style/index.scss";
import icoSearch from "./img/logistik/IcoSearch.svg";
import icoEdit from "./img/logistik/IcoEdit.svg";
import icoDelete from "./img/logistik/IcoDelete.svg";
import arrowNext from "./img/logistik/arrow-next.svg";
import arrowPrev from "./img/logistik/arrow-prev.svg";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";

class DataLogistik extends React.Component {
  constructor() {
    super();
    this.state = {
      items: null
    };
  }

  componentWillMount() {
    this.getList();
  }

  async getList(pageNumber = 1) {
    const url = "http://localhost:8000/api/logistik?page=" + pageNumber;
    const response = await axios.get(url);
    this.setState(
      {
        items: response.data,
      },
      () => {
        console.log(this.state.items);
      }
    );
  }

  renderLogistikList() {
    const { data, current_page, per_page, total } = this.state.items;
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
                  <Link to="/EditDataLogistik">
                    <a href="#" className="btn btn-warning edit">
                      <img src={icoEdit} alt="edit" className="icoOption" />
                    </a>
                  </Link>
                  <a href="#" className="btn btn-danger delete">
                    <img src={icoDelete} alt="delete" className="icoOption" />
                  </a>
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
              <Link to="/AddDataLogistik">
                <a href="" className="btn btn-custom1">
                  Tambah Data
                </a>
              </Link>
            </Col>
          </Row>

          {items && this.renderLogistikList()}

        </div>
      </Container>
    );
  }
}

export default DataLogistik;
