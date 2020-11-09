import React, { useState, useEffect } from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import axios from "axios";

const AddDataLaporan = (props) => {
  const [laporan, setLaporan] = useState({
    _id: "",
    jenis_bencana: "",
    lokasi: "",
    waktu: "",
    kalkulasi: "",
    jml_korban: "",
    jml_meninggal: "",
    keterangan: "",
  });

  const onSubmit = () => {
    axios
      .post("http://localhost:8000/api/laporan", {
        jenis_bencana: laporan.jenis_bencana,
        lokasi: laporan.lokasi,
        waktu: laporan.waktu,
        kalkulasi: laporan.kalkulasi,
        jml_korban: laporan.jml_korban,
        jml_meninggal: laporan.jml_meninggal,
        keterangan: laporan.keterangan,
      })
      .then((result) => {
        console.log(result);

        props.history.push("/Laporan");
      });
  };

  const { register, handleSubmit, errors } = useForm(onSubmit);
  const [startDate, setStartDate] = useState(new Date());

  const handleInputChange = (e) => {
    e.persist();
    setLaporan({ ...laporan, [e.target.name]: e.target.value });
  };

  return (
    <Container className="container-fluid">
      <div className="addDataLaporan">
        <h1 className="dataTitle">Tambah Data Laporan</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/Laporan">Data Laporan</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Tambah Data Laporan
            </li>
          </ol>
        </nav>

        <form onSubmit={handleSubmit(onSubmit)} method="post">
          <Row className="bencana">
            <Col className="col-md-2">
              <p>Bencana</p>
            </Col>
            <Col className="col-md-10">
              <select
                name="jenis_bencana"
                id="jenis_bencana"
                ref={register({ required: true })}
                value={laporan.jenis_bencana}
                onChange={handleInputChange}
                className={
                  errors?.jenis_bencana
                    ? "is-invalid form-control"
                    : "form-control"
                }
              >
                <option selected disabled value="">
                  {" "}
                  - Pilih Bencana -
                </option>
                <option value="Tanah Longsor">Tanah Longsor</option>
                <option value="Banjir">Banjir</option>
              </select>
              {errors.jenis_bencana && (
                <div className="invalid-feedback">
                  Bencana tidak boleh kosong
                </div>
              )}
            </Col>
          </Row>

          <Row className="tanggal">
            <Col className="col-md-2">
              <p>Tanggal</p>
            </Col>
            <Col className="col-md-10">
              <DatePicker
                // selected={startDate}
                selected={new Date()}
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy h:mm aa"
                showTimeInput
                name="waktu"
                id="waktu"
                className="form-control"
                ref={register({ required: true })}
                value={laporan.waktu}                
                onChange={date => setStartDate(date)}
                // onChange={handleInputChange, date => setStartDate(date)}
                // onChange={handleInputChange}
              />
            </Col>
          </Row>

          <Row className="kalkulasi">
            <Col className="col-md-2">
              <p>Kalkulasi</p>
            </Col>
            <Col className="col-md-10">
              <textarea
                name="kalkulasi"
                id="kalkulasi"
                className={
                  errors?.kalkulasi ? "is-invalid form-control" : "form-control"
                }
                rows="8"
                ref={register({ required: true, maxLength: 300 })}
                value={laporan.kalkulasi}
                onChange={handleInputChange}
              ></textarea>
              {errors.kalkulasi && (
                <div className="invalid-feedback">
                  Kalkulasi tidak boleh kosong
                </div>
              )}
            </Col>
          </Row>

          <Row className="jmlh">
            <Col className="col-md-2">
              <p>Jumlah Korban</p>
            </Col>
            <Col className="col-md-3">
              <input
                type="text"
                className={
                  errors?.jml_korban
                    ? "is-invalid form-control"
                    : "form-control"
                }
                name="jml_korban"
                id="jml_korban"
                ref={register({ required: true, maxLength: 11 })}
                value={laporan.jml_korban}
                onChange={handleInputChange}
              />
              {errors.jml_korban && (
                <div className="invalid-feedback">
                  Jumlah Korban tidak boleh kosong
                </div>
              )}
            </Col>
            <Col className="col-md-3 jmlh-meninggal">
              <p>Jumlah Meninggal</p>
            </Col>
            <Col className="col-md-4">
              <input
                type="text"
                className={
                  errors?.jml_meninggal
                    ? "is-invalid form-control"
                    : "form-control"
                }
                name="jml_meninggal"
                id="jml_meninggal"
                ref={register({ required: true, maxLength: 11 })}
                value={laporan.jml_meninggal}
                onChange={handleInputChange}
              />
              {errors.jml_meninggal && (
                <div className="invalid-feedback">
                  Jumlah Meninggal tidak boleh kosong
                </div>
              )}
            </Col>
          </Row>

          <Row className="keterangan">
            <Col className="col-md-2">
              <p>Keterangan</p>
            </Col>
            <Col className="col-md-10">
              <textarea
                name="keterangan"
                id="keterangan"
                className={
                  errors?.keterangan
                    ? "is-invalid form-control"
                    : "form-control"
                }
                rows="8"
                ref={register({ required: true, maxLength: 300 })}
                value={laporan.keterangan}
                onChange={handleInputChange}
              ></textarea>
              {errors.keterangan && (
                <div className="invalid-feedback">
                  Keterangan tidak boleh kosong
                </div>
              )}
            </Col>
          </Row>

          <Row className="foto">
            <Col className="col-md-2">
              <p>Foto</p>
            </Col>
            <Col className="col-md-10">
              <input type="file" name="foto" id="foto" />
            </Col>
          </Row>

          <Row className="submit">
            <Col className="col-md-2"></Col>
            <Col className="col-md-10">
              <input
                type="submit"
                value="Tambah Data"
                className="form-control"
              />
            </Col>
          </Row>
          <Row className="reset">
            <Col className="col-md-2"></Col>
            <Col className="col-md-10">
              <a href="" className="form-control btn btn-danger btn-reset">
                Reset
              </a>
            </Col>
          </Row>
        </form>
      </div>
    </Container>
  );
};

export default withRouter(AddDataLaporan);