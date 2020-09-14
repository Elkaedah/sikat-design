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

class DataSupplier extends React.Component {
  constructor() {
    super();
    this.state = {
      q: "",
      items: null,
    };

    this.onKeyPress = this.onKeyPress.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      q: event.target.value,
    });
  }

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      const url = "http://localhost:8000/api/supplier/search";
      const response = axios.post(url, null, { params: this.state.q });
      this.setState(
        {
          items: response.data,
        },
        () => {
          console.log(response);
        }
      );
    }
  };

  componentWillMount() {
    this.getList();
  }

  async getList(pageNumber = 1) {
    const url = "http://localhost:8000/api/supplier?page=" + pageNumber;
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

  onEdit = (itemid, e) => {
    e.preventDefault();

    var data = [...this.state.items];
    data.forEach((item, index) => {
      if (item.id === itemid) {
        this.setState({
          id: item.id,
          nama: item.nama,
          alamat: item.alamat,
        });
      }
    });
  };

  renderSupplierList() {
    const { data, current_page, per_page, total } = this.state.items;
    return (
      <div className="cardTable">
        <table className="table table-striped">
          <thead className="border-top-0">
            <tr>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Opsi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.nama}</td>
                <td>{item.alamat}</td>
                <td>
                  <button
                    href=""
                    className="btn btn-warning edit"
                    onClick={this.onEdit.bind(this, item.id)}
                  >
                    <img src={icoEdit} alt="edit" className="icoOption" />
                  </button>
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
        <div className="dataSupplier">
          <h1 className="dataTitle">Data Supplier</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/Logistik">Logistik</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Data Supplier
              </li>
            </ol>
          </nav>
          <Row>
            <Col className="col-md-6">
              <input
                type="text"
                className="form-control search"
                placeholder="Cari..."
                id="q"
                name="q"
                value={this.state.q}
                onChange={this.handleInputChange}
                onKeyPress={this.onKeyPress}
              />
              <img src={icoSearch} alt="search" className="icoSearch" />
            </Col>
            <Col className="col-md-6">
              <Link to="/AddDataSupplier">
                <a href="#" className="btn btn-custom1">
                  Tambah Data
                </a>
              </Link>
            </Col>
          </Row>

          {items && this.renderSupplierList()}
        </div>
      </Container>
    );
  }
}

export default DataSupplier;
