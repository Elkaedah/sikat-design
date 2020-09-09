import React from "react";
import icoEdit from "./img/icon/IcoEdit.svg";
import icoDelete from "./img/icon/IcoDelete.svg";

import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Tabel extends React.Component {
  render() {
    return (
      <div className="cardTable">
        <Table striped bordered hover>
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
        </Table>
      </div>
    );
  }
}
