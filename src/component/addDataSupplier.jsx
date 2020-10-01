import React, { useState } from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddDataSupplier = (props) => {
  const [supplier, setSupplier] = useState({ _id: "", nama: "", alamat: "" });

  const onSubmit = () => {
    axios
      .post("http://localhost:8000/api/supplier", {
        nama: supplier.nama,
        alamat: supplier.alamat,
      })
      .then((result) => {
        console.log(result);

        props.history.push("/Logistik/DataSupplier");
      });
  };

  const { register, handleSubmit, errors } = useForm(onSubmit);

  const handleInputChange = (e) => {
    e.persist();
    setSupplier({ ...supplier, [e.target.name]: e.target.value });
  };

  return (
    <Container className="container-fluid">
      <div className="addDataSupplier">
        <h1 className="dataTitle">Tambah Data Supplier</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/Logistik">Logistik</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/Logistik/DataSupplier">Data Supplier</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Tambah Data Supplier
            </li>
          </ol>
        </nav>

        <form onSubmit={handleSubmit(onSubmit)} method="post">
          <Row className="nama">
            <Col className="col-md-2">
              <h3>Nama</h3>
            </Col>
            <Col className="col-md-9">
              <input
                type="text"
                className={
                  errors?.nama ? "is-invalid form-control" : "form-control"
                }
                id="nama"
                name="nama"
                ref={register({ required: true, maxLength: 45 })}
                value={supplier.nama}
                onChange={handleInputChange}
              />
              {errors.nama && (
                <div className="invalid-feedback">Nama tidak boleh kosong</div>
              )}
            </Col>
          </Row>
          <Row className="alamat">
            <Col className="col-md-2">
              <h3>Alamat</h3>
            </Col>
            <Col className="col-md-9">
              <textarea
                name="alamat"
                id="alamat"
                className={
                  errors?.alamat ? "is-invalid form-control" : "form-control"
                }
                rows="10"
                ref={register({ required: true, maxLength: 300 })}
                value={supplier.alamat}
                onChange={handleInputChange}
              ></textarea>
              {errors.alamat && (
                <div className="invalid-feedback">
                  Alamat tidak boleh kosong
                </div>
              )}
            </Col>
          </Row>
          <Row className="submit">
            <Col className="col-md-2"></Col>
            <Col className="col-md-9">
              <input
                type="submit"
                className="form-control"
                value="Tambah Data"
              />
            </Col>
          </Row>
          <Row className="reset">
            <Col className="col-md-2"></Col>
            <Col className="col-md-9">
              <button className="form-control btn btn-danger btn-reset">
                Reset
              </button>
            </Col>
          </Row>
        </form>
      </div>
    </Container>
  );
};

export default withRouter(AddDataSupplier);
