import React, { useState, useEffect } from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddDataLogistik = (props) => {
  const [logistik, setLogistik] = useState({
    _id: "",
    id_kategori: "",
    nama_barang: "",
    stok: "",
    id_supplier: "",
    status: "",
    expired: "",
  });

  const onSubmit = () => {
    axios
      .post("http://localhost:8000/api/logistik", {
        id_kategori: logistik.id_kategori,
        nama_barang: logistik.nama_barang,
        stok: logistik.stok,
        id_supplier: logistik.id_supplier,
        status: logistik.status,
        expired: logistik.expired,
      })
      .then((result) => {
        console.log(result);

        props.history.push("/Logistik/DataLogistik");
      });
  };

  const { register, handleSubmit, errors } = useForm(onSubmit);

  const handleInputChange = (e) => {
    e.persist();
    setLogistik({ ...logistik, [e.target.name]: e.target.value });
  };

  const [suppliers, setSuppliers] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getOptionSupplier = async () => {
      const result = await axios.get("http://localhost:8000/api/supplier/all");
      setSuppliers(result.data);
    };

    const getOptionKategori = async () => {
      const result = await axios.get("http://localhost:8000/api/kategori");
      setCategories(result.data);
    };

    getOptionSupplier();
    getOptionKategori();
  }, []);

  return (
    <Container className="container-fluid">
      <div className="addDataLogistik">
        <h1 className="dataTitle">Tambah Data Logistik</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/Logistik">Logistik</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/Logistik/DataLogistik">Data Logistik</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Tambah Data Logistik
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
                  errors?.nama_barang
                    ? "is-invalid form-control"
                    : "form-control"
                }
                id="nama_barang"
                name="nama_barang"
                ref={register({ required: true, maxLength: 45 })}
                value={logistik.nama_barang}
                onChange={handleInputChange}
              />
              {errors.nama_barang && (
                <div className="invalid-feedback">Nama tidak boleh kosong</div>
              )}
            </Col>
          </Row>

          <Row className="supplier">
            <Col className="col-md-2">
              <h3>Supplier</h3>
            </Col>
            <Col className="col-md-9">
              <select
                name="id_supplier"
                id="id_supplier"
                ref={register({ required: true })}
                value={logistik.id_supplier}
                onChange={handleInputChange}
                // className="form-control"
                className={
                  errors?.id_supplier
                    ? "is-invalid form-control"
                    : "form-control"
                }
              >
                <option selected disabled value="">
                  {" "}
                  - Pilih Supplier -
                </option>
                {suppliers.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.nama}
                  </option>
                ))}
              </select>
              {errors.id_supplier && (
                <div className="invalid-feedback">
                  Supplier tidak boleh kosong
                </div>
              )}
            </Col>
          </Row>

          <Row className="kategori">
            <Col className="col-md-2">
              <h3>Kategori</h3>
            </Col>
            <Col className="col-md-3">
              <select
                name="id_kategori"
                id="id_kategori"
                ref={register({ required: true })}
                value={logistik.id_kategori}
                onChange={handleInputChange}
                // className="form-control"
                className={
                  errors?.id_kategori
                    ? "is-invalid form-control"
                    : "form-control"
                }
              >
                <option selected disabled value="">
                  {" "}
                  - Pilih Kategori -
                </option>
                {categories.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.jenis_kategori}
                  </option>
                ))}
              </select>
              {errors.id_kategori && (
                <div className="invalid-feedback">
                  Kategori tidak boleh kosong
                </div>
              )}
            </Col>
            <Col className="col-md-1 offset-1">
              <h3>Stok</h3>
            </Col>
            <Col className="col-md-4">
              <input
                type="text"
                className={
                  errors?.stok ? "is-invalid form-control" : "form-control"
                }
                id="stok"
                name="stok"
                ref={register({ required: true, maxLength: 20 })}
                value={logistik.stok}
                onChange={handleInputChange}
              />
              {errors.stok && (
                <div className="invalid-feedback">Stok tidak boleh kosong</div>
              )}
            </Col>
          </Row>

          <Row className="expired">
            <Col className="col-md-2">
              <h3>Expired</h3>
            </Col>
            <Col className="col-md-3">
              <input
                type="date"
                className={
                  errors?.expired ? "is-invalid form-control" : "form-control"
                }
                name="expired"
                id="expired"
                ref={register({ required: true })}
                value={logistik.expired}
                onChange={handleInputChange}
              />
              {errors.expired && (
                <div className="invalid-feedback">
                  Expired tidak boleh kosong
                </div>
              )}
            </Col>
            <Col className="col-md-2 kondisi">
              <h3>Kondisi</h3>
            </Col>
            <Col className="col-md-4">
              <select
                name="status"
                id="status"
                ref={register({ required: true })}
                value={logistik.status}
                onChange={handleInputChange}
                // className="form-control"
                className={
                  errors?.status ? "is-invalid form-control" : "form-control"
                }
              >
                <option selected disabled value="">
                  {" "}
                  - Pilih Kondisi Barang -
                </option>
                <option value="Baik"> Baik </option>
                <option value="Rusak"> Rusak </option>
              </select>
              {errors.status && (
                <div className="invalid-feedback">
                  Status tidak boleh kosong
                </div>
              )}
            </Col>
          </Row>

          <Row className="submit">
            <Col className="col-md-2"></Col>
            <Col className="col-md-9">
              <input
                type="submit"
                value="Tambah Data"
                className="form-control"
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

export default withRouter(AddDataLogistik);
