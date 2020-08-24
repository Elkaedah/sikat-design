import React from 'react';
import "./style/index.scss";
import gambar from "./img/male.svg";
import logo from "./img/Logo.svg"
import { Container, Row, Col } from 'react-bootstrap';

class Welcome extends React.Component{
    render(){
        return (
          <Container fluid>
            <Row className="welcome">
              <Col md={5}>
                <img className="logo" src={logo} />
                <div>
                Hi! Selamat Datang Derry! di SIKAT BPBD Kabupaten Malang
              </div></Col>
              <Col md={{ span: 5, offset: 7}}>
                {" "}
                <img className="ilustration"src={gambar} />{" "}
              </Col>
            </Row>
          </Container>
        );
    }
}   
export default Welcome;