import React from "react";
import "./style/index.scss";
import profile from "./img/profile-exam.jpg";
import {Container, Row, Nav, Form,Col,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function getList() {
  return new Promise(function (resolve) {
    setTimeout(() => resolve([1, 2, 3]), 1000);
  });
}

export default class User extends React.Component {
  state = {
    startDate: new Date(),
    isLoading: false,
    show: false,
    list: [],
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  onSubmit = (event) => {
    this.setState({ isLoading: true });
    getList().then((list) => {
      this.setState({
        isLoading: false,
        list,
        show: false,
      });
    });
  };
  render() {
    const user = {
      nama: "Muhammad Derry Ramadhan",
      kelamin: "Laki-laki",
      agama: 0,
      TempatLahir: "Gresik",
      Tanggal: "20 Desember 1999",
      Nomer: "0813-3216-0311",
      Alamat: "Desa Roomo Rt 05 Rw 01 No.40, Manyar, Gresik",
      Username: "Derry3",
      Password: "IniBukanPasswordku",
      Role: "Admin",
      foto: profile,
    };

    return (
      <Container fluid>
        <div className="addDataLogistik">
          <h1 className="dataTitle">Data Muhammad Derry Ramadhan</h1>
          <Nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li class="breadcrumb-item">
                <Link to="/User">User</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Pegawai
              </li>
            </ol>
          </Nav>
          <Form>
            {/* nama */}
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Nama
              </Form.Label>
              <Col sm={10}>
                <Form.Control placeholder={user.nama} />
              </Col>
            </Form.Group>
            {/* Jenis Kelamin dan Agama */}
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Jenis Kelamin
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  as="select"
                  className="mr-sm-2"
                  id="SelectKelamin"
                  custom
                >
                  <option value="0">Laki-laki</option>
                  <option value="1">Perempuan</option>
                </Form.Control>
              </Col>
              <Form.Label column sm={2}>
                Agama
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  as="select"
                  className="mr-sm-2"
                  id="inlineFormCustomSelect"
                  custom
                >
                  <option value="0">Islam</option>
                  <option value="1">Kristen</option>
                  <option value="2">Hindu</option>
                  <option value="3">Budha</option>
                  <option value="4">Katolik</option>
                  <option value="5">Konghuchu</option>
                </Form.Control>
              </Col>
            </Form.Group>
            {/* Tempat, Tanggal Lahir */}
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Tempat Lahir
              </Form.Label>
              <Col sm={4}>
                <Form.Control placeholder={user.TempatLahir} />
              </Col>
              <Form.Label column sm={2}>
                Tanggal Lahir
              </Form.Label>
              <Col sm={4}>
                <Form.Control as={DatePicker}
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                disabled/>
              </Col>
            </Form.Group>
            {/* Nomer Telephone */}
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                No Telp
              </Form.Label>
              <Col sm={10}>
                <Form.Control placeholder={user.Nomer} />
              </Col>
            </Form.Group>
            {/* alamat */}
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Alamat
              </Form.Label>
              <Col sm={10}>
                <Form.Control placeholder={user.Alamat} />
              </Col>
            </Form.Group>
            {/* Username */}
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Username
              </Form.Label>
              <Col sm={10}>
                <Form.Control placeholder={user.Username} />
              </Col>
            </Form.Group>
            {/* Password */}
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="password" value={user.Password} disabled />
              </Col>
            </Form.Group>
            {/* Role */}
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Jabatan
              </Form.Label>
              <Col sm={10}>
                <Form.Control placeholder={user.Role} disabled />
              </Col>
            </Form.Group>
            {/* File */}
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Foto
              </Form.Label>
              <Col sm={10}>
                <Form.File
                  className="position-relative"
                  required
                  name="file"
                  //   value={user.foto}
                  id="validationFormik107"
                  feedbackTooltip
                />
              </Col>
            </Form.Group>
            {/* Button */}
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}></Form.Label>
              <Col sm={10}>
                <Button
                  type="submit"
                  size="lg"
                  onClick={this.onSubmit}
                  disabled={this.state.isLoading}
                  block
                  style={{
                    background:
                      "linear-gradient(to Left, rgb(247, 127, 0), #ffa23d)",
                    border: "none",
                  }}
                >
                  {this.state.isLoading ? "Loading..." : "Edit Data"}
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </Container>
    );
  }
}

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
