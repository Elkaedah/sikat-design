import React from "react";
import "./style/index.scss";
import icoSearch from "./img/icon/IcoSearch.svg";
import icoDetail from "./img/icon/IcoDetail.svg";
import icoDelete from "./img/icon/IcoDelete.svg";
import arrowNext from "./img/icon/arrow-next.svg";
import arrowPrev from "./img/icon/arrow-prev.svg";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import axios from "axios";

class Laporan extends React.Component {
  render() {
    return (
      <Container className="container-fluid">
        <div className="laporan">
          <h1 className="dataTitle">Data Laporan</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Data Laporan
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
              <Link to="/AddDataLaporan">
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
                  <th>Bencana</th>
                  <th>Waktu</th>
                  <th>Konfirmasi</th>
                  <th>Verivikasi</th>
                  <th>Opsi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tanah Longsor</td>
                  <td>09:00 - 29/12/2020</td>
                  <td>Terkonfirmasi</td>
                  <td>Terverifikasi</td>
                  <td>
                    <Link to="/EditDataLogistik">
                      <a href="#" class="btn btn-primary edit">
                        <img
                          src={icoDetail}
                          alt="detail"
                          className="icoOptionDetail"
                        />
                      </a>
                    </Link>
                    <a href="#" class="btn btn-danger delete">
                      <img src={icoDelete} alt="delete" className="icoOption" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Tanah Longsor</td>
                  <td>09:00 - 29/12/2020</td>
                  <td>Terkonfirmasi</td>
                  <td>Terverifikasi</td>
                  <td>
                    <Link to="/EditDataLogistik">
                      <a href="#" class="btn btn-primary edit">
                        <img
                          src={icoDetail}
                          alt="detail"
                          className="icoOptionDetail"
                        />
                      </a>
                    </Link>
                    <a href="#" class="btn btn-danger delete">
                      <img src={icoDelete} alt="delete" className="icoOption" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Tanah Longsor</td>
                  <td>09:00 - 29/12/2020</td>
                  <td>Terkonfirmasi</td>
                  <td>Terverifikasi</td>
                  <td>
                    <Link to="/EditDataLogistik">
                      <a href="#" class="btn btn-primary edit">
                        <img
                          src={icoDetail}
                          alt="detail"
                          className="icoOptionDetail"
                        />
                      </a>
                    </Link>
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

export default Laporan;
