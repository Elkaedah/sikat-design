import React from "react";
import "./style/index.scss";
import icoSearch from "./img/icon/IcoSearch.svg";
import icoEdit from "./img/icon/IcoEdit.svg";
import icoDelete from "./img/icon/IcoDelete.svg";
import arrowNext from "./img/icon/arrow-next.svg";
import arrowPrev from "./img/icon/arrow-prev.svg";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class DataLogistik extends React.Component {
  render() {
    return (
      <Container className="container-fluid">
        <div className="dataLogistik">
          <h1 className="dataTitle">Data Logistik</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li class="breadcrumb-item">
                <Link to="/Logistik">Logistik</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Data Logistik
              </li>
            </ol>
          </nav>
          <Row className="">
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
                <tr>
                  <td>Indomie Goreng</td>
                  <td>Makanan</td>
                  <td>1530</td>
                  <td>PT.Bantuan Sosial</td>
                  <td>Status</td>
                  <td>29-12-2023</td>
                  <td>
                    <Link to="/EditDataLogistik">
                      <a href="#" class="btn btn-warning edit">
                        <img src={icoEdit} alt="edit" className="icoOption" />
                      </a>
                    </Link>
                    <a href="#" class="btn btn-danger delete">
                      <img src={icoDelete} alt="delete" className="icoOption" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Indomie Goreng</td>
                  <td>Makanan</td>
                  <td>1530</td>
                  <td>PT.Bantuan Sosial</td>
                  <td>Status</td>
                  <td>29-12-2023</td>
                  <td>
                    <a href="#" class="btn btn-warning edit">
                      <img src={icoEdit} alt="edit" className="icoOption" />
                    </a>
                    <a href="#" class="btn btn-danger delete">
                      <img src={icoDelete} alt="delete" className="icoOption" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Indomie Goreng</td>
                  <td>Makanan</td>
                  <td>1530</td>
                  <td>PT.Bantuan Sosial</td>
                  <td>Status</td>
                  <td>29-12-2023</td>
                  <td>
                    <a href="#" class="btn btn-warning edit">
                      <img src={icoEdit} alt="edit" className="icoOption" />
                    </a>
                    <a href="#" class="btn btn-danger delete">
                      <img src={icoDelete} alt="delete" className="icoOption" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a href="" class="arrowPrev">
                    <img src={arrowPrev} alt="prev" className="icoPage" />
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a href="" class="arrowNext">
                    <img src={arrowNext} alt="next" className="icoPage" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    );
  }
}

export default DataLogistik;
