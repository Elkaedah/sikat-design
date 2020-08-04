import React from "react";
import "./style/index.scss";
import { Container, Row, Col } from "react-bootstrap";
import Line from "chart.js";
//import { data } from "jquery";
import './js/isi.js'



class Chart extends React.Component {
  constructor(props) {
    super(props);
//  this.state = {
          
//             series: [{
//                 name: "Desktops",
//                 data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
//             }],
//             options: {
//               chart: {
//                 height: 350,
//                 type: 'line',
//                 zoom: {
//                   enabled: false
//                 }
//               },
//               dataLabels: {
//                 enabled: false
//               },
//               stroke: {
//                 curve: 'straight'
//               },
//               title: {
//                 text: 'Product Trends by Month',
//                 align: 'left'
//               },
//               grid: {
//                 row: {
//                   colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
//                   opacity: 0.5
//                 },
//               },
//               xaxis: {
//                 categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
//               }
//             },
          
          
//           };
        }
  
  render() {
    return (
      <Container className="container-fluid">
        <Row className="chart">
          <Col className="col-md-10 ">
            <div className="judul">Grafik Rekapitulasi Bencana</div>
            <div className="select">
              <a className="active-select" href="">
                1 Minggu
              </a>
              <a href="">1 Bulan</a>
              <a href="">6 Bulan</a>
              <a href="">1 Tahun</a>
            </div>
{/* 
            <div id="chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="line"
                height={350}
              />
            </div> */}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Chart;