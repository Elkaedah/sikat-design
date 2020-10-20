import React from "react";
import "./style/index.scss";
import icoSearch from "./img/icon/IcoSearch.svg";
import icoDetail from "./img/icon/IcoDetail.svg";
import arrowNext from "./img/icon/arrow-next.svg";
import arrowPrev from "./img/icon/arrow-prev.svg";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import axios from "axios";

class Laporan extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      loading: true,
      query: "",
      massage: "",
    };
    this.cancel = "";
  }

  onChangeHandle = (event) => {
    const isi = event.target.value;
    if (!isi) {
      this.setState({ massage: "", loading: true }, () => this.onGetData(1));
    } else {
      this.setState({ query: isi, loading: true, massage: "" }, () => {
        this.onSearchData(isi);
      });
    }
  };

  onGetData = (page) => {
    const url = `http://localhost:8000/api/laporan?page=${page}`;
    if (this.cancel) {
      this.cancel.cancel();
    }
    this.cancel = axios.CancelToken.source();

    axios
      .get(url, { cancelToken: this.cancel.token }, { timeout: 3000 })
      .then((response) => {
        this.setState({
          items: response.data,
          loading: false,
          query: "",
          massage: "",
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            massage: "Failed Data, Please check",
          });
        }
      });
  };

  onSearchData = (data) => {
    const search = data ? `/search?q=${data}` : ``;
    const url = `http://localhost:8000/api/laporan${search}`;
    //${pageNumber}
    if (this.cancel) {
      this.cancel.cancel();
    }
    this.cancel = axios.CancelToken.source();

    axios
      .post(url, { cancelToken: this.cancel.token }, { timeout: 3000 })
      .then((response) => {
        const resultNotFound = !response.data ? "Data Kosong" : "";
        this.setState({
          items: response.data,
          massage: resultNotFound,
          loading: false,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            massage: "Failed Data, Please check",
          });
        }
      });
  };

  renderLaporan() {
    const { data, current_page, per_page, total } = this.state.items;
    const { loading, massage } = this.state;

    if (loading) {
      this.onGetData(1);
      return <div className="loader"></div>;
    } else if (massage) {
      return <div>{massage}</div>;
    } else if (data) {
      return (
        <div className="cardTable">
          <table className="table table-striped">
            <thead className="border-top-0">
              <tr>
                <th>Bencana</th>
                <th>Waktu</th>
                <th>Konfirmasi</th>
                <th>Opsi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
              <tr key={index}>
                <td>{item.jenis_bencana}</td>
                <td>{item.waktu}</td>
                <td>{item.verifikasi}</td>
                <td>
                  <Link
                    to="/Laporan/DetailDataLaporan/"
                    className="btn btn-primary detail"
                  >
                    <img
                      src={icoDetail}
                      alt="detail"
                      className="icoOptionDetail"
                    />
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
              onChange={(pageNumber) => this.onGetData(pageNumber)}
            />
          </nav>
        </div>
      );
    } else {
      return <>{massage}</>;
    }
  }


  render() {
    const { items, query, massage } = this.state;
    console.log(items);
    return (
      <Container className="container-fluid">
        <div className="laporan">
          <h1 className="dataTitle">Data Laporan</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Data Laporan
              </li>
            </ol>
          </nav>

          <Row>
            <Col className="col-md-6">
              <form action="#" method="">
                <input
                  type="text"
                  name="query"
                  className="form-control search"
                  placeholder="Cari..."
                  onChange={this.onChangeHandle}
                  value={query}
                />
                <img src={icoSearch} alt="search" className="icoSearch" />
              </form>
            </Col>
            <Col className="col-md-6">
              <Link to="/Laporan/AddDataLaporan" className="btn btn-custom1">
                Tambah Data
              </Link>
            </Col>
          </Row>
          {}
          {/* {massage} */}

          {this.renderLaporan()}            
        </div>
      </Container>
    );
  }
}

export default Laporan;
