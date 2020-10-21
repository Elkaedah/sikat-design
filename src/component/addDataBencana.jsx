import React, { useState } from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddDataBencana = (props) => {
  const [bencana, setBencana] = useState({ _id: "", nama: "", lokasi: "" });

  const onSubmit = () => {
    axios
      .post("http://localhost:8000/api/bencana", {
        nama: bencana.nama,
        lokasi: bencana.lokasi,
      })
      .then((result) => {
        console.log(result);

        props.history.push("/Penanggulangan/DataBencana");
      });
  };

  const { register, handleSubmit, errors } = useForm(onSubmit);

  const handleInputChange = (e) => {
    e.persist();
    setBencana({ ...bencana, [e.target.name]: e.target.value });
  };

  return (
    <Container className="container-fluid">
      <div className="addDataBencana">
        <h1 className="dataTitle">Tambah Data bencana</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/Penanggulangan">Penanggulangan Bencana</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/Penanggulangan/DataBencana">Data Bencana</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Tambah Data Bencana
            </li>
          </ol>
        </nav>

        <form onSubmit={handleSubmit(onSubmit)} method="post">
          <Row className="nama">
            <Col className="col-md-2">
              <h3>Bencana</h3>
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
                value={bencana.nama}
                onChange={handleInputChange}
              />
              {errors.nama && (
                <div className="invalid-feedback">Nama tidak boleh kosong</div>
              )}
            </Col>
          </Row>
          <Row className="lokasi">
            <Col className="col-md-2">
              <h3>Lokasi</h3>
            </Col>
            <Col className="col-md-9">
              <textarea
                name="lokasi"
                id="lokasi"
                className={
                  errors?.lokasi ? "is-invalid form-control" : "form-control"
                }
                rows="10"
                ref={register({ required: true, maxLength: 300 })}
                value={bencana.lokasi}
                onChange={handleInputChange}
              ></textarea>
              {errors.lokasi && (
                <div className="invalid-feedback">
                  Lokasi tidak boleh kosong
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

export default withRouter(AddDataBencana);
