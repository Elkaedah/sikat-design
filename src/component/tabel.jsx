import React, { useState, useEffect } from "react";
import icoEdit from "./img/icon/IcoEdit.svg";
import icoDelete from "./img/icon/IcoDelete.svg";
import icoSearch from "./img/icon/IcoSearch.svg";
import {  Link, useParams, withRouter } from "react-router-dom";
import {Col,Container,Row} from "react-bootstrap";
import axios from "axios";

class Tabel extends React.Component {
  constructor() {
    super();
    this.state = {
      items: null,
    };
  }

  componentWillMount() {
    this.getList();
  }

   getList = async() => {
     try{
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await axios.get(url);
    console.log(response.data);
    // console.log(Halaman())
    this.setState(
    {
      items :response.data
    },  
    () => {
      console.log(this.state.items);
    });
  }catch(err){
    console.log (err);
  }
}

  async renderTableHeader() {
    let header = await Object.keys(this.state.items);
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }
  renderLogistikList() {
    const { data } = this.state.items;
    return (
      <div className="cardTable">
        <table className="table table-striped">
          <thead className="border-top-0">
            <tr>
              <this.state.Post />
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    );
  }
  render(){
    console.log(Halaman)
    const { items } = this.state;
  return (
    <Container fluid>
    <div className="dataLogistik">
      <h1 className="dataTitle">Data Logistik</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Data Pegawai
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
export default withRouter(Tabel);

function Halaman (){
  let id = useParams();
  console.log(id);

//   <Link to="/EditDataLogistik">
//   <a href="#" className="btn btn-warning edit">
//     <img src={icoEdit} alt="edit" className="icoOption" />
//   </a>
// </Link>
// <a href="#" className="btn btn-danger delete">
//   <img src={icoDelete} alt="delete" className="icoOption" />
// </a>

}