import React from "react";
import "./style/index.scss";
import icoSearch from "./img/logistik/IcoSearch.svg";
import icoEdit from "./img/logistik/IcoEdit.svg";
import arrowNext from "./img/logistik/arrow-next.svg";
import arrowPrev from "./img/logistik/arrow-prev.svg";
import { getList } from './SupplierFunctions'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import axios from 'axios'

class DataSupplier extends React.Component {
  constructor() {
      super()
      this.state = {
          id: '',
          nama: '',
          alamat: '',
          items: null
      }
  }

  componentWillMount() {
      this.getList()
  }

  async getList(pageNumber = 1){
      const url = 'http://localhost:8000/api/supplier?page=' + pageNumber;
      const response = await axios.get(url);
          this.setState(
            {
              items: response.data
            },
            () => {
              console.log(this.state.items)
            });
  }

  onEdit = (itemid, e) => {
      e.preventDefault()

      var data = [...this.state.items]
      data.forEach((item, index) => {
          if (item.id === itemid) {
              this.setState({
                  id: item.id,
                  nama: item.nama,
                  alamat: item.alamat
              })
          }
      })
  }

  renderSupplierList(){
    const {data, current_page, per_page, total} = this.state.items;
    return(
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
                {/* <Link to="/EditDataSupplier">
                  <a href="#" class="btn btn-warning edit">
                    <img src={icoEdit} alt="edit" className="icoOption" />
                  </a>
                </Link> */}
                <button
                    href=""
                    className="btn btn-warning edit"
                    onClick={this.onEdit.bind(
                        this,
                        item.id
                    )}
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
              prevPageText={<i className='arrowPref'><img src={arrowPrev} alt="prev" className="icoPage" /></i>}
              nextPageText={<i className='arrowNext'><img src={arrowNext} alt="next" className="icoPage" /></i>}
              itemClass="page-item"
              linkClass="page-link"
              onChange={(pageNumber) => this.getList(pageNumber)}
            />
        </nav>
      </div> 
    )
  }

  render() {
    const {items} = this.state;
    return (
      <Container className="container-fluid">
        <div className="dataSupplier">
          <h1 className="dataTitle">Data Supplier</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li class="breadcrumb-item">
                <Link to="/Logistik">Logistik</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Data Supplier
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
              <Link to="/AddDataSupplier">
                <a href="" className="btn btn-custom1">
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
