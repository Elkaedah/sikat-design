import React from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import {Line} from 'react-chartjs-2';
//import { data } from "jquery";
import './js/isi.js'

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
  }
  componentDidMount() {
    console.log(this.chartReference); // returns a Chart.js instance reference
  }
  render() {
    return (
      <Container className="container-fluid">
        <Row className="chart">
          <Col className="col-md-9 ">
            <div className="judul">Grafik Rekapitulasi Bencana</div>
            <div className="select">
              <a href="">3 Bulan</a>
              <a href="">3 Bulan</a>
              <a href="">3 Bulan</a>
              <a href="">3 Bulan</a>
            </div>
            <Line
              data={isi.dataSelect()}
              options={isi.option()}
              height={500}
              width={700}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Chart;